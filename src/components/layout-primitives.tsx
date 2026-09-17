import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.22em] text-steel uppercase">
      {children}
    </p>
  );
}

export function SectionHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <Kicker>{kicker}</Kicker>
      <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
