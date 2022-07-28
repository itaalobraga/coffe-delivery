import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: transparent;
  box-sizing: border-box;
  
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.product["yellow-dark"]};
}

html {
  font-size: 81.25%;
  
  @media screen and (min-width: 640px) {
    font-size: 87.5%;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 93.75%;
  }
  
  @media screen and (min-width: 1024px) {
    font-size: 100%;
  }
}

body {
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, li, ol {
  list-style: none;
}

body, input, textarea, button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;

  border: none;
  background-color: transparent;
}

button {
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}

svg {
  font-size: 1.5rem;
}
`;
