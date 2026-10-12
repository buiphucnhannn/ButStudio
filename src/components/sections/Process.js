import { processSteps } from "@/data/landing";
import { Container, SectionHeading } from "@/components/ui";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-16 bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Quy trình"
          title="4 bước từ ý tưởng đến ra mắt"
          description="Quy trình minh bạch, bạn luôn nắm được tiến độ ở từng giai đoạn."
        />

        <ol className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <li key={item.step} className="relative">
              {index < processSteps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute top-6 left-16 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-brand-300 to-transparent lg:block"
                />
              )}
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-lg shadow-brand-600/30">
                {item.step}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
