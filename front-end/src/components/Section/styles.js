import styled from "styled-components";
import themeStyles from "../../styles/themeStyles";

export const ContainerSection = styled.section`

    > h2{
        padding-bottom: 6px;
        
        color: ${({ theme })=> themeStyles.colors.background_gray};
        font-size: 20px;
        font-weight: 400;
    }

    > ul li{
        list-style: none;
    }

    > ul li a{
        cursor: pointer;
        text-decoration: none;
        color: ${({ theme })=> themeStyles.colors.white}
    }

`;