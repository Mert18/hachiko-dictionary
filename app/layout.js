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
      </body>
    </html>
  );
}
