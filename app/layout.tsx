
import "./globals.css";
import type { ReactNode } from "react";
import ThemeProvider from "@/providers/ThemeProvider";
import LanguageProvider from "@/providers/LanguageProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LanguageProvider>
          {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
