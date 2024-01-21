import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Providers } from "./_components/Providers";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Type Type",
  description: "Practice your typings skills in this cozzy typer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          onest.className,
          "flex min-h-screen flex-col items-center py-24 px-5 sm:px-14"
        )}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
