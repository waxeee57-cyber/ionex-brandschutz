"use client";

import { Container, Kicker } from "@/components/layout-primitives";
import { ProjectExplorer } from "@/components/project-explorer";
import { useLocale } from "@/components/locale-provider";
import type { Project } from "@/lib/types";

export function ProjectsView({ projects }: { projects: Project[] }) {
  const { t } = useLocale();

  return (
    <Container className="space-y-14 py-16 lg:py-24">
      <header className="max-w-3xl space-y-4">
        <Kicker>{t.projectsPage.kicker}</Kicker>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          {t.projectsPage.title}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t.projectsPage.lede}
        </p>
      </header>
      <ProjectExplorer projects={projects} />
    </Container>
  );
}
