import type { Metadata } from "next";
import { AboutView } from "@/components/about-view";
import teamJson from "@/data/team.json";
import type { TeamMember } from "@/lib/types";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "IONEX Brandschutz GmbH — unabhängige Ingenieure für Brandschutz von Batteriespeichern. Essen und München.",
};

export default function AboutPage() {
  return <AboutView team={teamJson as TeamMember[]} />;
}
