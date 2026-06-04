"use client";

import { useState } from "react";

export function GetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="font-heading font-light text-[#c09569] text-[42px] lg:text-[56px] text-center mb-12">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-[15px] font-semibold text-[#303030] mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#f7f3ea] border-0 rounded-sm h-11 px-3 text-[16px] text-[#303030] outline-none focus:ring-2 focus:ring-[#c09569]/40"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[15px] font-semibold text-[#303030] mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#f7f3ea] border-0 rounded-sm h-11 px-3 text-[16px] text-[#303030] outline-none focus:ring-2 focus:ring-[#c09569]/40"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-[15px] font-semibold text-[#303030] mb-1.5"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#f7f3ea] border-0 rounded-sm h-11 px-3 text-[16px] text-[#303030] outline-none focus:ring-2 focus:ring-[#c09569]/40"
              />
            </div>
          </div>
          <div className="mb-7">
            <label
              htmlFor="message"
              className="block text-[15px] font-semibold text-[#303030] mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#f7f3ea] border-0 rounded-sm min-h-[110px] p-3 text-[16px] text-[#303030] outline-none focus:ring-2 focus:ring-[#c09569]/40 resize-y"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#f7f3ea] border border-[#303030] rounded-[15px] px-12 py-3.5 font-josefin text-[18px] text-[#303030] hover:bg-[#c09569] hover:text-white hover:border-[#c09569] transition-colors"
            >
              Book Now
            </button>
            {submitted && (
              <p className="text-[#c09569] text-center mt-5">
                Thank you for contacting On Point Cosmetic Tattoo Studio. We will
                get back to you as soon as possible.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
