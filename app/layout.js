import Fonts from "@/components/Fonts";
import "./globals.css";

export const metadata = {
  title: "Hachiko Dictionary",
  description: "Hachiko dictionary introduction page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Fonts />
      <body>{children}</body>
    </html>
  );
}
