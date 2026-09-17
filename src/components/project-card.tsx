"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocale } from "@/components/locale-provider";
import type { Project } from "@/lib/types";
import { countryNames } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const country = countryNames[project.country]?.[locale] ?? project.country;

  return (
    <Card className="rounded-sm bg-card ring-border">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground">
          <span>{project.id}</span>
          <span>{project.year}</span>
        </div>
        <CardTitle className="text-lg">{project.name}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {project.city} · {project.region} · {country}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="rounded-sm border-border font-normal"
          >
            {t.types[project.type]}
          </Badge>
          <Badge
            variant="secondary"
            className="rounded-sm font-normal text-steel"
          >
            {t.status[project.status]}
          </Badge>
        </div>
        <dl className="grid grid-cols-2 gap-3 font-mono text-xs">
          <div>
            <dt className="text-muted-foreground">{t.projectsPage.power}</dt>
            <dd className="text-foreground">
              {project.powerMw.toLocaleString(locale === "de" ? "de-DE" : "en-GB")} MW
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{t.projectsPage.capacity}</dt>
            <dd className="text-foreground">
              {project.capacityMwh.toLocaleString(
                locale === "de" ? "de-DE" : "en-GB",
              )}{" "}
              MWh
            </dd>
          </div>
        </dl>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-mono text-[10px] tracking-widest text-steel uppercase">
            {t.projectsPage.scope}
          </span>
          <br />
          {project.scope}
        </p>
        <p className="font-mono text-[11px] text-muted-foreground">
          {project.standards.join(" · ")}
        </p>
      </CardContent>
    </Card>
  );
}
