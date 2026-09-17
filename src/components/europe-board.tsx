"use client";

import { countryCounts, countryNames } from "@/lib/projects";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

const layout = [
  { code: "DK" },
  { code: "NL" },
  { code: "DE" },
  { code: "PL" },
  { code: "BE" },
  { code: "CZ" },
  { code: "AT" },
];

export function EuropeBoard({
  active,
  onSelect,
}: {
  active: string | null;
  onSelect: (country: string | null) => void;
}) {
  const { locale } = useLocale();
  const counts = countryCounts();
  const byCode = new Map(counts.map((c) => [c.country, c.count]));

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
        {layout.map((cell) => {
          const count = byCode.get(cell.code) ?? 0;
          const selected = active === cell.code;
          const isDe = cell.code === "DE";
          return (
            <button
              key={cell.code}
              type="button"
              onClick={() => onSelect(selected ? null : cell.code)}
              className={cn(
                "flex min-h-11 flex-col items-start justify-between rounded-sm border px-3 py-3 text-left transition-colors",
                isDe ? "col-span-2 min-h-24" : "",
                selected
                  ? "border-ember bg-ember/15"
                  : "border-border bg-raised hover:border-steel/60",
              )}
              style={{ gridColumn: isDe ? "span 2" : undefined }}
              aria-pressed={selected}
            >
              <span className="font-mono text-xs tracking-widest text-steel">
                {cell.code}
              </span>
              <span className="text-sm text-foreground">
                {countryNames[cell.code]?.[locale] ?? cell.code}
              </span>
              <span className="font-mono text-lg text-foreground">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
