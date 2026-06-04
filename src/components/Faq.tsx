"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

export interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-[860px] divide-y divide-[#e7ddcd]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-heading text-[18px] font-light text-ink">
                {item.q}
              </span>
              <ChevronDownIcon
                className={`shrink-0 text-[18px] text-gold transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden text-[15px] leading-[1.7] text-[#555]">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
