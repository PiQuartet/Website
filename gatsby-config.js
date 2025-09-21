/** @type {import('gatsby').GatsbyConfig} */
module.exports = { plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/content/pages` },
    },
    `gatsby-plugin-mdx`
  ] };
