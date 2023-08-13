import styled from 'styled-components';
import themeStyles from '../../styles/themeStyles';

export const ContainerProfile = styled.div`

    > header{
        width: 100%;
        height: 144px;
        padding: 64px 0 0 144px;

        background: rgba(255, 133, 155, 0.05);

        a{
            display: flex;
            align-items: center;
            gap: 8px;

            color: ${themeStyles.colors.pink};
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    margin: 0 auto;

    > div:nth-child(3) {
        margin-bottom: 8px;
    }

    > button{
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 16px;
    }
`;

export const Avatar = styled.div`
    width: 186px;
    height: 186px;

    margin: -90px auto 64px;
    position: relative;

    img{
        width: 186px;
        height: 186px;

        border-radius: 50%;        
    }

    label{
        width: 48px;
        height: 48px;
        position: absolute;
        top: 125px;
        right: 0;

        border-radius: 50%;

        background: ${themeStyles.colors.pink};

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        svg{
            width: 20px;
            height: 20px;
        }

        input{
            display:none;
        }
    }
`;