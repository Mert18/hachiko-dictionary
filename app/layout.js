"use client";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Hahmlet } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContextProvider } from "@/app/Context/store";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const hahmlet = Hahmlet({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
      <body className={hahmlet.className}>
        <GlobalContextProvider>
          <ToastContainer />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
