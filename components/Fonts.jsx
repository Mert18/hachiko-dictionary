"use client";
import React from "react";

import { Atkinson_Hyperlegible } from "next/font/google";
import { useServerInsertedHTML } from "next/navigation";

const ubuntu = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-ubuntu",
  fallback: ["system-ui", "Helvetica Neue", "Helvetica", "Arial"],
});

function Fonts() {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
           :root {
             --font-ubuntu: '-apple-system', 'BlinkMacSystemFont',
               ${ubuntu.style.fontFamily}, 'system-ui', 'Segoe UI', 'Roboto',
               'Ubuntu';
           }
         `,
        }}
      />
    );
  });

  return null;
}

export default Fonts;
