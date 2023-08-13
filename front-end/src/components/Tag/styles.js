import styled from "styled-components";
import themeStyles from "../../styles/themeStyles";

export const ContainerTag = styled.span`
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;

    color: ${({theme})=> themeStyles.colors.white};
    background: ${({ theme })=> themeStyles.colors.black};
`;