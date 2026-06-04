import Image from "next/image";

export function Artist() {
  return (
    <section id="artist" className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex lg:flex-row flex-col gap-12 items-center">
        <div className="lg:w-[48%] w-full">
          <Image
            src="/images/artist-lisa.jpg"
            alt="Lisa Eagles - Certified Cosmetic Tattoo Artist"
            width={629}
            height={650}
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
        <div className="lg:w-[52%] w-full">
          <div className="bg-[#f7f3ea] p-8 lg:p-10 rounded-md">
            <h2 className="font-heading font-light text-[#c09569] text-[40px] mb-1.5">
              Meet Your Artist
            </h2>
            <h3 className="font-heading font-thin text-[#303030] text-[25px] mb-5">
              Lisa Eagles
            </h3>
            <p className="text-[15px] text-[#444] leading-[1.7] mb-3.5">
              Established in 2016, On Point Cosmetic Tattoo Studio operates from
              Buderim, servicing clients across the Sunshine Coast. Lisa is the
              certified cosmetic tattoo artist behind the studio.
            </p>
            <p className="text-[15px] text-[#444] leading-[1.7] mb-3.5">
              Lisa began her career in the cosmetic field while working
              alongside a Gold Coast plastic surgeon, where she developed an
              interest in cosmetic tattoo procedures. She later trained in
              cosmetic tattoo techniques in Australia and has continued
              professional development through additional training with industry
              educators, both nationally and internationally.
            </p>
            <p className="text-[15px] text-[#444] leading-[1.7] mb-3.5">
              Ongoing education forms part of her practice. Lisa regularly
              updates her skills to stay informed about current techniques and
              application methods.
            </p>
            <p className="text-[15px] text-[#444] leading-[1.7] mb-3.5">
              Her work includes nano realism hair strokes, feather touch
              microblading, powder and combination brows, eyeliner enhancement,
              designer eyeliner and lip tattoo techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
