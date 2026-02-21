import type { Metadata } from "next";
import { ThemeRegistry } from "@/components/ThemeRegistry";

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
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
