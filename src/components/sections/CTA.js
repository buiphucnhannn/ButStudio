import { cta } from "@/data/landing";
import { Button, Container, Icon } from "@/components/ui";

export default function CTA() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-600/50 to-accent-500/40 blur-3xl"
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">{cta.description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={cta.primary.href} variant="white" size="lg">
              {cta.primary.label}
              <Icon name="arrowRight" className="size-5" />
            </Button>
            <Button
              href={cta.secondary.href}
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              {cta.secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
