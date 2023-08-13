import styled from 'styled-components';
import themeStyles from '../../styles/themeStyles';

export const ContainerHeader = styled.div`
    width: 100%;
    padding: 24px 123px;

    display: flex;
    align-items: center;
    gap: 64px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme })=> themeStyles.colors.background_gray_300};

`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme })=> themeStyles.colors.pink};

    cursor: pointer;
`;

export const Profile = styled.div`
    width: 208px;
    height: 68px;

    display: flex;
    align-items: center;
    gap: 7px;

    cursor: pointer;
    

    img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    div{
        width: 135px;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        h2{
            font-size: 14px;
            color: ${({ theme })=> themeStyles.colors.white}
        }

    }
`;

export const Logout = styled.label`
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme })=> themeStyles.colors.background_gray};
`;