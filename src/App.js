import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header  from "./components/Header";
import Card  from "./components/Card";
import GlobalStyles from "./components/styles/GlobalStyles";

const theme = {
  colors:{
    header: '#317873',
    body: '#d9d1b9',
    primaryColor: '#203d3f',
    heading: '#FFF'
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme = { theme }>
      <>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello World </h1>
        <Card />
      </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
