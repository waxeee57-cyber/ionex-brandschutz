"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout-primitives";

export default function ErrorView({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="flex min-h-[50vh] flex-col justify-center space-y-6 py-24">
      <p className="font-mono text-[11px] tracking-[0.2em] text-ember uppercase">
        Fehler
      </p>
      <h1 className="text-3xl font-medium">Die Seite konnte nicht geladen werden.</h1>
      <p className="max-w-md text-muted-foreground">
        Bitte erneut versuchen. Wenn der Fehler bleibt, schreiben Sie an die
        Projektanfrage.
      </p>
      <Button
        type="button"
        className="h-11 min-h-11 w-fit rounded-sm"
        onClick={() => reset()}
      >
        Erneut versuchen
      </Button>
    </Container>
  );
}
