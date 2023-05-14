import "./globals.css";
import { Inter } from "next/font/google";
import "../styles/tiptap-editor.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tiptap-Editor",
  description: "A text editor based on Tiptap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
