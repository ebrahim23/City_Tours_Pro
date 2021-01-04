import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import TourList from "./components/tourList/TourList";
import Footer from "./components/footer/Footer";
import Toggle from "./components/toggleThemes/Toggle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./Themes";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? saveMode("dark") : saveMode("light");
  };

  const saveMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : saveMode("dark");
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <TourList />
        <Footer />
        <Toggle toggle={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
