import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif,Slack-Lato,appleLogo;
        width: 100%;
        background-color: #fff;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
        border: none;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
`;

export default GlobalStyles;
