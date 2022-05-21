export default {
    title: "Tag",
    name: "tag",
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
    ],
    preview: {
        select: {
            title: "name",
            slug: "slug",
        },
        prepare({ title, slug }) {
            return {
                title,
                subtitle: slug.current,
            };
        },
    },
};
