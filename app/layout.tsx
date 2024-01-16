import type { Metadata } from "next";
import "./globals.css";
import localFont from "@next/font/local";
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
        className={`${hankenGrotesk.className} min-h-[100dvh] min-w-[100dvw] bg-neutral-pale-blue`}
      >
        {children}
      </body>
    </html>
  );
}
