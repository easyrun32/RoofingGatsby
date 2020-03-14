module.exports = {
  siteMetadata: {
    title: `Gatsby Netlify Form Integration`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/contact/`]
      }
    }
  ]
};
