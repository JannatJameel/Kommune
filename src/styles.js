import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.color};
    }
`;

export const HomeWrapper = styled.div`
    h1{
        text-align: center;
    }
    p{
        text-align: center;
        color: ${(props) => props.theme.subColor};
    }
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        padding-top: 30px;
        padding-bottom: 40px;
    }
`; 

export const Row = styled.div`
    align-items : center;
    justify-content : center;
    display: flex;
`;

export const MealsWrapper = styled.div`
    margin: 10px;
    img{
        width: 300px;
        height: 200px;
    }
    h3{
        text-align: center;
    }
    p{
        text-align: center;
    }
`;