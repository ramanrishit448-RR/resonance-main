import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/client";
import { shadcn } from "@clerk/ui/themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Resonance",
    template: "%s | Resonance"
  },
  description: "AI-powered text-to-speech and voice cloning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider appearance={{ theme: shadcn }}>
          <TRPCReactProvider>
            <NuqsAdapter>
              {children}
            </NuqsAdapter>
            <Toaster />
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
