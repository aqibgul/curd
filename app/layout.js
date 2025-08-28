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

export const metadata = {
  title: "CRUD App   | Next.js & JSONPlaceholder",

  titleTemplate: "%s | CRUD App",

  description:
    "A simple CRUD application using Next.js and JSONPlaceholder API",
  icons: {
    icon: "/window.svg",
  },

  keywords: [
    "Next.js",
    "CRUD",
    "JSONPlaceholder",
    "React",
    "Axios",
    "JavaScript",
    "Web Development",
    "Frontend",
    "Backend",
    "API",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
