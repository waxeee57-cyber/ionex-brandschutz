import { HomeView } from "@/components/home-view";
import { featuredProjects } from "@/lib/projects";
import servicesJson from "@/data/services.json";
import type { Service } from "@/lib/types";

export default function HomePage() {
  return (
    <HomeView
      featured={featuredProjects(6)}
      services={servicesJson as Service[]}
    />
  );
}
