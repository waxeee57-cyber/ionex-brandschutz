import type { Project } from "@/lib/types";
import projectsJson from "@/data/projects.json";

export const projects = projectsJson as Project[];

export function featuredProjects(n = 6): Project[] {
  return [...projects]
    .sort((a, b) => b.capacityMwh - a.capacityMwh)
    .slice(0, n);
}

export function totalCapacityGwh(): string {
  const mwh = projects.reduce((sum, p) => sum + p.capacityMwh, 0);
  return (mwh / 1000).toLocaleString("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

export function countryCounts(): { country: string; count: number }[] {
  const map = new Map<string, number>();
  for (const p of projects) {
    map.set(p.country, (map.get(p.country) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count);
}

export const countryNames: Record<string, { de: string; en: string }> = {
  DE: { de: "Deutschland", en: "Germany" },
  NL: { de: "Niederlande", en: "Netherlands" },
  BE: { de: "Belgien", en: "Belgium" },
  AT: { de: "Österreich", en: "Austria" },
  PL: { de: "Polen", en: "Poland" },
  CZ: { de: "Tschechien", en: "Czechia" },
  DK: { de: "Dänemark", en: "Denmark" },
};

export const projectTypes = [
  "standalone",
  "pv-hybrid",
  "wind-hybrid",
  "industrie",
  "netzbooster",
  "hinterzaehler",
] as const;
