  import { Geist, Geist_Mono } from "next/font/google";
  import Navbar from "@/components/common/Navbar";
  import Banner from "@/components/container/home/Banner";
  import About from "@/components/container/home/About";
  import WhyChoose from "@/components/container/home/WhyChoose";
  import Benefits from "@/components/container/home/Benefits";
  import Plan from "@/components/container/home/Plan";
  import Services from "@/components/container/home/Services";
  import Quote from "@/components/container/home/Quote";
  import FAQs from "@/components/container/home/FAQs";
  import Locations from "@/components/container/home/Locations";
  import Testimonial from "@/components/container/home/Testimonial";
  import Footer from "@/components/container/home/Footer";
  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export default function Home() {
    const getStaticProps = async () => {
      const data = await fetch('/st-data/fireplace/content/home/data.json');
      const json = await data.json();
      return json;
    }
    const data = getStaticProps();
    console.log(data);
    return (
          <>
          <Navbar />
          <main className="pt-18 md:pt-16" id="home">
            <section id="banner"><Banner /></section>
            <section id="about"><About /></section>
            <section id="plan"><Plan /></section>
            <section id="testimonial"><Testimonial /></section>
            <section id="services"><Services /></section>
            <section id="faqs"><FAQs /></section>
            <section id="why-choose"><WhyChoose /></section>
            <section id="benefits"><Benefits /></section>
            <section id="quote"><Quote /></section>
            <section id="locations"><Locations /></section>
            <Footer />
          </main>
          </>
      
    );
  }

