
import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle `
    body{

    }
`;

export const HomeWrapper = styled.div`
    h1{
        text-align: center;
    }
    p{
        text-align: center;
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






const styles = {
    title : {color: "black", textAlign: "center"},
    subtitle : {color: "Red", textAlign: "center"},
    bodyText : {textAlign: "center"},
    image : {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%",
      paddingTop: "30px",
      paddingBottom: "40px",
    },
    menuImages : {
        width: "300px",
        height: "200px",
    },
    menu : {margin : "10px"},
    row : {
        alignItems : "center",
        justifyContent : "center",
        display: "flex",
    }
}
 
export default styles;