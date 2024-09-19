import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  weight: ['400', '700'],
  subsets: ["latin"],
   });

export const metadata: Metadata = {
  title: "Jed Wiebe",
  description: "Site for Jed Wiebe, BC Green Contestant for the Salmon Arm-Shuswap riding",
  openGraph: {
    title: "Jed Wiebe for BC Greens | Salmon Arm - Shuswap",
    description: "Join Jed Wiebe's campaign for a sustainable future in Salmon Arm - Shuswap.",
    images: [{
      url: 'https://www.jedwiebe4mla.ca/jed-og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Jed Wiebe - BC Greens Candidate for Salmon Arm - Shuswap',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jed Wiebe for BC Greens | Salmon Arm - Shuswap",
    description: "Join Jed Wiebe's campaign for a sustainable future in Salmon Arm - Shuswap.",
    images: ['https://www.jedwiebe4mla.ca/jed-og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
