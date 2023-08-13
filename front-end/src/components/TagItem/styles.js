import styled from "styled-components";
import themeStyles from "../../styles/themeStyles";

export const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    padding-right: 16px;
    border-radius: 10px;

    background-color: ${({theme, isNew})=> isNew ? "transparent" : themeStyles.colors.background_900};
    color: ${({ theme })=> themeStyles.colors.background_gray_300};

    border: ${({ theme, isNew })=> isNew ? `1px dashed ${themeStyles.colors.background_gray_300}` : 'none'};

    > button {
        border: none;
        background: none;
    }

    .button-add{
        color: ${({ theme })=> themeStyles.colors.pink};
    }

    .button-remove{
        color: ${({ theme })=> themeStyles.colors.pink};
    }

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        border: none;

        color: ${({ theme })=> themeStyles.colors.background_gray};
        background: transparent;

        &::placeholder{
            color: ${({ theme })=> themeStyles.colors.background_gray_300};
        }
    }
`;