import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  color: "#fff",
  backgroundColor: "#2980b9",
};

export const darkTheme = {
  body: "#34495e",
  color: "#fff",
  backgroundColor: "#2c3e50",
};

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${(props) => props.theme.body}
  }
  footer {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
  }
  .navbar {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
  }
  .tour {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
  }
`;
