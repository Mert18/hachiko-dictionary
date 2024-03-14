"use client";
import Fonts from "@/components/Fonts";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContextProvider } from "@/app/Context/store";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
      <Fonts />
      <body className="bg-white">
        <GlobalContextProvider>
          <ToastContainer />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
