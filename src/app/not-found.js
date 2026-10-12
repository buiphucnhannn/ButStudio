import { Button, Container } from "@/components/ui";

export const metadata = {
  title: "Không tìm thấy trang",
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-32 text-center">
      <p className="text-gradient text-7xl font-extrabold">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">Không tìm thấy trang</h1>
      <p className="mt-3 text-slate-600">
        Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>
      <Button href="/" className="mt-8">
        Về trang chủ
      </Button>
    </Container>
  );
}
