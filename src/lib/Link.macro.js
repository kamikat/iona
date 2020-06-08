/* eslint-env node */

const path = require('path');
const {createMacro} = require('babel-plugin-macros');
const {createImportMDX} = require('./astHelper');

/**
 *  In: <Link to="...">{...}</Link>
 * Out: <Iona.RefLinkLoader promise={import('!babel-loader!mdx-loader!...')} sourceId={?} sourcePath={?}>{...}</Iona.RefLinkLoader>
 */

function macro({ references, state, babel }) {
  references.default.map(referencePath => {
    if (referencePath.parentPath.type === 'JSXOpeningElement') {
      convertToLoader({ referencePath, state, babel });
    } else if (referencePath.parentPath.type === 'JSXClosingElement') {
      const t = babel.types;
      referencePath.parentPath.replaceWith(
        t.jSXClosingElement(
          t.jSXMemberExpression(t.jSXIdentifier('Iona'), t.jSXIdentifier('RefLinkLoader'))
        )
      );
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
      if (t.isJSXAttribute(node) && t.isJSXIdentifier(node.get('name')) && node.get('name').node.name === 'to') {
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

  if (importPath.startsWith('.')) {
    referencePath.parentPath.replaceWith(
      t.jSXOpeningElement(
        t.jSXMemberExpression(t.jSXIdentifier('Iona'), t.jSXIdentifier('RefLinkLoader')), [
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
  } else {
    referencePath.replaceWith(
      t.jSXMemberExpression(t.jSXIdentifier('Iona'), t.jSXIdentifier('RefLinkLoader'))
    );
  }
}

module.exports = createMacro(macro);
