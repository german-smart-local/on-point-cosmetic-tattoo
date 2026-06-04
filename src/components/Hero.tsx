import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-[#f7f3ea]">
      <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[620px]">
        <Image
          src="/images/hero.png"
          alt="Cosmetic Tattooing on the Sunshine Coast"
          fill
          priority
          className="object-cover object-[70%_center] lg:object-right"
        />
        <div className="absolute inset-y-0 left-[6%] sm:left-[8%] flex items-center pointer-events-none">
          <Image
            src="/images/logo.png"
            alt="On Point Cosmetic Tattoo Studio"
            width={300}
            height={120}
            priority
            className="w-[150px] sm:w-[220px] lg:w-[300px] h-auto"
          />
        </div>
      </div>

      <div className="w-full bg-[#f7f3ea] text-center py-10 px-5">
        <h1 className="font-heading font-[200] uppercase text-[#c09569] tracking-[1px] text-[26px] sm:text-[36px] lg:text-[50px] leading-tight py-10">
          Cosmetic Tattooing on the Sunshine Coast
        </h1>
      </div>
    </section>
  );
}
