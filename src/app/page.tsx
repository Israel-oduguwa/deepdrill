// app/page.tsx
import Navbar from "@/components/Navbar";
import Link from "next/link";
import HeroSection from "./PageComponents/HeroSection";
import About from "./PageComponents/About";
import Services from "./PageComponents/Services";
import ICTSection from "./PageComponents/IctSection";
import SafetySection from "./PageComponents/SafetySection";

export default function HomePage() {
  return (
    <main id="home" className="relative">
      <Navbar />

      {/* HERO */}
     <HeroSection/>

      {/* ABOUT */}
     <About/>

      {/* SERVICES */}
   
      <div id="services"><Services/></div>

      <ICTSection />
      {/* SAFETY */}
      <SafetySection />
      {/* <section id="safety" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Safety</h2>
          <p className="mt-3 text-slate-700 max-w-2xl">
            We operate with uncompromising HSE standards aligned to global best
            practices, focusing on risk management, training, and continuous
            improvement.
          </p>
        </div>
      </section> */}

      {/* ICT */}
      {/* <section id="ict" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            ICT
          </h2>
          <p className="mt-3 text-slate-700 max-w-2xl">
            Our ICT layer enables real-time data flow from field operations to
            management dashboards, ensuring faster decisions and better outcomes.
          </p>
        </div>
      </section> */}
      

      {/* CAREERS */}
      <section id="careers" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Careers
          </h2>
          <p className="mt-3 text-slate-700 max-w-2xl">
            Join experienced professionals delivering mission-critical oilfield
            services. Check back soon for openings.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Contact Us
              </h2>
              <p className="mt-3 text-white/80">
                Lagos HQ: 9, Adebayo Ogunrombi Close, Ogudu GRA, Lagos, NG
                <br />
                Houston Office: 100 Glenborough Drive, Suite #444, Houston, TX 77067, USA
              </p>
            </div>
          
          </div>
          <p className="mt-10 text-xs text-white/60">
            © {new Date().getFullYear()} Deepdrill Oilfield Services Ltd. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
