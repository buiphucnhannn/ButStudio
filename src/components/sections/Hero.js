import Image from "next/image";
import { hero } from "@/data/landing";
import { Badge, Button, Container, Icon } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-20 sm:pt-24 lg:pb-28">
      {/* Lưới + glow nền */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid" />
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-[480px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400/30 via-accent-400/20 to-brand-300/30 blur-3xl"
      />

      <Container className="text-center">
        <Badge className="animate-fade-up">
          <Icon name="sparkles" className="size-3.5" />
          {hero.badge}
        </Badge>

        <h1 className="mx-auto mt-6 max-w-4xl animate-fade-up text-4xl font-extrabold tracking-tight text-balance text-slate-900 [animation-delay:100ms] sm:text-5xl lg:text-6xl">
          {hero.title} <span className="text-gradient">{hero.highlight}</span> {hero.titleSuffix}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-pretty text-slate-600 [animation-delay:200ms]">
          {hero.description}
        </p>

        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:300ms] sm:flex-row">
          <Button href={hero.primaryCta.href} size="lg">
            {hero.primaryCta.label}
            <Icon name="arrowRight" className="size-5" />
          </Button>
          <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl animate-fade-up [animation-delay:400ms]">
          <div className="rounded-3xl bg-slate-900/5 p-2 ring-1 ring-slate-900/10 lg:p-3">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              preload
              className="w-full rounded-2xl shadow-2xl shadow-brand-900/20"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
