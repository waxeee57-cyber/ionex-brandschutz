"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Kicker } from "@/components/layout-primitives";
import { useLocale } from "@/components/locale-provider";
import type { TeamMember } from "@/lib/types";

export function AboutView({ team }: { team: TeamMember[] }) {
  const { locale, t } = useLocale();

  return (
    <Container className="space-y-16 py-16 lg:py-24">
      <header className="max-w-3xl space-y-4">
        <Kicker>{t.aboutPage.kicker}</Kicker>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          {t.aboutPage.title}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t.aboutPage.lede}
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <h2 className="text-xl font-medium">{t.aboutPage.storyTitle}</h2>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          {t.aboutPage.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">{t.aboutPage.teamTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {team.map((member) => (
            <Card key={member.id} className="rounded-sm ring-border">
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <p className="font-mono text-xs text-steel">
                  {locale === "de" ? member.roleDe : member.roleEn}
                </p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {locale === "de" ? member.focusDe : member.focusEn}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <aside className="border border-ember/40 bg-ember/10 p-6 md:p-8">
        <h2 className="text-lg font-medium">{t.aboutPage.independTitle}</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          {t.aboutPage.independ}
        </p>
      </aside>
    </Container>
  );
}
