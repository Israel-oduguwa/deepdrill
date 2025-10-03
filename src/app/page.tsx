// app/page.tsx
import Navbar from "@/components/Navbar";
import Link from "next/link";
import HeroSection from "./PageComponents/HeroSection";
import About from "./PageComponents/About";
import Services from "./PageComponents/Services";

export default function HomePage() {
  return (
    <main id="home" className="relative">
      <Navbar />

      {/* HERO */}
     <HeroSection/>

      {/* ABOUT */}
     <About/>

      {/* SERVICES */}
      {/* <section id="services" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Services
          </h2>
          <p className="mt-3 text-slate-700 max-w-2xl">
            We deliver reliable upstream services with measurable impact.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Drilling Support",
                desc: "Real-time engineering and operations support to minimize downtime.",
              },
              {
                title: "Project Management",
                desc: "End-to-end planning, execution, and delivery with strict QA/QC.",
              },
              {
                title: "Engineering Consulting",
                desc: "Specialist teams for well design, optimization, and integrity.",
              },
              {
                title: "Equipment Supply",
                desc: "Oilfield tools and spares through vetted OEM partners.",
              },
              {
                title: "Field Services",
                desc: "On-site personnel for commissioning, inspection, and maintenance.",
              },
              {
                title: "Data & Reporting",
                desc: "Operational analytics and compliance reporting in real time.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
                <div className="mt-4 text-sm">
                  <a href="#contact" className="text-[#FF7A00] font-semibold hover:underline">
                    Talk to an expert →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Services/>
      {/* SAFETY */}
      <section id="safety" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Safety</h2>
          <p className="mt-3 text-slate-700 max-w-2xl">
            We operate with uncompromising HSE standards aligned to global best
            practices, focusing on risk management, training, and continuous
            improvement.
          </p>
        </div>
      </section>

      {/* ICT */}
      <section id="ict" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            ICT
          </h2>
          <p className="mt-3 text-slate-700 max-w-2xl">
            Our ICT layer enables real-time data flow from field operations to
            management dashboards, ensuring faster decisions and better outcomes.
          </p>
        </div>
      </section>

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
