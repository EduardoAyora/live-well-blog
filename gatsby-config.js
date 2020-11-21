require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'blog',
    author: 'autor'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
