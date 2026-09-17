import { Container } from "@/components/layout-primitives";

export default function Loading() {
  return (
    <Container className="space-y-6 py-20" aria-busy="true" aria-live="polite">
      <div className="h-3 w-40 bg-raised" />
      <div className="h-12 w-2/3 max-w-xl bg-raised" />
      <div className="h-24 w-full max-w-2xl bg-panel" />
      <span className="sr-only">Laden …</span>
    </Container>
  );
}
