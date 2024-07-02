import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import theme from "./components/theme.tsx"; // путь к вашему файлу темы
import Test1 from "./components/Test1.tsx";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Box
          sx={{
            background: "linear-gradient(to right, #BE80E4, #6DFBFF)", // градиент от красного к синему
            minHeight: "100vh",
          }}
        > */}
        <CssBaseline />
        <Header />
        <Main />
        <Test1 />
        {/* </Box> */}
      </ThemeProvider>
    </>
  );
};

export default App;
