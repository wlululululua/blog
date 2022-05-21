export default {
    title: "Category",
    name: "category",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
        },
        {
            title: "Description",
            name: "description",
            type: "normalText",
        },
        {
            title: "Cover Image",
            name: "coverImage",
            type: "customImage",
        },
    ],
    preview: {
        select: {
            title: "name",
            image: "coverImage",
            slug: "slug",
        },
        prepare({ title, image, slug }) {
            return {
                title,
                media: image,
                subtitle: slug.current,
            };
        },
    },
};
