"use client";
import Fonts from "@/components/Fonts";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContextProvider } from "@/app/Context/store";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Fonts />
    <body>
    <GlobalContextProvider>
      <ToastContainer />
      {children}
    </GlobalContextProvider>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-E6GK0N7RG5" />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-E6GK0N7RG5' , {
            page_path: window.location.pathname,
          });
        `
      }}
    />
    </body>
    </html>
  );
}
