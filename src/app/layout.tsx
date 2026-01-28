import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as standard sans
import "./globals.css";
import { MobileContainer } from "@/components/layout/MobileContainer";
import { MomentumProvider } from "@/context/MomentumContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Momentum Track Prototype",
  description: "IELTS Prep Momentum Track",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased text-slate-900 bg-gray-100`} suppressHydrationWarning>
        <MomentumProvider>
          <MobileContainer>
            {children}
          </MobileContainer>
        </MomentumProvider>
      </body>
    </html>
  );
}
