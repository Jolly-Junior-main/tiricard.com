import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiricard — Beautiful Digital Invitations & Event Management",
  description: "Create beautiful digital invitations for weddings, birthdays, engagements and events. Invite guests, collect RSVPs, manage attendance and simplify event check-in with Tiricard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased selection:bg-brand-gold/20 selection:text-brand-charcoal`}>
        {children}
      </body>
    </html>
  );
}
