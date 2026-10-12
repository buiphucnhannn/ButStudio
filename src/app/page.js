import {
  CTA,
  FAQ,
  Features,
  Hero,
  LogoCloud,
  Pricing,
  Process,
  Stats,
  Testimonials,
} from "@/components/sections";

// Thứ tự section trên landing page — thêm/bớt/đổi chỗ tại đây.
export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <Process />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
