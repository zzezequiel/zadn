import BasicFeature from "@/components/Features";
import Hero from "@/components/Hero";
import ServicesCards from "@/components/Services";
import FooterLayout from "@/layouts/Footer.layout";
import WithSubnavigation from "@/layouts/Header.layout";

export default function Home() {
  return (
    <>
      <WithSubnavigation />
      <Hero />
      <BasicFeature />
      <ServicesCards />
      <FooterLayout/>
    </>

  )
}
