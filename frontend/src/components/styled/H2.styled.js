import styled from "styled-components";
import { Device } from "../../styles/Theme";

export default styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;

    @media ${Device.Desktop} {
        font-size: 1.25rem;
    }
`;
