import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PostItem from "./PostItem";
import PostsStyles from "./Posts.styled";

const Posts = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityPost {
                nodes {
                    id
                    slug {
                        current
                    }
                    title
                    publishedAt
                    tags {
                        name
                        slug {
                            current
                        }
                    }
                    categories {
                        name
                        slug {
                            current
                        }
                    }
                    coverImage {
                        alt
                        asset {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    const posts = data.allSanityPost.nodes;

    return (
        <PostsStyles>
            {posts &&
                posts.map((post) => (
                    <PostItem
                        key={post.id}
                        path={post.slug.current}
                        title={post.title}
                        tags={post.tags}
                        categories={post.categories}
                        image={post.coverImage}
                        publishedAt={post.publishedAt}
                    />
                ))}
        </PostsStyles>
    );
};

export default Posts;
