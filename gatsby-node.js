exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(filter: { internal: { contentFilePath: { regex: "/content/pages/" } } }) {
        nodes {
          id
          frontmatter { slug }
          internal { contentFilePath }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;
  const nodes = result.data.allMdx.nodes;
  nodes.forEach(node => {
    const slug = node.frontmatter?.slug || node.id;
    createPage({
      path: `/${slug}/`,
      component: `${require.resolve("./src/templates/page.jsx")}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id }
    });
  });
};
