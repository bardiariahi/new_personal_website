import "../globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><head><meta httpEquiv="refresh" content="0;url=/en/" /><link rel="canonical" href="https://bardiariahi.ir/en/" /></head><body>{children}</body></html>;
}
