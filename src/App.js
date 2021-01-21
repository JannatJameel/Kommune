import Home from "./components/Home";
import Kitchens from "./components/Kitchens"
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles";

const theme = {
  mainColor: "black", //general font color
  subColor: "white", //for subtitles
  backgroundColor: "#E74839",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Kitchens />
    </ThemeProvider>
  );
}

export default App;
