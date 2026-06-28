import { Navbar } from "@/app/components/navbar";
import { Hero } from "@/app/components/hero";
import { Products } from "@/app/components/products";
import { About } from "@/app/components/about";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
