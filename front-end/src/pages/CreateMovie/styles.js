import styled from "styled-components";
import themeStyles from '../../styles/themeStyles';

export const ContainerCreate = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "header"
    "link"
    "content";

    > main{
        grid-area: content;
        overflow-y: scroll;
    }

    a{
        grid-area: link;
        padding: 40px 130px 0;
        color: ${themeStyles.colors.pink};

        display: flex;
        align-items: center;
        gap: 8px;

        font-size: 16px;

        svg{
            width: 16px;
            height: 16px;
        }
    }
`;

export const Form = styled.form`
    padding: 0 130px;

    > h1{
        color: ${themeStyles.colors.white};
        font-size: 36px;
    }

    .wrappedInputs{
        display: flex;
        gap: 40px;

        margin: 40px 0;
    }

    > textarea{
        width: 100%;
        height: 274px;
        padding: 19px 16px;

        border: none;
        border-radius: 10px;
        
        background-color: ${({ theme })=> themeStyles.colors.background_800};
        color: ${({ theme })=> themeStyles.colors.background_gray};

        &::placeholder{
            color: ${({ theme })=> themeStyles.colors.background_gray};
        }

    }

    > h2{
        font-size: 20px;
        color: ${themeStyles.colors.background_700};

        margin-top: 40px;
    }

    .wrappedItems{
        width: 100%;
        padding: 8px;
        margin-top: 24px;

        border-radius: 8px;
        background-color: #0D0C0F;

        display: flex;
        justify-content:baseline;
        gap: 8px;
    }
     
    .wrappedButton {
        width: 100%;
        margin-top: 40px;

        display: flex;
        justify-content: space-between;
        gap: 8px;

        > button{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }


`;
/*
export const ButtonRemove = styled.button`
    height: 48px;
    padding: 32px;

    display: flex;
    align-items: center;
    gap: 8px;

    border: none;
    border-radius: 8px;

    font-size: 18px;

    background-color: #0D0C0F;
    color: ${themeStyles.colors.pink};
`;
*/