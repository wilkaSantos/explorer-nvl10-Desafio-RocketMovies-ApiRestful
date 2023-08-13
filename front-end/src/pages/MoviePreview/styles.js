import styled from "styled-components";
import themeStyles from '../../styles/themeStyles';

export const ContainerPreview = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "header"
    "link"
    "content";

    > a{
        grid-area: link;
        margin-top: 40px;
        padding: 0 123px;

        display: flex;
        align-items: center;
        gap: 8px;

        color: ${themeStyles.colors.pink};
    }

`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 123px;
    overflow-y: scroll;

    > section{
        display: flex;
        align-items: baseline;
        gap: 9px;

        h1{
            color: ${themeStyles.colors.white};
            font-size: 36px;
        }

        svg{
            color: ${themeStyles.colors.pink};
            width: 20px;
            height: 20px;
        }
    }

    .wrappedUserData{
        display: flex;
        align-items: center;
        gap: 8px;

        margin: 24px 0 40px;
        color: ${themeStyles.colors.white};
        
        img{
            width: 20px;
            height: 20px;

            border: 1px solid ${themeStyles.colors.background_gray_300};
            border-radius: 50%;
        }

        svg{
            color: ${themeStyles.colors.pink}
        }
    }

    .wrappedTags{
        display: flex;
        gap: 8px;
        margin-bottom: 48px;

        > div{
            background-color: ${themeStyles.colors.coffe};
        }
    }

    > p{
            font-size: 14px;
            text-align: justify;
            color: ${themeStyles.colors.white};
        }
`;