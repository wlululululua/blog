import styled from "styled-components";
import { Link } from "gatsby";

export const PostItemEl = styled.div`
    padding: 2em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & + & {
        border-top: solid 3px var(--purple-50);
    }
`;

export const PostCover = styled(Link)`
    width: 250px;
    height: 150px;
`;

export const PostInfo = styled.div`
    flex-grow: 1;
    div {
        margin-top: 1rem;
    }
`;
