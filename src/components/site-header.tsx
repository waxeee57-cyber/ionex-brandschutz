"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLocale } from "@/components/locale-provider";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        {t.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-8 items-center justify-center border border-ember/70 bg-ember/15 font-mono text-[11px] font-semibold tracking-widest text-ember">
            IX
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-medium tracking-wide">
              {site.name}
            </span>
            <span className="hidden font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase sm:block">
              BESS · Brandschutz
            </span>
          </span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-11 items-center px-3 text-sm tracking-wide transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item[locale]}
                {active ? (
                  <span className="sr-only"> (aktuell)</span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="hidden items-center border border-border font-mono text-[11px] sm:flex"
            role="group"
            aria-label="Sprache"
          >
            <button
              type="button"
              className={cn(
                "flex min-h-11 min-w-11 items-center justify-center px-2.5 transition-colors",
                locale === "de"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setLocale("de")}
              aria-pressed={locale === "de"}
            >
              DE
            </button>
            <button
              type="button"
              className={cn(
                "flex min-h-11 min-w-11 items-center justify-center px-2.5 transition-colors",
                locale === "en"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>

          <Button
            asChild
            className="hidden h-11 min-h-11 rounded-sm px-4 text-sm sm:inline-flex"
          >
            <Link href="/kontakt">{t.ctaEnquire}</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-sm lg:hidden"
                aria-label="Menü"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] border-border bg-background"
            >
              <SheetHeader>
                <SheetTitle className="font-mono text-xs tracking-[0.2em] uppercase">
                  {site.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 px-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex min-h-11 items-center px-3 text-base text-foreground"
                  >
                    {item[locale]}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 flex gap-2 px-5">
                <button
                  type="button"
                  className={cn(
                    "flex min-h-11 flex-1 items-center justify-center border font-mono text-xs",
                    locale === "de"
                      ? "border-foreground bg-foreground text-background"
                      : "border-border",
                  )}
                  onClick={() => setLocale("de")}
                >
                  DE
                </button>
                <button
                  type="button"
                  className={cn(
                    "flex min-h-11 flex-1 items-center justify-center border font-mono text-xs",
                    locale === "en"
                      ? "border-foreground bg-foreground text-background"
                      : "border-border",
                  )}
                  onClick={() => setLocale("en")}
                >
                  EN
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
