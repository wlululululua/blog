import styled from "styled-components";
import { Device } from "../../styles/Theme";

export default styled.nav`
    width: 60%;
    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    @media ${Device.Desktop} {
        ul {
            flex-direction: row;
        }
    }
`;
