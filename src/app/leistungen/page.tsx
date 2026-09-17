import type { Metadata } from "next";
import { ServicesView } from "@/components/services-view";
import servicesJson from "@/data/services.json";
import type { Service } from "@/lib/types";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Brandschutzkonzept, thermische Ereignisanalyse, Detektion und Löschung, Genehmigungsbegleitung, Due Diligence und Betrieb für Batteriespeicher.",
};

export default function LeistungenPage() {
  return <ServicesView services={servicesJson as Service[]} />;
}
