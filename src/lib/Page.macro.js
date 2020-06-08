/* eslint-env node */

const path = require('path');
const {createMacro} = require('babel-plugin-macros');
const {createImportMDX} = require('./astHelper');

/**
 *  In: <Page import="..." />
 * Out: <Iona.PageLoader promise={import('!babel-loader!mdx-loader!...')} sourceId={?} sourcePath={?} />
 */

function macro({ references, state, babel }) {
  references.default.map(referencePath => {
    if (referencePath.parentPath.type === 'JSXOpeningElement' && referencePath.parentPath.node.selfClosing) {
      convertToLoader({ referencePath, state, babel });
    } else {
      throw new Error(`Bad macro call: \`${referencePath.findParent(babel.types.isExpression).getSource()}\`.`);
    }
  });
}

function convertToLoader({ referencePath, state, babel }) {
  const t = babel.types;
  const callExpressionPath = referencePath.parentPath;

  let importPath;

  let attributes = callExpressionPath.get('attributes');

  try {
    for (let i = 0; i !== attributes.length; i++) {
      const node = attributes[i];
      if (t.isJSXAttribute(node) && t.isJSXIdentifier(node.get('name')) && ~['import', 'src'].indexOf(node.get('name').node.name)) {
        importPath = node.get('value').evaluate().value;
        break;
      }
    }
  } catch (err) {
    // swallow error, print better error below
  }

  if (importPath === undefined) {
    throw new Error(`There was a problem evaluating the value of the argument for the code: \`${callExpressionPath.getSource()}\`.` +
                    `If the value is dynamic, please make sure that its value is statically deterministic.`);
  }

  referencePath.parentPath.replaceWith(
    t.jSXOpeningElement(
      t.jSXMemberExpression(t.jSXIdentifier('Iona'), t.jSXIdentifier('PageLoader')), [
        t.jSXAttribute(
          t.jSXIdentifier('promise'),
          t.jSXExpressionContainer(
            createImportMDX(t, importPath)
          )
        ),
        t.jSXAttribute(
          t.jSXIdentifier('sourceId'),
          t.stringLiteral(path.resolve(path.dirname(state.filename), importPath)),
        ),
        t.jSXAttribute(
          t.jSXIdentifier('sourcePath'),
          t.stringLiteral(importPath),
        )
      ]
    )
  );
}

module.exports = createMacro(macro);
