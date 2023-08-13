import styled from "styled-components";
import themeStyles from '../../styles/themeStyles';

export const ContainerInput = styled.div`
    width: 100%;
    
    > input{
        width: 100%;
        padding: 19px 24px;

        border-radius: 10px;
        border: none;
        font-size: 14px;

        background-color: ${({ theme })=> themeStyles.colors.background_800};
        color: ${({ theme })=> themeStyles.colors.background_gray};

        &::placeholder{
            color: ${({ theme })=> themeStyles.colors.background_gray};
        }
    }
`;