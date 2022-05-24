import styled from "styled-components";
import { Link } from "gatsby";

export default styled(Link)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    padding: 0.5em 1.5em;
    background-color: var(--purple-50);
    & + & {
        margin-left: 1rem;
    }
`;
