// Cache Components yêu cầu giá trị thời gian phải được cache hoặc render lúc request.
// "use cache" => năm được tính một lần khi build/revalidate.
export default async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}
