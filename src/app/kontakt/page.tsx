import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Anfrage für Brandschutz von Batteriespeichern. Standort Essen und München. Antwort in zwei Werktagen.",
};

export default function KontaktPage() {
  return <ContactView />;
}
