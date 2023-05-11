"use client";
import Fonts from "@/components/Fonts";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContextProvider, UserProvider } from "@/app/Context/store";

export const metadata = {
  title: "Hachiko Dictionary",
  description: "Hachiko dictionary introduction page",
};

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
