module.exports = {
  siteMetadata: {
    title: `Gatsby Netlify Form Integration`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Frank Stevens Roofing Inc",
        short_name: "Frank Stevens Roofing Inc",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: `src/images/logo180.png`,
        icons: [
          {
            src: `/images/logo180.png`,
            sizes: `180x180`,
            type: `image/png`
          },
          {
            src: `/images/logo192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/images/logo512.jpg`,
            sizes: `512x512`,
            type: `image/png`
          }
        ],

        // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`
      }
    }
  ]
};
