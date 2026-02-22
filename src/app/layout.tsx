import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { RouteListener } from "@/components/RouteListener";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grind - Workout Tracker",
  description: "A workout tracker for Grind Style Calisthenics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <RouteListener />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
