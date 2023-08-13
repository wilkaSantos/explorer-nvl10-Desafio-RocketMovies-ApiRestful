import { createGlobalStyle } from 'styled-components';
import themeStyles from './themeStyles';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
    }

    body{
        background: ${({ theme })=> themeStyles.colors.background_900};
    }
`;