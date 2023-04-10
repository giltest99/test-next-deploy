import Navigation from "./components/Navigation";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next 13 Js deploy test",
  description: "Site réalisé grâce au framework Next Js 13 et déploiement sur Netlify.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}</body>
    </html>
  );
}
