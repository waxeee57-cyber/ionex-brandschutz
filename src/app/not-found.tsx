import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout-primitives";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center space-y-6 py-24">
      <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
        404
      </p>
      <h1 className="text-4xl font-medium">Seite nicht gefunden.</h1>
      <p className="max-w-md text-muted-foreground">
        Die Adresse existiert nicht. Zurück zur Startseite.
      </p>
      <Button asChild className="h-11 min-h-11 w-fit rounded-sm">
        <Link href="/">Home</Link>
      </Button>
    </Container>
  );
}
