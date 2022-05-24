exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    //get template path
    const postTemplate = require.resolve("./src/templates/post.js");

    //get data
    const result = await graphql(`
        {
            allSanityPost {
                nodes {
                    id
                    slug {
                        current
                    }
                }
            }
        }
    `);

    if (result.errors) throw result.errors;

    const posts = result.data.allSanityPost.nodes;

    //use data and template to create single post page
    posts.forEach((post) => {
        createPage({
            path: `/blogs/${post.slug.current}`,
            component: postTemplate,
            context: { id: post.id },
        });
    });
};
