import { features } from "@/data/landing";
import { Container, Icon, SectionHeading } from "@/components/ui";

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Tính năng"
          title="Mọi thứ bạn cần để phát triển online"
          description="Từ thiết kế đến vận hành, chúng tôi lo trọn gói để bạn tập trung vào kinh doanh."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/5"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={feature.icon} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
