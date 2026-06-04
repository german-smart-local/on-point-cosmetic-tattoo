"use client";

import { useEffect, useState } from "react";
import { GoogleIcon, StarIcon, VerifiedIcon } from "@/components/icons";

interface Review {
  name: string;
  initials: string;
  color: string;
  timeAgo: string;
  rating: 5;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Amy Lewis",
    initials: "AL",
    color: "#7e57c2",
    timeAgo: "2 months ago",
    rating: 5,
    text: "I couldn't be happier with my brows! Lisa did an amazing job. She really took the time to listen to what I wanted and the result is so natural.",
  },
  {
    name: "Lorraine Jones",
    initials: "LJ",
    color: "#26a69a",
    timeAgo: "2 months ago",
    rating: 5,
    text: "I travel from Gladstone to the Sunny Coast to have my Eyebrows Cosmetic Tattoo with Lisa. Absolutely worth every kilometre — she is a true professional.",
  },
  {
    name: "Tegan McPherson",
    initials: "TM",
    color: "#ef5350",
    timeAgo: "4 months ago",
    rating: 5,
    text: "I couldn't have asked for a better first experience with cosmetic tattooing. I had microblading and the whole process was calm and comfortable.",
  },
  {
    name: "Sarah Bennett",
    initials: "SB",
    color: "#42a5f5",
    timeAgo: "5 months ago",
    rating: 5,
    text: "Lisa is so skilled and professional. My powder brows healed beautifully and look incredible. Highly recommend On Point.",
  },
  {
    name: "Kylie Roberts",
    initials: "KR",
    color: "#ec407a",
    timeAgo: "6 months ago",
    rating: 5,
    text: "Beautiful studio and an amazing artist. My lip blush is exactly what I hoped for. Thank you Lisa!",
  },
  {
    name: "Megan Walsh",
    initials: "MW",
    color: "#ab47bc",
    timeAgo: "7 months ago",
    rating: 5,
    text: "From consult to aftercare Lisa was wonderful. My eyeliner tattoo is perfect and so subtle. Couldn't be happier.",
  },
];

const VISIBLE = 3;
const PAGE_COUNT = reviews.length - VISIBLE + 1;

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % PAGE_COUNT);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="bg-white py-[70px] px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="font-heading font-light text-gold text-[40px] mb-8">
          Testimonials
        </h2>

        <div className="inline-flex items-center gap-2.5 bg-cream rounded-lg px-5 py-3.5 mb-7">
          <span className="font-semibold text-[22px] text-ink">5.0</span>
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="text-[18px] text-[#f5a623]" />
            ))}
          </span>
          <span className="text-[14px] text-[#888]">(24)</span>
          <GoogleIcon className="text-[18px]" />
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * (100 / VISIBLE)}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-2.5"
              >
                <div className="bg-white border border-[#eee] rounded-lg p-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-left h-full hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-shadow">
                  <div className="flex gap-2.5 items-center mb-2">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-semibold"
                      style={{ backgroundColor: review.color }}
                    >
                      {review.initials}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-[15px] text-ink">
                          {review.name}
                        </span>
                        <VerifiedIcon className="text-[14px] text-gold" />
                      </div>
                      <div className="flex items-center gap-1">
                        <GoogleIcon className="text-[14px]" />
                        <span className="text-[12px] text-[#888]">
                          {review.timeAgo}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-0.5 my-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} className="text-[14px] text-[#f5a623]" />
                    ))}
                  </div>

                  <p className="text-[14px] text-[#555] leading-[1.5] line-clamp-3">
                    {review.text}
                  </p>

                  <span className="text-[13px] text-gold mt-1.5 inline-block cursor-pointer">
                    Read more
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === i ? "bg-gold" : "bg-[#ccc]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
