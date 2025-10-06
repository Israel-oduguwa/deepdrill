// app/layout.tsx
import type { Metadata, Viewport } from "next";
import {  Poppins, Montserrat } from 'next/font/google';
import "./globals.css";


// Configure Poppins for buttons and accents
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deepdrill.com"), // TODO: put the real domain
  applicationName: "Deepdrill Oilfield Services Ltd",
  title: {
    default:
      "Deepdrill Oilfield Services Ltd — Real-Time Oil & Gas Technical Services",
    template: "%s | Deepdrill Oilfield Services Ltd",
  },
  description:
    "Deepdrill provides real-time technical support, project management, and engineering consulting for upstream oil & gas operators in Nigeria and Houston.",
  keywords: [
    "Deepdrill",
    "Oilfield Services",
    "Upstream",
    "Drilling Support",
    "Project Management",
    "Engineering Consulting",
    "Nigeria",
    "Houston",
    "Oil & Gas",
  ],
  authors: [{ name: "Deepdrill Oilfield Services Ltd" }],
  creator: "Deepdrill Oilfield Services Ltd",
  publisher: "Deepdrill Oilfield Services Ltd",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.deepdrill.com",
    title:
      "Deepdrill Oilfield Services Ltd — Real-Time Oil & Gas Technical Services",
    description:
      "Trusted oilfield partner delivering engineering, project management, and drilling support — in real time.",
    siteName: "Deepdrill Oilfield Services Ltd",
    images: [
      {
        url: "/og/deepdrill-og.jpg", // place an actual image in /public/og/
        width: 1200,
        height: 630,
        alt: "Deepdrill Oilfield Services — Offshore platform at dusk",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@deepdrill", // TODO: update/remove if no handle
    creator: "@deepdrill",
    title:
      "Deepdrill Oilfield Services Ltd — Real-Time Oil & Gas Technical Services",
    description:
      "Engineering, drilling support, and project management for upstream operators.",
    images: ["/og/deepdrill-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/fav/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/fav/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/fav/favicon.ico"],
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0A2540",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deepdrill Oilfield Services Ltd",
    url: "https://www.deepdrill.com",
    logo: "https://www.deepdrill.com/fav/apple-touch-icon.png",
    description:
      "Real-time technical support, project management, and engineering services for the upstream oil & gas sector.",
    sameAs: [
      // Add any official profiles:
      // "https://www.linkedin.com/company/deepdrill/",
      // "https://twitter.com/deepdrill"
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "9, Adebayo Ogunrombi Close, Ogudu GRA",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "100 Glenborough Drive, Suite #444",
        addressLocality: "Houston",
        addressRegion: "TX",
        postalCode: "77067",
        addressCountry: "US",
      },
    ],
  };

  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <script
          type="application/ld+json"
          // We stringify here to avoid JSX auto-escaping
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body  className="scroll-smooth">
        {children}
      </body>
    </html>
  );
}
