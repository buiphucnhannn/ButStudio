"use client";

import { useState } from "react";
import { Button, Icon } from "@/components/ui";
import { cn } from "@/lib/cn";

const formatVND = (value) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);

const billingOptions = [
  { id: "monthly", label: "Theo tháng" },
  { id: "yearly", label: "Theo năm" },
];

export default function PricingPlans({ plans }) {
  const [billing, setBilling] = useState("monthly");

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div
          role="radiogroup"
          aria-label="Chu kỳ thanh toán"
          className="inline-flex rounded-full bg-white p-1 ring-1 ring-slate-200"
        >
          {billingOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={billing === option.id}
              onClick={() => setBilling(option.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                billing === option.id
                  ? "bg-brand-600 text-white shadow"
                  : "text-slate-600 hover:text-slate-900",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-3xl p-8",
              plan.featured
                ? "bg-slate-900 text-white shadow-2xl ring-2 shadow-brand-900/30 ring-brand-500 lg:-mt-4 lg:pb-12"
                : "bg-white text-slate-900 ring-1 ring-slate-200",
            )}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-3 py-1 text-xs font-semibold text-white">
                Phổ biến nhất
              </span>
            )}

            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className={cn("mt-2 text-sm", plan.featured ? "text-slate-300" : "text-slate-600")}>
              {plan.description}
            </p>

            <p className="mt-6 flex items-baseline gap-1">
              {plan.price ? (
                <>
                  <span className="text-3xl font-extrabold tracking-tight">
                    {formatVND(plan.price[billing])}
                  </span>
                  <span
                    className={cn("text-sm", plan.featured ? "text-slate-400" : "text-slate-500")}
                  >
                    /tháng
                  </span>
                </>
              ) : (
                <span className="text-3xl font-extrabold tracking-tight">Liên hệ</span>
              )}
            </p>

            <ul className="mt-8 flex-1 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Icon
                    name="check"
                    className={cn(
                      "size-5 shrink-0",
                      plan.featured ? "text-brand-400" : "text-brand-600",
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href={plan.cta.href}
              variant={plan.featured ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              {plan.cta.label}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
