import { Hero } from "./sections/Hero";
import { Catalog } from "./sections/Catalog";
import { About } from "./sections/About";
import { WhyUs } from "./sections/WhyUs";
import { Testimonials } from "./sections/Testimonials";
import { Location } from "./sections/Location";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Catalog />
      <About />
      <WhyUs />
      <Testimonials />
      <Location />
      <Contact />
    </>
  );
}
