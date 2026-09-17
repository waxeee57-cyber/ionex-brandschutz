import type { Metadata } from "next";
import { ProjectsView } from "@/components/projects-view";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "52 Referenzprojekte für Brandschutz von Batteriespeichern in Deutschland und der EU. Freifläche, Hybrid, Netzbooster, Industrie.",
};

export default function ProjektePage() {
  return <ProjectsView projects={projects} />;
}
