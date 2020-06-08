/* eslint-env node */

const createImportMDX = (t, importPath) => {
  return t.callExpression(t.identifier("import"), [
    t.stringLiteral(`!${require.resolve('babel-loader')}?{"plugins":["babel-plugin-macros"]}!${require.resolve('mdx-loader')}!${importPath}`),
  ]);
};

module.exports = { createImportMDX };
