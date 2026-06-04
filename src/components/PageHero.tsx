import Image from "next/image";

interface PageHeroProps {
  title: string;
  image: string;
}

export function PageHero({ title, image }: PageHeroProps) {
  return (
    <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[440px]">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative mx-auto flex h-full max-w-[1200px] items-center justify-end px-8">
        <h1 className="max-w-[520px] text-right font-heading text-[30px] font-[200] uppercase leading-tight tracking-[1px] text-white sm:text-[40px] lg:text-[52px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
