import styled from "styled-components";
import { Device } from "../../styles/Theme";

const HeroStyled = styled.div`
    padding: 20px 10%;
    display: flex;
    flex-direction: column;

    .words {
        padding: 2rem 0;
        background-color: var(--purple-200);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--purple-50);
        p {
            line-height: 1.5;
        }
    }

    @media ${Device.Desktop} {
        flex-direction: row;
        .image {
            width: 500px;
        }
        .words {
            flex-grow: 1;
            font-size: 1.5rem;
            p {
                margin-bottom: 6px;
            }
        }
    }
`;

export default HeroStyled;
