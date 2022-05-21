export default {
    title: "Author",
    name: "author",
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
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            title: "Profile Image",
            name: "profileImage",
            type: "customImage",
        },
        {
            title: "Bio",
            name: "bio",
            type: "text",
        },
    ],
    preview: {
        select: {
            title: "name",
            image: "profileImage",
            bio: "bio",
        },
        prepare({ title, image, bio }) {
            return {
                title,
                media: image,
                subtitle: bio,
            };
        },
    },
};
