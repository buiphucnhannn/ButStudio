import Image from "next/image";
import { partnerLogos } from "@/data/landing";
import { Container } from "@/components/ui";

export default function LogoCloud() {
  return (
    <section aria-label="Đối tác" className="border-y border-slate-100 bg-white py-12">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500">
          Được tin dùng bởi các doanh nghiệp hàng đầu
        </p>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {partnerLogos.map((logo) => (
            <li key={logo.name} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={40}
                className="h-8 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
