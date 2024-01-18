import type { Metadata } from "next";
import "./globals.css";
import localFont from "@next/font/local";
import { cn } from "@/lib/utils";
const hankenGrotesk = localFont({
  src: "../public/assets/fonts/HankenGrotesk-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Results summary component",
  description: "Results summary component challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background flex min-h-[100dvh] min-w-[100dvw] items-center justify-center bg-neutral-pale-blue font-sans antialiased",
          hankenGrotesk.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
