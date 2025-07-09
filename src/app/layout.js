import './global.css';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Manor Podcast",
  description: "The Manor Oxford United Podcast",
  keywords: [
    "The Manor Podcast",
    "Oxford United",
    "Podcast",
    "Oxford United Podcast",
    "OUFC",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="The Manor Podcast, Oxford United, Podcast, Oxford United Podcast, OUFC" />
        <link rel="icon" href="/images/oufc-fav.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
