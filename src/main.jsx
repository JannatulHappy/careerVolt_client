import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "react-step-progress-bar/styles.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import {
 
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Create a client
const queryClient = new QueryClient();
// Define your website name
const websiteName = "Career Volt"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Helmet>
            {`${websiteName}`}
            {/* <link rel="shortcut icon" href="./assets/logo_icon.png" /> */}
          </Helmet>

          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
