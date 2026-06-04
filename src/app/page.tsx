import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { Services } from "@/components/Services";
import { GetInTouch } from "@/components/GetInTouch";
import { Artist } from "@/components/Artist";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <GetInTouch />
      <Artist />
      <Testimonials />
    </>
  );
}
