"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Kicker } from "@/components/layout-primitives";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import type { Service } from "@/lib/types";

export function ServicesView({ services }: { services: Service[] }) {
  const { locale, t } = useLocale();

  return (
    <Container className="space-y-16 py-16 lg:py-24">
      <header className="max-w-3xl space-y-4">
        <Kicker>{t.servicesPage.kicker}</Kicker>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          {t.servicesPage.title}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t.servicesPage.lede}
        </p>
      </header>

      <div className="space-y-6">
        {services.map((service) => {
          const loc = service[locale];
          return (
            <Reveal key={service.id}>
              <article className="grid gap-8 border border-border bg-card p-6 md:grid-cols-[8rem_minmax(0,1fr)] md:p-10">
                <p className="font-mono text-sm text-ember">{service.index}</p>
                <div className="space-y-5">
                  <h2 className="text-2xl font-medium">{loc.title}</h2>
                  <p className="text-muted-foreground">{loc.lede}</p>
                  <p className="leading-relaxed text-foreground/90">{loc.body}</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {loc.points.map((point) => (
                      <li
                        key={point}
                        className="border-l border-ember/50 pl-3 text-sm text-muted-foreground"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Card className="rounded-sm ring-border">
        <CardHeader>
          <CardTitle>{t.servicesPage.deliverTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 sm:grid-cols-2">
            {t.servicesPage.deliver.map((item) => (
              <li
                key={item}
                className="flex min-h-11 items-center border-b border-border/70 font-mono text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Container>
  );
}
