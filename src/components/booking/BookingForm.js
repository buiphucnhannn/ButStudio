"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

/**
 * Form đặt lịch (demo, chưa có backend): soạn tin nhắn từ các ô nhập, sao chép vào clipboard
 * rồi mở Messenger / Zalo của Bụt để khách dán & gửi. Khi có backend thay handleSend bằng gọi API.
 */
export default function BookingForm({ booking, collections, site, preset }) {
  const f = booking.fields;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    people: "1",
    collection: preset || "",
    note: "",
  });
  const [copied, setCopied] = useState(false);
  const set = (k) => (e) => setForm((v) => ({ ...v, [k]: e.target.value }));

  const compose = () => {
    const col = collections.find((c) => c.slug === form.collection);
    const lines = [
      booking.message,
      `• ${f.name}: ${form.name}`,
      `• ${f.phone}: ${form.phone}`,
      form.date && `• ${f.date}: ${form.date}`,
      `• ${f.people}: ${form.people}`,
      `• ${f.collection}: ${col ? col.name : f.undecided}`,
      form.note && `• ${f.note.split(" (")[0]}: ${form.note}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleSend = async (channel) => {
    const text = compose();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch {}
    const url = channel === "zalo" ? site.zalo : site.messenger;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSend("messenger");
      }}
      className="space-y-3"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          className="field"
          placeholder={f.name}
          value={form.name}
          onChange={set("name")}
        />
        <input
          required
          className="field"
          type="tel"
          placeholder={f.phone}
          value={form.phone}
          onChange={set("phone")}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="relative block">
          <span className="absolute top-1.5 left-4 text-[11px] tracking-wider text-ink-muted uppercase lg:text-[10px]">
            {f.date}
          </span>
          <input className="field pt-5" type="date" value={form.date} onChange={set("date")} />
        </label>
        <label className="relative block">
          <span className="absolute top-1.5 left-4 text-[11px] tracking-wider text-ink-muted uppercase lg:text-[10px]">
            {f.people}
          </span>
          <select className="field pt-5" value={form.people} onChange={set("people")}>
            {["1", "2", "3-5", "6-10", "10+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="relative block">
        <span className="absolute top-1.5 left-4 text-[11px] tracking-wider text-ink-muted uppercase lg:text-[10px]">
          {f.collection}
        </span>
        <select className="field pt-5" value={form.collection} onChange={set("collection")}>
          <option value="">{f.undecided}</option>
          {collections.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </label>
      <textarea
        className="min-h-[88px] field resize-none"
        placeholder={f.note}
        value={form.note}
        onChange={set("note")}
      />

      <div className="flex flex-col gap-2 pt-1 sm:flex-row">
        <button
          type="submit"
          className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-ink py-1.5 pr-1.5 pl-6 text-sm font-medium text-white transition hover:bg-graphite"
        >
          {f.submit}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
        <button
          type="button"
          onClick={() => handleSend("zalo")}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition hover:border-ink hover:bg-ink hover:text-white"
        >
          {f.submitZalo}
        </button>
      </div>

      <p
        className={cn(
          "flex items-center justify-center gap-2 text-center text-[12px] transition-all duration-300",
          copied ? "text-ink" : "text-ink-muted",
        )}
      >
        {copied && <Check className="h-3.5 w-3.5" />}
        {copied ? f.copied : f.privacy}
      </p>
    </form>
  );
}
