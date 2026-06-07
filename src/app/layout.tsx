import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const fontHeading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
    title: "Kajjansi Smart Auto Garage | Auto Repair Kampala",
    description:
      "Expert auto repair and smart vehicle maintenance in Kajjansi, Kampala. Engine overhaul, diagnostics, smart T-cut, panel beating, and more. Call +256 701 481 223.",
  keywords: [
    "auto garage Kampala",
    "car repair Kajjansi",
    "vehicle diagnostics Uganda",
    "engine overhaul Kampala",
    "smart T-cut",
    "panel beating",
    "Kajjansi Smart Auto Garage",
    "car service Entebbe Road",
  ],
  openGraph: {
    title: "Kajjansi Smart Auto Garage Ltd | Smart Repairs, Trusted Service",
    description:
      "Advanced auto diagnostics, smart repairs, and professional vehicle maintenance in Kampala.",
    locale: "en_UG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
