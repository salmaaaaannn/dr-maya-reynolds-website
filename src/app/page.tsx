import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import WhoIHelp from "@/components/WhoIHelp";
import QuoteBanner from "@/components/QuoteBanner";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2F3A38]">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Introduction />
        <WhoIHelp />
        <QuoteBanner />
        <Services />
        <Approach />
        <About />
        <Office />
        <FAQ />
        <AppointmentCTA />
      </main>
      <Footer />
    </div>
  );
}
