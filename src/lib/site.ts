export const site = {
  name: "IONEX Brandschutz",
  legalName: "IONEX Brandschutz GmbH",
  taglineDe: "Brandschutz für Batteriespeicher.",
  taglineEn: "Fire safety for battery storage.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ionex-brandschutz.de",
  email: "anfrage@ionex-brandschutz.de",
  phone: "+49 201 437 920",
  phoneHref: "tel:+49201437920",
  demo: true,
  offices: [
    {
      id: "essen",
      city: "Essen",
      labelDe: "Hauptsitz",
      labelEn: "Headquarters",
      lines: ["Kennedyplatz 12", "45127 Essen", "Deutschland"],
    },
    {
      id: "muenchen",
      city: "München",
      labelDe: "Büro Süd",
      labelEn: "Southern office",
      lines: ["Lindwurmstraße 88", "80337 München", "Deutschland"],
    },
  ],
} as const;

export const nav = [
  { href: "/", de: "Home", en: "Home" },
  { href: "/leistungen", de: "Leistungen", en: "Services" },
  { href: "/projekte", de: "Projekte", en: "Projects" },
  { href: "/ueber-uns", de: "Über uns", en: "About" },
  { href: "/kontakt", de: "Kontakt", en: "Contact" },
] as const;

export const standards = [
  "NFPA 855",
  "VdS 3103",
  "IEC 62933-5-2",
  "MIndBauRL",
  "FM DS 5-48",
  "BImSchG",
] as const;
