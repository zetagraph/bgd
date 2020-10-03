module.exports = {
  siteMetadata: {
    title: `Bureau of Good Design · Andrei Zvonkov - UX Designer `,
    description: `Ten Principles of Good Design by Dieter Rams`,
    author: `Andrei Zvonkov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrei Zvonkov - UX Designer`,
        short_name: `AZ - UX`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/assets/svgs/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-react-svg`,
    },
    `gatsby-plugin-offline`,
  ],
}
