import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyled from "./styled/Globalstyled";
// import { Provider } from "react-redux";
// import store from "./store";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyled />
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
