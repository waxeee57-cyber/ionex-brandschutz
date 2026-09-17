"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { EuropeBoard } from "@/components/europe-board";
import { ProjectCard } from "@/components/project-card";
import { useLocale } from "@/components/locale-provider";
import { SectionHeader } from "@/components/layout-primitives";
import { countryNames, projectTypes } from "@/lib/projects";
import type { Project, ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const { locale, t } = useLocale();
  const [country, setCountry] = useState<string | null>(null);
  const [type, setType] = useState<ProjectType | "all">("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (country && p.country !== country) return false;
      if (type !== "all" && p.type !== type) return false;
      return true;
    });
  }, [projects, country, type]);

  const countries = useMemo(() => {
    return [...new Set(projects.map((p) => p.country))];
  }, [projects]);

  return (
    <div className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-4">
          <SectionHeader
            kicker="EU+"
            title={t.projectsPage.mapTitle}
            lede={t.projectsPage.mapLede}
          />
          <EuropeBoard active={country} onSelect={setCountry} />
        </div>
        <div className="space-y-4">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            {t.projectsPage.kicker}
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={type === "all"} onClick={() => setType("all")}>
              {t.projectsPage.all}
            </FilterChip>
            {projectTypes.map((value) => (
              <FilterChip
                key={value}
                active={type === value}
                onClick={() => setType(value)}
              >
                {t.types[value]}
              </FilterChip>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {countries.map((code) => (
              <FilterChip
                key={code}
                active={country === code}
                onClick={() => setCountry(country === code ? null : code)}
              >
                {countryNames[code]?.[locale] ?? code}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="border border-dashed border-border px-6 py-16 text-center">
          <p className="text-muted-foreground">{t.projectsPage.empty}</p>
          <Button
            variant="outline"
            className="mt-5 h-11 min-h-11 rounded-sm"
            onClick={() => {
              setCountry(null);
              setType("all");
            }}
          >
            {t.projectsPage.reset}
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex min-h-11 items-center rounded-sm border px-3 text-sm transition-colors",
        active
          ? "border-ember bg-ember/15 text-foreground"
          : "border-border text-muted-foreground hover:text-foreground",
      )}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
