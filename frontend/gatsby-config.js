module.exports = {
    siteMetadata: {
        title: "lulusaikou",
        siteUrl: "https://lulusaikou.gatsbyjs.io/",
        description: "wlulu's blog",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-styled-components",
        },
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "y1isdcfi",
                dataset: "production",
            },
        },
    ],
};
