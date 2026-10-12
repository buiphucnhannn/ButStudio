import { pricingPlans } from "@/data/landing";
import { Container, SectionHeading } from "@/components/ui";
import PricingPlans from "./PricingPlans";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Bảng giá"
          title="Chọn gói phù hợp với bạn"
          description="Minh bạch, không phí ẩn. Tiết kiệm đến 25% khi thanh toán theo năm."
        />
        <PricingPlans plans={pricingPlans} />
      </Container>
    </section>
  );
}
