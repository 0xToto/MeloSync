import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./services/UserContext";
import { MusicProvider } from "./services/MusicContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <MusicProvider>
          <App />
        </MusicProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
