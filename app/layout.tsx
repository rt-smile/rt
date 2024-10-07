// File: layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import './style/markdown.css'
import './style/prose.css'
import ClientLayout from "./components/ClientLayout/ClientLayout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return <ClientLayout>{children}</ClientLayout>
  
}
