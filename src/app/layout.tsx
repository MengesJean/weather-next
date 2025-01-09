import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather App Next",
  description: "Find the weather of your city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
