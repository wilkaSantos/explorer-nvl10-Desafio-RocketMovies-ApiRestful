import styled from 'styled-components';
import themeStyles from '../../styles/themeStyles';
import image from '../../assets/login.png';

export const ContainerRegister = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 134px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1{
        font-size: 48px;
        color: ${themeStyles.colors.pink};
    }

    > p{
        font-size: 14px;
        color: ${themeStyles.colors.background_gray};
        margin-bottom: 48px;
    }

    > h2{
        margin-bottom: 48px;
        font-size: 24px;
        color: ${themeStyles.colors.white};
    }

    input{
        margin-bottom: 8px;
    }

    button{
        margin-top: 16px;
        font-size: 16px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    > a{
        margin-top: 42px;
        font-size: 16px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        color: ${themeStyles.colors.pink};
    }
`;

export const Image = styled.div`
    flex: 1;

    background: url(${image}) no-repeat center center;
    background-size: cover;
`;