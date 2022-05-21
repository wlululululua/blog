import { MdCode } from "react-icons/md";

export default {
    title: "Code",
    name: "customCode",
    type: "object",
    icon: MdCode,
    fields: [
        {
            title: "Code",
            name: "code",
            type: "code",
        },
    ],
    preview: {
        select: {
            title: "code.code",
        },
    },
};
