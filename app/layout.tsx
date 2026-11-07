import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "General Acceptance",
  description: "Creating something worth staring at.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 40'><rect width='66' height='40' fill='%230c0c0c'/><g fill='%23ffffff'><rect x='0' y='32' width='26' height='8'/><rect x='14' y='21' width='26' height='8'/><rect x='28' y='10' width='26' height='8'/><rect x='40' y='0' width='26' height='8'/></g></svg>",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#0c0c0c]`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0c0c] text-white">
        {children}
      </body>
    </html>
  );
}