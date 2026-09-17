"use client";

import { ContactForm } from "@/components/contact-form";
import { Container, Kicker } from "@/components/layout-primitives";
import { useLocale } from "@/components/locale-provider";
import { site } from "@/lib/site";

export function ContactView() {
  const { locale, t } = useLocale();

  return (
    <Container className="grid gap-14 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-24">
      <div className="space-y-8">
        <Kicker>{t.contactPage.kicker}</Kicker>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          {t.contactPage.title}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t.contactPage.lede}
        </p>
        <dl className="space-y-5 border-t border-border pt-8 text-sm">
          {site.offices.map((office) => (
            <div key={office.id}>
              <dt className="font-medium text-foreground">
                {office.city} · {locale === "de" ? office.labelDe : office.labelEn}
              </dt>
              <dd className="mt-1 text-muted-foreground">
                {office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </dd>
            </div>
          ))}
          <div>
            <dt className="font-medium">{site.email}</dt>
            <dd>
              <a href={site.phoneHref} className="text-muted-foreground hover:text-ember">
                {site.phone}
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </Container>
  );
}
