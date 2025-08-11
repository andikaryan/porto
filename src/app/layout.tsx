import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andika Ryan Nurshodiq - Portfolio",
  description: "Personal portfolio website of Andika Ryan Nurshodiq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Script untuk memaksa tema gelap selalu aktif */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Remove any light theme classes
                  document.documentElement.classList.remove('light');
                  // Force dark theme
                  document.documentElement.classList.add('dark');
                  // Override any system preferences
                  document.documentElement.style.colorScheme = 'dark';
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
