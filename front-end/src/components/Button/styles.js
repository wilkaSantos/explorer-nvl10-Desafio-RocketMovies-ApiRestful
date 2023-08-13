import styled from "styled-components";
import themeStyles from "../../styles/themeStyles";

export const ContainerButton = styled.button`
    height: 48px;
    padding: 32px;

    display: flex;
    align-items: center;
    gap: 8px;

    border: none;
    border-radius: 8px;

    font-size: 18px;
    
    background-color: ${({ theme })=> themeStyles.colors.pink};
    color: ${({ theme })=> themeStyles.colors.background_900};

    &:hover{
        background-color: ${themeStyles.colors.pink_hover};
    }
`;