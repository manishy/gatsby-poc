module.exports = {
  siteMetadata: {
    title: "Library",
    description: "A collection of books",
  },
  pathPrefix: "/pfcms-poc",
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
  ],
};
