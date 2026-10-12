/**
 * Ghép className có điều kiện: cn("a", isActive && "b", null) => "a b"
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
