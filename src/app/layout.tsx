import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "IONEX Brandschutz — Brandschutz für Batteriespeicher",
    template: "%s — IONEX Brandschutz",
  },
  description:
    "Unabhängige Brandschutzplanung für BESS: Brandschutzkonzept, thermische Ereignisanalyse, Löschung, Genehmigungsbegleitung. Für Projektentwickler und Betreiber.",
  keywords: [
    "BESS Brandschutz",
    "Batteriespeicher Brandschutzkonzept",
    "NFPA 855",
    "VdS 3103",
    "Thermal Runaway",
    "Genehmigung Batteriespeicher",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_GB",
    siteName: site.name,
    title: "IONEX Brandschutz — Brandschutz für Batteriespeicher",
    description:
      "Prüfbare Nachweise für Batteriespeicher. Von der thermischen Ereignisanalyse bis zur Behördengenehmigung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IONEX Brandschutz",
    description: "Brandschutzingenieurwesen für Batteriespeicher.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`dark h-full ${plexSans.variable} ${plexMono.variable} font-sans`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <LocaleProvider>
          <SiteHeader />
          <main id="content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
