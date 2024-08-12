import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        // Define options here
        success: {
          duration: "500",
          style: {
            background: "#fff",
            color: "#000",
            border: "1px solid #F83539",
            borderRadius: "15px",
          },
        },
        error: {
          style: {
            background: "red",
            color: "white",
          },
        },
      }}
    />
  </Provider>
);
