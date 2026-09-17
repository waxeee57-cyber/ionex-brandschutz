import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    description:
      "Unabhängige Brandschutzplanung für Batteriespeicher (BESS): Konzepte, thermische Ereignisanalyse, Genehmigungsbegleitung.",
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: ["DE", "EU"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kennedyplatz 12",
      postalCode: "45127",
      addressLocality: "Essen",
      addressCountry: "DE",
    },
    knowsAbout: [
      "Battery Energy Storage Systems",
      "Brandschutzkonzept",
      "NFPA 855",
      "VdS 3103",
      "Thermal runaway",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
