import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Already Calm | Return to the Field",
  description:
    "A premium cosmic-spiritual landing page for the Already Calm 10-minute reset.",
  openGraph: {
    title: "Already Calm | Return to the Field",
    description:
      "One 10-minute video returns you to your natural cosmic calm.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Already Calm | Return to the Field",
    description:
      "One 10-minute video returns you to your natural cosmic calm.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
