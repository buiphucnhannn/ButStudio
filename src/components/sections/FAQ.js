import { faqs } from "@/data/landing";
import { Container, Icon, SectionHeading } from "@/components/ui";

// Dùng <details>/<summary> gốc của HTML: accordion không cần JavaScript, tốt cho SEO & a11y.
export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp" />

        <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              name="faq"
              className="group px-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-slate-900">
                {faq.question}
                <Icon
                  name="chevronDown"
                  className="size-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
