"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { Container } from "@/components/layout-primitives";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  const { locale, t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-panel">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="font-mono text-[11px] tracking-[0.2em] text-ember uppercase">
            {site.legalName}
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {locale === "de" ? site.taglineDe : site.taglineEn}
          </p>
          <p className="font-mono text-xs text-muted-foreground">{t.demo}</p>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            {t.footerNav}
          </p>
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-foreground/90 hover:text-ember"
                >
                  {item[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            {t.footerOffices}
          </p>
          <ul className="space-y-5 text-sm text-muted-foreground">
            {site.offices.map((office) => (
              <li key={office.id}>
                <p className="text-foreground">
                  {office.city} ·{" "}
                  {locale === "de" ? office.labelDe : office.labelEn}
                </p>
                {office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            {t.footerLegal}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="block min-h-11 py-2 text-foreground hover:text-ember"
          >
            {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="block min-h-11 py-2 text-foreground hover:text-ember"
          >
            {site.phone}
          </a>
          <p className="pt-4 text-xs leading-relaxed text-muted-foreground">
            {t.footerNote}
          </p>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 font-mono text-[11px] text-muted-foreground sm:flex-row sm:justify-between">
          <span>
            © {year} {site.legalName}
          </span>
          <span>Essen · München · EU+</span>
        </Container>
      </div>
    </footer>
  );
}
