"use client";
import Fonts from "@/components/Fonts";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContextProvider } from "@/app/Context/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Fonts />
    <body>
    <GlobalContextProvider>
      <ToastContainer />
      {children}
    </GlobalContextProvider>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-E6GK0N7RG5"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', 'G-E6GK0N7RG5');
    </script>
    </body>
    </html>
  );
}
