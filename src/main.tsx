import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={750}/>
      <App />
    </Provider>
  </StrictMode>,
);
