import { stats } from "@/data/landing";
import { Container } from "@/components/ui";

export default function Stats() {
  return (
    <section aria-label="Số liệu" className="py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-br from-brand-600 to-accent-600 p-8 text-center text-white sm:p-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-brand-100">{stat.label}</dt>
              <dd className="text-3xl font-extrabold tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
