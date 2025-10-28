import { BrowserRouter } from "react-router-dom";
import "./css/App.css";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components:{
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          //   borderColor: '#1976d2',
          // },
          // '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          //   borderColor: '#1976d2',
          // },
        },
      },
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer 
        theme="dark"/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;