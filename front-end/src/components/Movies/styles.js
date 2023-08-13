import styled from "styled-components";
import themeStyles from '../../styles/themeStyles';

export const ContainerMovies = styled.button`

    width: 100%;
    padding: 22px;
    margin-bottom: 15px;

    border: none;
    border-radius: 10px;
    background: ${({ theme })=> themeStyles.colors.wine};

    > h1 {
        flex: 1;
        text-align: left;
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme })=> themeStyles.colors.white};
    }

    > div{
        text-align: left;
        font-size: 16px;
        color: ${({theme})=> themeStyles.colors.pink};

        span{ margin-right: 5px; }
    }

    > p{
        margin-top: 15px;
        color: ${({theme})=> themeStyles.colors.background_700};
        font-size: 16px;
        text-align: justify;
    }

    > footer{
        width: 100%;
        display: flex;
        margin-top: 24px;
    }

`;