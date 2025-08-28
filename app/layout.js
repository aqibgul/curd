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
  title: {
    default: "My CRUD App | Next.js & JSONPlaceholder",
    template: "%s | My CRUD App",
  },

  description:
    "A simple CRUD application using Next.js and JSONPlaceholder API",
  icons: {
    icon: "/window.svg",
  },
  openGraph: {
    title: "My CRUD App | Next.js & JSONPlaceholder",
    description:
      "A simple CRUD application using Next.js and JSONPlaceholder API",
    url: "https://my-crud-app.vercel.app/",
    siteName: "My CRUD App",
    images: [
      {
        url: "https://my-crud-app.vercel.app/og-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
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
        <div>{children}</div>
      </body>
    </html>
  );
}
