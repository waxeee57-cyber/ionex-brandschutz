"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { HeroBess } from "@/components/hero-bess";
import { Container, Kicker, SectionHeader } from "@/components/layout-primitives";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { standards } from "@/lib/site";
import type { Project, Service } from "@/lib/types";

export function HomeView({
  featured,
  services,
}: {
  featured: Project[];
  services: Service[];
}) {
  const { locale, t } = useLocale();

  return (
    <>
      <section className="border-b border-border">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-24">
          <div className="space-y-8">
            <Kicker>{t.heroKicker}</Kicker>
            <h1 className="text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.heroLede}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-11 min-h-11 rounded-sm px-5">
                <Link href="/kontakt">{t.ctaEnquire}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 min-h-11 rounded-sm px-5"
              >
                <Link href="/projekte">{t.ctaProjects}</Link>
              </Button>
            </div>
          </div>
          <HeroBess />
        </Container>
        <div className="border-t border-border">
          <Container className="flex flex-wrap gap-x-8 gap-y-3 py-5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
            {standards.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </Container>
        </div>
      </section>

      <section className="border-b border-border">
        <Container className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {t.stats.map((stat) => (
            <div key={stat.label} className="bg-background px-5 py-8">
              <p className="font-mono text-3xl text-foreground">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-12">
          <Reveal>
            <SectionHeader
              kicker={t.servicesKicker}
              title={t.servicesTitle}
              lede={t.servicesLede}
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const loc = service[locale];
              return (
                <Reveal key={service.id} delayMs={i * 40}>
                  <Card className="h-full rounded-sm ring-border">
                    <CardHeader>
                      <p className="font-mono text-[11px] text-ember">
                        {service.index}
                      </p>
                      <CardTitle className="text-xl">{loc.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {loc.lede}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
          <Button asChild variant="outline" className="h-11 min-h-11 rounded-sm">
            <Link href="/leistungen">
              {t.ctaServices}
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </Container>
      </section>

      <section className="border-y border-border bg-panel py-20">
        <Container className="space-y-12">
          <SectionHeader kicker={t.methodKicker} title={t.methodTitle} />
          <ol className="grid gap-4 md:grid-cols-5">
            {t.method.map((step) => (
              <li
                key={step.n}
                className="border border-border bg-background p-5"
              >
                <p className="font-mono text-xs text-ember">{step.n}</p>
                <p className="mt-3 text-base font-medium">{step.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              kicker={t.projectsKicker}
              title={t.projectsTitle}
              lede={t.projectsLede}
            />
            <Button asChild variant="outline" className="h-11 min-h-11 rounded-sm">
              <Link href="/projekte">{t.projectsAll}</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-panel py-20">
        <Container className="space-y-12">
          <SectionHeader kicker={t.whyKicker} title={t.whyTitle} />
          <div className="grid gap-4 lg:grid-cols-3">
            {t.why.map((item) => (
              <article
                key={item.t}
                className="border border-border bg-background p-6"
              >
                <h3 className="text-lg font-medium">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.d}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20" id="anfrage">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeader
            kicker={t.contactKicker}
            title={t.contactTitle}
            lede={t.contactLede}
          />
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
