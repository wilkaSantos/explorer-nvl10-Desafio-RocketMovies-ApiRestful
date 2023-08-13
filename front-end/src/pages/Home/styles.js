import styled from "styled-components";
import themeStyles from '../../styles/themeStyles';

export const ContainerHome = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "header"
    "section"
    "content";
    

    > section{
        grid-area: section;
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 50px 123px 0;

        h1{
            font-size: 32px;
            color: ${({ theme })=> themeStyles.colors.white };
        }

    }
`;

export const Content = styled.div`
    grid-area: content;
    padding: 40px 123px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    overflow-y: scroll;

`;