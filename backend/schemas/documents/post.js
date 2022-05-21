import { format } from "date-fns";

export default {
    title: "Post",
    name: "post",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            title: "Published At",
            name: "publishedAt",
            type: "datetime",
        },
        {
            title: "Author",
            name: "author",
            type: "reference",
            to: [{ type: "author" }],
        },
        {
            title: "Categories",
            name: "categories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "category" }],
                },
            ],
        },
        {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "tag" }],
                },
            ],
        },
        {
            title: "Excerpt",
            name: "excerpt",
            type: "normalText",
        },
        {
            title: "Cover Image",
            name: "coverImage",
            type: "customImage",
            options: {
                hotspot: true,
            },
        },
        {
            title: "Post Body",
            name: "body",
            type: "richText",
        },
    ],
    preview: {
        select: {
            image: "coverImage",
            title: "title",
            publishedAt: "publishedAt",
        },
        prepare({ image, title, publishedAt }) {
            return {
                title,
                media: image,
                subtitle: publishedAt
                    ? format(new Date(publishedAt), "yyyy/MM/dd p")
                    : "",
            };
        },
    },
};
