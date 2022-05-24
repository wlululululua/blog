import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { format } from "date-fns";
import { PostItemEl, PostCover, PostInfo } from "./PostItem.styled";
import H2 from "../styled/H2.styled";
import { Device } from "../../styles/Theme";
import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../styled/Button.styled";

const PostItem = ({ path, title, tags, categories, image, publishedAt }) => {
    const isDesktop = useMediaQuery(Device.Desktop);
    return (
        <PostItemEl>
            <PostInfo>
                <Link to={`/blogs/${path}`}>
                    <H2>{title}</H2>
                </Link>
                <span>{format(new Date(publishedAt), "yyyy年MM月d日 p")}</span>
                <div>
                    {tags.map((tag) => (
                        <Button to={`/tags/${tag.slug.current}`}>
                            {tag.name}
                        </Button>
                    ))}
                </div>

                <div>
                    {categories.map((category) => (
                        <Button to={`/categories/${category.slug.current}`}>
                            {category.name}
                        </Button>
                    ))}
                </div>
            </PostInfo>

            {isDesktop && (
                <PostCover to={`/blogs/${path}`}>
                    {image ? (
                        <GatsbyImage
                            image={image.asset.gatsbyImageData}
                            alt={image.alt}
                            width={250}
                            height={150}
                        />
                    ) : (
                        <StaticImage
                            src="../../images/read-more.jpg"
                            alt="read more"
                            width={250}
                            height={150}
                        />
                    )}
                </PostCover>
            )}
        </PostItemEl>
    );
};

export default PostItem;
