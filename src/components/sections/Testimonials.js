import Image from "next/image";
import { testimonials } from "@/data/landing";
import { Container, Icon, SectionHeading } from "@/components/ui";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Khách hàng" title="Khách hàng nói gì về chúng tôi" />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex gap-1 text-amber-400" role="img" aria-label="Đánh giá 5 sao">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" className="size-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
