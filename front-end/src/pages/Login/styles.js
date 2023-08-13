import styled from "styled-components";
import themeStyles from '../../styles/themeStyles';
import image from '../../assets/login.png';

export const ContainerLogin = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 134px;


    > h1{
        font-size: 48px;
        color: ${themeStyles.colors.pink};
    }

    > p{
        font-size: 14px;
        color: ${themeStyles.colors.background_gray};
    }

    > h2{
        font-size: 24px;
        color: ${themeStyles.colors.white};
        margin: 48px 0 48px 0;
    }

    input:nth-child(1){
        margin-bottom: 8px;
    }

    > button{
        margin-top: 16px;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > a{
        font-size: 16px;
        text-align: center;
        color: ${themeStyles.colors.pink};

        margin-top: 42px;
    }
`; 


export const Image = styled.div`
    flex: 1;

    background: url(${image}) no-repeat center center;
    background-size: cover;
`;