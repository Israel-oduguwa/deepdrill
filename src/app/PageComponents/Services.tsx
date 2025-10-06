// components/Services.tsx
"use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from "framer-motion";

// import {
//   Zap,
//   Shield,
//   Users,
//   BarChart3,
//   ArrowRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Award,
//   TrendingUp,
//   Lightbulb,
//   Cpu,
//   Globe,
//   Database,
//   Cloud,
//   Lock,
//   Settings,
//   Cog,
//   Truck,
//   ClipboardCheck,
//   Clock,
//   ShieldCheck,
//   ShoppingCart,
//   Eye
// } from 'lucide-react';

// const ServiceSection = () => {
//   const [activeService, setActiveService] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
//   };

//   // Updated services data based on your structure
//   const servicesData = {
//     manpower: {
//       title: "Technical Manpower",
//       description: "Skilled professionals for all project phases",
//       icon: Users,
//       color: "from-orange-500 to-amber-500",
//       bgGradient: "from-orange-500/5 to-amber-500/5",
//       image: "👥",
//       features: [
//         "Planning & Scheduling",
//         "Cost Control & Coordination",
//         "Procurement & Material Control",
//         "QA/QC & Construction Management",
//         "Feasibility Studies & Engineering",
//         "Project Controls & Risk Management",
//       ],
//       whyItems: [
//         { icon: Clock, label: "Response Time", value: "Short-notice mobilization" },
//         { icon: Globe, label: "Global Coverage", value: "Local & expatriate professionals" },
//         { icon: ShieldCheck, label: "Compliance", value: "HSE-first mindset & documentation" },
//         { icon: Zap, label: "Delivery", value: "Real-time coordination" },
//       ],
//       typicalRoles: "Drilling engineers, wellsite supervisors, QA/QC engineers, planners, cost controllers, inspectors, construction managers, materials coordinators, and more."
//     },
//     engineering: {
//       title: "Engineering Services",
//       description: "End-to-end engineering solutions",
//       icon: Cog,
//       color: "from-blue-500 to-cyan-500",
//       bgGradient: "from-blue-500/5 to-cyan-500/5",
//       image: "⚙️",
//       features: [
//         "Conceptual & Detailed Design",
//         "FEED Studies & Analysis",
//         "Process Engineering",
//         "Mechanical & Piping Design",
//         "Civil & Structural Engineering",
//         "Electrical & Instrumentation",
//       ],
//       whyItems: [
//         { icon: BarChart3, label: "Expertise", value: "Seasoned engineering professionals" },
//         { icon: ShieldCheck, label: "Quality", value: "ISO-compliant deliverables" },
//         { icon: Clock, label: "Efficiency", value: "Streamlined engineering processes" },
//         { icon: Zap, label: "Innovation", value: "Cutting-edge engineering solutions" },
//       ],
//       typicalRoles: "Process engineers, mechanical engineers, civil engineers, electrical engineers, instrumentation engineers, pipeline engineers, and more."
//     },
//     procurement: {
//       title: "Procurement Services",
//       description: "Strategic sourcing & supply chain",
//       icon: Truck,
//       color: "from-emerald-500 to-green-500",
//       bgGradient: "from-emerald-500/5 to-green-500/5",
//       image: "🚚",
//       features: [
//         "Strategic Sourcing",
//         "Vendor Management",
//         "Supply Chain Optimization",
//         "Logistics & Transportation",
//         "Inventory Management",
//         "Procurement Analytics",
//       ],
//       whyItems: [
//         { icon: ShoppingCart, label: "Global Network", value: "Established vendor relationships" },
//         { icon: Clock, label: "Lead Time", value: "Optimized delivery schedules" },
//         { icon: ShieldCheck, label: "Quality", value: "Rigorous vendor qualification" },
//         { icon: Zap, label: "Cost Savings", value: "Competitive pricing strategies" },
//       ],
//       typicalRoles: "Procurement specialists, supply chain managers, logistics coordinators, vendor managers, procurement analysts, and more."
//     },
//     inspection: {
//       title: "Technical Inspection",
//       description: "Quality assurance & compliance",
//       icon: ClipboardCheck,
//       color: "from-violet-500 to-purple-500",
//       bgGradient: "from-violet-500/5 to-purple-500/5",
//       image: "🔍",
//       features: [
//         "NDT & Quality Control",
//         "Welding Inspection",
//         "Coating & Corrosion Control",
//         "Material Verification",
//         "Dimensional Control",
//         "Documentation & Reporting",
//       ],
//       whyItems: [
//         { icon: Eye, label: "Thoroughness", value: "Comprehensive inspection protocols" },
//         { icon: ShieldCheck, label: "Standards", value: "International code compliance" },
//         { icon: Clock, label: "Efficiency", value: "Minimal project disruption" },
//         { icon: Zap, label: "Accuracy", value: "Precision measurement tools" },
//       ],
//       typicalRoles: "QA/QC inspectors, NDT technicians, welding inspectors, coating inspectors, material engineers, and more."
//     }
//   };

//   // Convert servicesData object to array for easier mapping
//   const services = Object.values(servicesData).map((service, index) => ({
//     id: index + 1,
//     ...service,
//     gradient: service.color,
//     stats: {
//       expertise: "15+ Years",
//       projects: "500+",
//       clients: "100+"
//     }
//   }));

//   // Auto-rotate services
//   useEffect(() => {
//     if (!isPlaying) return;

//     const interval = setInterval(() => {
//       setActiveService((prev) => (prev + 1) % services.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isPlaying, services.length]);

//   // Mouse move parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;
//       const y = ((e.clientY - rect.top) / rect.height) * 100;

//       setMousePosition({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const nextService = () => {
//     setActiveService((prev) => (prev + 1) % services.length);
//   };

//   const prevService = () => {
//     setActiveService((prev) => (prev - 1 + services.length) % services.length);
//   };

//   const currentService = services[activeService];
//   const IconComponent = currentService.icon;

//   return (
//     <section

//       ref={sectionRef}
//       className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         {/* Gradient Orbs */}
//         <div
//           className="absolute top-1/4 -left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transition-all duration-1000"
//           style={{
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//           }}
//         ></div>
//         <div
//           className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
//           style={{
//             transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
//           }}
//         ></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }} />
//         </div>
//       </div>

//       <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         {/* Header Section */}
//         <div className="text-center">
//         <motion.span
//             variants={fadeInUp}
//             className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600"
//           >
//             <motion.span
//               className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
//               animate={{ scale: [1, 1.3, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//             Our Services
//           </motion.span>
//         </div>
//         <div className="text-center mb-20">
//           <h1 className="text-5xl md:text-7xl lg:text-5xl xl:text-5xl font-bold text-white mb-6">
//             Technical Excellence
//             <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"> Industrial Solutions</span>
//           </h1>

//           <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
//             Comprehensive technical services and manpower solutions for industrial projects, ensuring quality, efficiency, and reliability.
//           </p>
//         </div>

//         {/* Main Services Showcase */}
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-32">
//           {/* Left Column - Service Details */}
//           <div className="space-y-8">
//             {/* Service Navigation */}
//             <div className="flex items-center justify-between mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="flex gap-2">
//                   {services.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setActiveService(index)}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         index === activeService
//                           ? 'bg-white scale-125'
//                           : 'bg-white/30 hover:bg-white/50'
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-slate-400 text-sm">
//                   {activeService + 1} / {services.length}
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={prevService}
//                   className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
//                 >
//                   <ChevronLeft className="w-5 h-5 text-white group-hover:text-blue-400" />
//                 </button>
//                 <button
//                   onClick={() => setIsPlaying(!isPlaying)}
//                   className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
//                 >
//                   {isPlaying ? (
//                     <Pause className="w-5 h-5 text-white group-hover:text-blue-400" />
//                   ) : (
//                     <Play className="w-5 h-5 text-white group-hover:text-blue-400" />
//                   )}
//                 </button>
//                 <button
//                   onClick={nextService}
//                   className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
//                 >
//                   <ChevronRight className="w-5 h-5 text-white group-hover:text-blue-400" />
//                 </button>
//               </div>
//             </div>

//             {/* Service Content */}
//             <div className="space-y-6">
//               <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentService.gradient} shadow-2xl shadow-current/20`}>
//                 <IconComponent className="w-8 h-8 text-black" />
//               </div>

//               <h2 className="text-4xl md:text-5xl font-bold text-white">
//                 {currentService.title}
//               </h2>

//               <p className="text-xl text-slate-300 leading-relaxed">
//                 {currentService.description}
//               </p>

//               <div className="grid grid-cols-2 gap-4">
//                 {currentService.features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-3 text-slate-300">
//                     <div className="w-2 h-2 bg-current rounded-full"></div>
//                     <span className="font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Why Choose Us Section */}
//               <div className="pt-6 border-t border-white/10">
//                 <h3 className="text-xl font-semibold text-white mb-4">Why Choose Our Service</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {currentService.whyItems.map((item, index) => {
//                     const ItemIcon = item.icon;
//                     return (
//                       <div key={index} className="flex items-center gap-3 text-slate-300">
//                         <div className={`p-2 rounded-lg bg-gradient-to-r ${currentService.gradient}`}>
//                           <ItemIcon className="w-4 h-4 text-white" />
//                         </div>
//                         <div>
//                           <div className="font-medium text-white text-sm">{item.value}</div>
//                           <div className="text-xs text-slate-400">{item.label}</div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Typical Roles */}
//               <div className="pt-4">
//                 <p className="text-slate-300 text-sm">
//                   <span className="font-semibold text-white">Typical Roles: </span>
//                   {currentService.typicalRoles}
//                 </p>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex gap-4 pt-6">
//                 <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
//                   Request Manpower
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//                 <button className="px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300">
//                   View Case Study
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Visual Showcase */}
//           <div className="relative">
//             <div className={`relative h-full min-h-[600px] rounded-3xl bg-gradient-to-br ${currentService.bgGradient} border border-white/10 backdrop-blur-sm overflow-hidden`}>
//               {/* Animated Background */}
//               <div className="absolute inset-0">
//                 <div className="absolute top-0 left-0 w-full h-full opacity-10">
//                   <div className="text-9xl absolute top-10 right-10">{currentService.image}</div>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float"></div>
//               <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float" style={{animationDelay: '2s'}}></div>
//               <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float" style={{animationDelay: '4s'}}></div>

//               {/* Content Center */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-md text-white font-bold mb-6">{currentService.image} DEEPDRILL OILFIELD SERVICES OVERSEAS LTD. is a world-class inspection services company providing a wide range of industrial and maritime/offshore inspection services. Deepdrill continues to leverage on the strength of her technical partner, Technical Industries Inc. LLC who are leaders and have over 40 years experience in the provision of Ultrasonic pipe inspection technology, to offer consistent, dependable and high quality services to our clients.</div>
//                   <div className="text-white text-sm font-semibold">Our Partner
// TECHNICAL INDUTRIES INC. LLC is a recognised global leader in ultrasonic pipe inspection technology, which has repeatedly shown superior flaw detection capabilities. They have large inspection facility located in Houston, Texas which provides excellent pipe and equipment storage, as well as maintenance services.

// Technical industries have the largest OD and pipe length inspection capabilities in the industry for plain and threaded pipe, and the deepest penetration capability offered for wall thickness measurement.</div>
//                   <div className="text-slate-400 mt-2">Proven track record</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//               <div className="absolute inset-0" style={{
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//               }}></div>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Ready to Scale Your Technical Operations?
//             </h2>
//             <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
//               Join hundreds of industrial companies that have enhanced their operations with our technical services and manpower solutions.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-12 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
//                 Schedule Consultation
//               </button>
//               <button className="px-12 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300">
//                 View Our Projects
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add custom animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ServiceSection;

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from "framer-motion";

// import {
//   Zap,
//   Shield,
//   Users,
//   BarChart3,
//   ArrowRight,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Award,
//   TrendingUp,
//   Lightbulb,
//   Cpu,
//   Globe,
//   Database,
//   Cloud,
//   Lock,
//   Settings,
//   Cog,
//   Truck,
//   ClipboardCheck,
//   Clock,
//   ShieldCheck,
//   ShoppingCart,
//   Eye,
//   Factory,
//   Ship,
//   Gauge,
//   TestTube,
//   CheckCircle,
//   ArrowUpRight
// } from 'lucide-react';

// const ServiceSection = () => {
//   const [activeService, setActiveService] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
//   };

//   // Comprehensive services data with ALL content
//   const servicesData = {
//     manpower: {
//       title: "Technical Manpower Supply Services",
//       description: "Deepdrill is committed to sourcing and supply of manpower. The technical Manpower supply team provides competent, experienced highly skilled and dedicated personnel, tailored to meet specific needs of our clients.",
//       fullDescription: "We cover local and expatriate personnel in all disciplines in the industry, working with our partners in the UK and US to provide expatriate personnel on short notices.",
//       icon: Users,
//       color: "from-orange-500 to-amber-500",
//       bgGradient: "from-orange-500/5 to-amber-500/5",
//       image: "👥",
//       features: [
//         "Planning and Scheduling",
//         "Cost Control",
//         "Coordination",
//         "Procurement",
//         "Quality Assurance/Control",
//         "Material Control",
//         "Feasibility Studies",
//         "Construction Management"
//       ],
//       stats: { experience: "15+ Years", projects: "200+", clients: "50+" }
//     },
//     engineering: {
//       title: "Engineering Services",
//       description: "Comprehensive engineering solutions across all major disciplines for the oil and gas industry.",
//       fullDescription: "Our engineering team provides expert solutions across multiple disciplines to ensure project success and operational excellence.",
//       icon: Cog,
//       color: "from-blue-500 to-cyan-500",
//       bgGradient: "from-blue-500/5 to-cyan-500/5",
//       image: "⚙️",
//       disciplines: [
//         "Process Engineering",
//         "Mechanical Engineering",
//         "Instrumentation Engineering",
//         "Civil Engineering",
//         "Safety Engineering",
//         "Material / Corrosion Engineering",
//         "Environmental Engineering",
//         "Structural Engineering",
//         "Pipeline Engineering",
//         "Welding Engineering",
//         "Marine Engineering"
//       ],
//       stats: { disciplines: "11+", experience: "20+ Years", projects: "300+" }
//     },
//     procurement: {
//       title: "Procurement Supply Services",
//       description: "Deepdrill has developed an extensive network of reliable sources for the oil and gas application.",
//       fullDescription: `This access to worldwide services enables the company to obtain materials and equipments competitively and quickly while maintaining the highest standards.

// We offer integrated procurement supply services to oil and gas industries. We handle the challenge of global sourcing. All procurement items and orders are handled by the department with assistance from specialist engineers in various fields. We pride ourselves in superior customer service and personalized procurement assistance far beyond industry standards.

// The Logistics division in this department undertakes the supply arrangements, employing internationally renowned forwarders and this make for easy facilitation of goods from anywhere in the globe including air freighting of good to meet emergency situation. We adhere strictly to most efficient practices to ensure efficiency and accuracy in procurement and timely deliveries.`,
//       icon: Truck,
//       color: "from-emerald-500 to-green-500",
//       bgGradient: "from-emerald-500/5 to-green-500/5",
//       image: "🌐",
//       practices: [
//         "Continuous widening of base through structured and comprehensive evaluation, qualification and continuous monitoring of changing market trends and technologies.",
//         "Adherence to ISO9001 accredited quality system.",
//         "Global Sourcing",
//         "Inspection (ready for inspection, inspection report, customs)",
//         "Shipping (packaging, marketing, ready for shipment, transport, customs)",
//         "Material handling (receiving, quality control, storing insurance to mention just a few)"
//       ],
//       capabilities: "Deepdrill has repeatedly demonstrated her ability to meet demanding schedules for major projects won in competitive bidding.",
//       stats: { network: "Global", quality: "ISO9001", projects: "150+" }
//     },
//     inspection: {
//       title: "Technical Inspection Services",
//       description: "DEEPDRILL OILFIELD SERVICES OVERSEAS LTD. is a world-class inspection services company providing a wide range of industrial and maritime/offshore inspection services.",
//       fullDescription: "Deepdrill continues to leverage on the strength of her technical partner, Technical Industries Inc. LLC who are leaders and have over 40 years experience in the provision of Ultrasonic pipe inspection technology, to offer consistent, dependable and high quality services to our clients.",
//       icon: ClipboardCheck,
//       color: "from-violet-500 to-purple-500",
//       bgGradient: "from-violet-500/5 to-purple-500/5",
//       image: "🔍",
//       workforce: [
//         "API Certified Inspectors",
//         "Certified NDT Specialists",
//         "AWS Certified Welding Inspectors",
//         "QA/QC Project Managers/Supervisors",
//         "Construction/Project Supervision",
//         "Managed Services Solutions",
//         "In-Service Inspections",
//         "Technical Auditing/Supplier Assessments",
//         "Line-Pipe and Coating Inspection Services",
//         "And much more!"
//       ],
//       partner: {
//         name: "TECHNICAL INDUSTRIES INC. LLC",
//         description: "A recognised global leader in ultrasonic pipe inspection technology, which has repeatedly shown superior flaw detection capabilities. They have large inspection facility located in Houston, Texas which provides excellent pipe and equipment storage, as well as maintenance services. Technical industries have the largest OD and pipe length inspection capabilities in the industry for plain and threaded pipe, and the deepest penetration capability offered for wall thickness measurement."
//       },
//       testing: {
//         nondestructive: [
//           "Ultrasonic Testing",
//           "Radiographic Testing",
//           "Magnetic Particle Inspection (MPI)",
//           "Dye Penetrant Testing",
//           "Tank Inspection",
//           "Visual Inspection"
//         ],
//         quality: [
//           "Supplier Inspection & Expedition",
//           "Welding Procedure Qualification Testing",
//           "Pre-fabrication checks",
//           "Factory Acceptance Testing",
//           "Welding Qualification Testing",
//           "Welding Inspection"
//         ]
//       },
//       inspections: {
//         facility: [
//           "Offshore Rigs and Supply Vessels Inspections",
//           "Integrity Checks and Fatigue Failure Testing of Offshore Facility and Drilling rigs",
//           "Hull and Machinery Condition Survey of FPSOs"
//         ],
//         risk: [
//           "Strategic Support for System Conception and Implementation",
//           "Hazard Operability Studies",
//           "Construction and Repair Work Surveys",
//           "Pre-loss Surveys",
//           "Warrantee Inspection",
//           "Claim Investigation"
//         ],
//         project: [
//           "Project Planning and Supervision",
//           "Project Control and Monitoring",
//           "Project Quality Planning",
//           "Project Safety Planning"
//         ],
//         statutory: [
//           "Pressure Vessels",
//           "Steam Boilers",
//           "Passenger/Service Lift",
//           "Cranes and Lifting Equipment"
//         ]
//       },
//       stats: { experience: "40+ Years", specialists: "50+", facilities: "Houston TX" }
//     }
//   };

//   // Convert servicesData object to array for easier mapping
//   const services = Object.values(servicesData).map((service, index) => ({
//     id: index + 1,
//     ...service
//   }));

//   // Auto-rotate services
//   useEffect(() => {
//     if (!isPlaying) return;

//     const interval = setInterval(() => {
//       setActiveService((prev) => (prev + 1) % services.length);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, [isPlaying, services.length]);

//   // Mouse move parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;
//       const y = ((e.clientY - rect.top) / rect.height) * 100;

//       setMousePosition({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const nextService = () => {
//     setActiveService((prev) => (prev + 1) % services.length);
//   };

//   const prevService = () => {
//     setActiveService((prev) => (prev - 1 + services.length) % services.length);
//   };

//   const currentService = services[activeService];
//   const IconComponent = currentService.icon;

//   // Render service-specific content
//   const renderServiceContent = () => {
//     switch (currentService.id) {
//       case 1: // Technical Manpower
//         return (
//           <div className="space-y-6">
//             <div className="prose prose-invert max-w-none">
//               <p className="text-slate-300 text-lg leading-relaxed">
//                 {currentService.description}
//               </p>
//               <p className="text-slate-300 text-lg leading-relaxed">
//                 {currentService.fullDescription}
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold text-white mb-4">Our Services Include:</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {currentService.features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-3 text-slate-300 p-3 rounded-lg bg-white/5">
//                     <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
//                     <span className="font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case 2: // Engineering Services
//         return (
//           <div className="space-y-6">
//             <div className="prose prose-invert max-w-none">
//               <p className="text-slate-300 text-lg leading-relaxed">
//                 {currentService.description}
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold text-white mb-4">Engineering Disciplines:</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {currentService.disciplines.map((discipline, index) => (
//                   <div key={index} className="flex items-center gap-3 text-slate-300 p-3 rounded-lg bg-white/5">
//                     <Cog className="w-5 h-5 text-blue-400 flex-shrink-0" />
//                     <span className="font-medium">{discipline}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case 3: // Procurement Services
//         return (
//           <div className="space-y-6">
//             <div className="prose prose-invert max-w-none">
//               <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
//                 {currentService.fullDescription}
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold text-white mb-4">Our Procurement Practices:</h3>
//               <div className="space-y-3">
//                 {currentService.practices.map((practice, index) => (
//                   <div key={index} className="flex items-start gap-3 text-slate-300 p-3 rounded-lg bg-white/5">
//                     <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
//                     <span>{practice}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
//               <p className="text-emerald-300 font-semibold text-center">
//                 {currentService.capabilities}
//               </p>
//             </div>
//           </div>
//         );

//       case 4: // Technical Inspection
//         return (
//           <div className="space-y-8">
//             <div className="prose prose-invert max-w-none">
//               <p className="text-slate-300 text-lg leading-relaxed">
//                 {currentService.description}
//               </p>
//               <p className="text-slate-300 text-lg leading-relaxed">
//                 {currentService.fullDescription}
//               </p>
//             </div>

//             {/* Workforce Capability */}
//             <div>
//               <h3 className="text-xl font-semibold text-white mb-4">Our Workforce Capability:</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {currentService.workforce.map((item, index) => (
//                   <div key={index} className="flex items-center gap-3 text-slate-300 p-3 rounded-lg bg-white/5">
//                     <Users className="w-5 h-5 text-purple-400 flex-shrink-0" />
//                     <span className="text-sm">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Partner */}
//             <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
//               <h3 className="text-lg font-semibold text-white mb-2">Our Partner</h3>
//               <p className="text-purple-300 font-semibold mb-2">{currentService.partner.name}</p>
//               <p className="text-slate-300 text-sm leading-relaxed">
//                 {currentService.partner.description}
//               </p>
//             </div>

//             {/* Testing Sections */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-3">Non-Destructive Testing</h3>
//                 <div className="space-y-2">
//                   {currentService.testing.nondestructive.map((test, index) => (
//                     <div key={index} className="flex items-center gap-3 text-slate-300">
//                       <TestTube className="w-4 h-4 text-blue-400" />
//                       <span className="text-sm">{test}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-3">Quality Assurance/Control</h3>
//                 <div className="space-y-2">
//                   {currentService.testing.quality.map((item, index) => (
//                     <div key={index} className="flex items-center gap-3 text-slate-300">
//                       <ShieldCheck className="w-4 h-4 text-green-400" />
//                       <span className="text-sm">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Additional Inspection Sections */}
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-3">Facility Inspections (Marine/Offshore)</h3>
//                 <div className="space-y-2">
//                   {currentService.inspections.facility.map((item, index) => (
//                     <div key={index} className="flex items-center gap-3 text-slate-300">
//                       <Ship className="w-4 h-4 text-cyan-400" />
//                       <span className="text-sm">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-3">Risk Management</h3>
//                   <div className="space-y-2">
//                     {currentService.inspections.risk.map((item, index) => (
//                       <div key={index} className="flex items-center gap-3 text-slate-300">
//                         <Shield className="w-4 h-4 text-red-400" />
//                         <span className="text-sm">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-3">Project Management</h3>
//                   <div className="space-y-2">
//                     {currentService.inspections.project.map((item, index) => (
//                       <div key={index} className="flex items-center gap-3 text-slate-300">
//                         <ClipboardCheck className="w-4 h-4 text-orange-400" />
//                         <span className="text-sm">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-3">Statutory Inspection and Certification</h3>
//                 <div className="space-y-2">
//                   {currentService.inspections.statutory.map((item, index) => (
//                     <div key={index} className="flex items-center gap-3 text-slate-300">
//                       <Award className="w-4 h-4 text-yellow-400" />
//                       <span className="text-sm">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         {/* Gradient Orbs */}
//         <div
//           className="absolute top-1/4 -left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transition-all duration-1000"
//           style={{
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//           }}
//         ></div>
//         <div
//           className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
//           style={{
//             transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
//           }}
//         ></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }} />
//         </div>
//       </div>

//       <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <motion.span
//             variants={fadeInUp}
//             className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600"
//           >
//             <motion.span
//               className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
//               animate={{ scale: [1, 1.3, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//             Deepdrill Services
//           </motion.span>

//           <h1 className="text-5xl md:text-7xl lg:text-5xl xl:text-5xl font-bold text-white mb-6">
//             Comprehensive
//             <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"> Oil & Gas</span>
//             <br />Solutions
//           </h1>

//           <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
//             World-class technical services, manpower supply, and inspection solutions for the global oil and gas industry.
//           </p>
//         </div>

//         {/* Main Services Showcase */}
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-32">
//           {/* Left Column - Service Details */}
//           <div className="space-y-8">
//             {/* Service Navigation */}
//             <div className="flex items-center justify-between mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="flex gap-2">
//                   {services.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setActiveService(index)}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         index === activeService
//                           ? 'bg-white scale-125'
//                           : 'bg-white/30 hover:bg-white/50'
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-slate-400 text-sm">
//                   {activeService + 1} / {services.length}
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={prevService}
//                   className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
//                 >
//                   <ChevronLeft className="w-5 h-5 text-white group-hover:text-blue-400" />
//                 </button>
//                 <button
//                   onClick={() => setIsPlaying(!isPlaying)}
//                   className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
//                 >
//                   {isPlaying ? (
//                     <Pause className="w-5 h-5 text-white group-hover:text-blue-400" />
//                   ) : (
//                     <Play className="w-5 h-5 text-white group-hover:text-blue-400" />
//                   )}
//                 </button>
//                 <button
//                   onClick={nextService}
//                   className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
//                 >
//                   <ChevronRight className="w-5 h-5 text-white group-hover:text-blue-400" />
//                 </button>
//               </div>
//             </div>

//             {/* Service Content */}
//             <div className="space-y-6">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentService.color} shadow-2xl shadow-current/20`}>
//                   <IconComponent className="w-8 h-8 text-black" />
//                 </div>
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-bold text-white">
//                     {currentService.title}
//                   </h2>
//                   {/* <div className="flex gap-4 mt-2">
//                     {Object.entries(currentService.stats).map(([key, value]) => (
//                       <div key={key} className="text-center">
//                         <div className="text-lg font-bold text-white">{value}</div>
//                         <div className="text-xs text-slate-400 capitalize">{key}</div>
//                       </div>
//                     ))}
//                   </div> */}
//                 </div>
//               </div>

//               {/* Dynamic Content */}
//               <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
//                 {renderServiceContent()}
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex gap-4 pt-6 border-t border-white/10">
//                 <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
//                   Request Service
//                   <ArrowUpRight className="w-5 h-5" />
//                 </button>
//                 <button className="px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300">
//                   Download Brochure
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Visual Showcase */}
//           <div className="relative">
//             <div className={`relative h-full min-h-[600px] rounded-3xl bg-gradient-to-br ${currentService.bgGradient} border border-white/10 backdrop-blur-sm overflow-hidden`}>
//               {/* Animated Background */}
//               <div className="absolute inset-0">
//                 <div className="absolute top-0 left-0 w-full h-full opacity-10">
//                   <div className="text-9xl absolute top-10 right-10">{currentService.image}</div>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float"></div>
//               <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float" style={{animationDelay: '2s'}}></div>
//               <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float" style={{animationDelay: '4s'}}></div>

//               {/* Content Center */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-center p-8">
//                   <div className="text-8xl mb-6">{currentService.image}</div>
//                   <div className="text-white text-2xl font-semibold mb-2">Industry Excellence</div>
//                   <div className="text-slate-400">Proven track record in oil & gas</div>
//                   <div className="mt-6 flex justify-center gap-4">
//                     {Object.entries(currentService.stats).map(([key, value]) => (
//                       <div key={key} className="text-center">
//                         <div className="text-2xl font-bold text-white">{value}</div>
//                         <div className="text-xs text-slate-400 capitalize">{key}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//               <div className="absolute inset-0" style={{
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//               }}></div>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Ready to Partner with Deepdrill?
//             </h2>
//             <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
//               Join leading oil and gas companies worldwide that trust Deepdrill for comprehensive technical solutions and exceptional service delivery.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-12 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
//                 Schedule Consultation
//               </button>
//               <button className="px-12 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300">
//                 Contact Our Team
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add custom animations and scrollbar */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(255, 255, 255, 0.3);
//           border-radius: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(255, 255, 255, 0.5);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ServiceSection;

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Zap,
  Shield,
  Users,
  BarChart3,
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  Lightbulb,
  Cpu,
  Globe,
  Database,
  Cloud,
  Lock,
  Settings,
  Cog,
  Truck,
  ClipboardCheck,
  Clock,
  ShieldCheck,
  ShoppingCart,
  Eye,
  Factory,
  Ship,
  Gauge,
  TestTube,
  CheckCircle,
  ArrowUpRight,
  Calendar,
  DollarSign,
  Network,
  Package,
  FileCheck,
  HardHat,
  Wrench,
  Search,
  AlertTriangle,
  FileText,
  Target,
  GitBranch,
  Anchor,
  Thermometer,
  Radio,
  Magnet,
  Palette,
  Ruler,
  FileSearch,
  Building,
  Camera,
} from "lucide-react";

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  };

  // Icon mappings for different categories
  const iconMappings = {
    manpower: {
      "Planning and Scheduling": Calendar,
      "Cost Control": DollarSign,
      Coordination: Network,
      Procurement: ShoppingCart,
      "Quality Assurance/Control": ShieldCheck,
      "Material Control": Package,
      "Feasibility Studies": FileCheck,
      "Construction Management": HardHat,
    },
    engineering: {
      "Process Engineering": Cog,
      "Mechanical Engineering": Wrench,
      "Instrumentation Engineering": Gauge,
      "Civil Engineering": Building,
      "Safety Engineering": Shield,
      "Material / Corrosion Engineering": Thermometer,
      "Environmental Engineering": Globe,
      "Structural Engineering": Settings,
      "Pipeline Engineering": GitBranch,
      "Welding Engineering": Wrench,
      "Marine Engineering": Anchor,
    },
    procurement: {
      "Continuous widening of base through structured and comprehensive evaluation, qualification and continuous monitoring of changing market trends and technologies.":
        TrendingUp,
      "Adherence to ISO9001 accredited quality system.": Award,
      "Global Sourcing": Globe,
      "Inspection (ready for inspection, inspection report, customs)": Search,
      "Shipping (packaging, marketing, ready for shipment, transport, customs)":
        Truck,
      "Material handling (receiving, quality control, storing insurance to mention just a few)":
        Package,
    },
    inspection: {
      // Workforce
      "API Certified Inspectors": Award,
      "Certified NDT Specialists": TestTube,
      "AWS Certified Welding Inspectors": Wrench,
      "QA/QC Project Managers/Supervisors": ShieldCheck,
      "Construction/Project Supervision": HardHat,
      "Managed Services Solutions": Cloud,
      "In-Service Inspections": ClipboardCheck,
      "Technical Auditing/Supplier Assessments": FileSearch,
      "Line-Pipe and Coating Inspection Services": GitBranch,
      "And much more!": Zap,

      // NDT
      "Ultrasonic Testing": Radio,
      "Radiographic Testing": Camera,
      "Magnetic Particle Inspection (MPI)": Magnet,
      "Dye Penetrant Testing": Palette,
      "Tank Inspection": Database,
      "Visual Inspection": Eye,

      // QA/QC
      "Supplier Inspection & Expedition": Truck,
      "Welding Procedure Qualification Testing": FileCheck,
      "Pre-fabrication checks": ClipboardCheck,
      "Factory Acceptance Testing": Factory,
      "Welding Qualification Testing": Wrench,
      "Welding Inspection": Search,

      // Facility
      "Offshore Rigs and Supply Vessels Inspections": Ship,
      "Integrity Checks and Fatigue Failure Testing of Offshore Facility and Drilling rigs":
        Shield,
      "Hull and Machinery Condition Survey of FPSOs": Anchor,

      // Risk
      "Strategic Support for System Conception and Implementation": Target,
      "Hazard Operability Studies": AlertTriangle,
      "Construction and Repair Work Surveys": HardHat,
      "Pre-loss Surveys": FileSearch,
      "Warrantee Inspection": FileText,
      "Claim Investigation": Search,

      // Project
      "Project Planning and Supervision": Calendar,
      "Project Control and Monitoring": BarChart3,
      "Project Quality Planning": ShieldCheck,
      "Project Safety Planning": Shield,

      // Statutory
      "Pressure Vessels": Gauge,
      "Steam Boilers": Thermometer,
      "Passenger/Service Lift": Settings,
      "Cranes and Lifting Equipment": Wrench,
    },
  };

  // Comprehensive services data with ALL content
  const servicesData = {
    manpower: {
      title: "Technical Manpower Supply Services",
      description:
        "Deepdrill is committed to sourcing and supply of manpower. The technical Manpower supply team provides competent, experienced highly skilled and dedicated personnel, tailored to meet specific needs of our clients.",
      fullDescription:
        "We cover local and expatriate personnel in all disciplines in the industry, working with our partners in the UK and US to provide expatriate personnel on short notices.",
      icon: Users,
      color: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/5 to-amber-500/5",
      image: "👥",
      features: [
        "Planning and Scheduling",
        "Cost Control",
        "Coordination",
        "Procurement",
        "Quality Assurance/Control",
        "Material Control",
        "Feasibility Studies",
        "Construction Management",
      ],
      stats: { experience: "15+ Years", projects: "200+", clients: "50+" },
    },
    engineering: {
      title: "Engineering Services",
      description:
        "Comprehensive engineering solutions across all major disciplines for the oil and gas industry.",
      fullDescription:
        "Our engineering team provides expert solutions across multiple disciplines to ensure project success and operational excellence.",
      icon: Cog,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/5 to-cyan-500/5",
      image: "⚙️",
      disciplines: [
        "Process Engineering",
        "Mechanical Engineering",
        "Instrumentation Engineering",
        "Civil Engineering",
        "Safety Engineering",
        "Material / Corrosion Engineering",
        "Environmental Engineering",
        "Structural Engineering",
        "Pipeline Engineering",
        "Welding Engineering",
        "Marine Engineering",
      ],
      stats: { disciplines: "11+", experience: "20+ Years", projects: "300+" },
    },
    procurement: {
      title: "Procurement Supply Services",
      description:
        "Deepdrill has developed an extensive network of reliable sources for the oil and gas application.",
      fullDescription: `This access to worldwide services enables the company to obtain materials and equipments competitively and quickly while maintaining the highest standards.

We offer integrated procurement supply services to oil and gas industries. We handle the challenge of global sourcing. All procurement items and orders are handled by the department with assistance from specialist engineers in various fields. We pride ourselves in superior customer service and personalized procurement assistance far beyond industry standards.

The Logistics division in this department undertakes the supply arrangements, employing internationally renowned forwarders and this make for easy facilitation of goods from anywhere in the globe including air freighting of good to meet emergency situation. We adhere strictly to most efficient practices to ensure efficiency and accuracy in procurement and timely deliveries.`,
      icon: Truck,
      color: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/5 to-green-500/5",
      image: "🌐",
      practices: [
        "Continuous widening of base through structured and comprehensive evaluation, qualification and continuous monitoring of changing market trends and technologies.",
        "Adherence to ISO9001 accredited quality system.",
        "Global Sourcing",
        "Inspection (ready for inspection, inspection report, customs)",
        "Shipping (packaging, marketing, ready for shipment, transport, customs)",
        "Material handling (receiving, quality control, storing insurance to mention just a few)",
      ],
      capabilities:
        "Deepdrill has repeatedly demonstrated her ability to meet demanding schedules for major projects won in competitive bidding.",
      stats: { network: "Global", quality: "ISO9001", projects: "150+" },
    },
    inspection: {
      title: "Technical Inspection Services",
      description:
        "DEEPDRILL OILFIELD SERVICES OVERSEAS LTD. is a world-class inspection services company providing a wide range of industrial and maritime/offshore inspection services.",
      fullDescription:
        "Deepdrill continues to leverage on the strength of her technical partner, Technical Industries Inc. LLC who are leaders and have over 40 years experience in the provision of Ultrasonic pipe inspection technology, to offer consistent, dependable and high quality services to our clients.",
      icon: ClipboardCheck,
      color: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/5 to-purple-500/5",
      image: "🔍",
      workforce: [
        "API Certified Inspectors",
        "Certified NDT Specialists",
        "AWS Certified Welding Inspectors",
        "QA/QC Project Managers/Supervisors",
        "Construction/Project Supervision",
        "Managed Services Solutions",
        "In-Service Inspections",
        "Technical Auditing/Supplier Assessments",
        "Line-Pipe and Coating Inspection Services",
        "And much more!",
      ],
      partner: {
        name: "TECHNICAL INDUSTRIES INC. LLC",
        description:
          "A recognised global leader in ultrasonic pipe inspection technology, which has repeatedly shown superior flaw detection capabilities. They have large inspection facility located in Houston, Texas which provides excellent pipe and equipment storage, as well as maintenance services. Technical industries have the largest OD and pipe length inspection capabilities in the industry for plain and threaded pipe, and the deepest penetration capability offered for wall thickness measurement.",
      },
      testing: {
        nondestructive: [
          "Ultrasonic Testing",
          "Radiographic Testing",
          "Magnetic Particle Inspection (MPI)",
          "Dye Penetrant Testing",
          "Tank Inspection",
          "Visual Inspection",
        ],
        quality: [
          "Supplier Inspection & Expedition",
          "Welding Procedure Qualification Testing",
          "Pre-fabrication checks",
          "Factory Acceptance Testing",
          "Welding Qualification Testing",
          "Welding Inspection",
        ],
      },
      inspections: {
        facility: [
          "Offshore Rigs and Supply Vessels Inspections",
          "Integrity Checks and Fatigue Failure Testing of Offshore Facility and Drilling rigs",
          "Hull and Machinery Condition Survey of FPSOs",
        ],
        risk: [
          "Strategic Support for System Conception and Implementation",
          "Hazard Operability Studies",
          "Construction and Repair Work Surveys",
          "Pre-loss Surveys",
          "Warrantee Inspection",
          "Claim Investigation",
        ],
        project: [
          "Project Planning and Supervision",
          "Project Control and Monitoring",
          "Project Quality Planning",
          "Project Safety Planning",
        ],
        statutory: [
          "Pressure Vessels",
          "Steam Boilers",
          "Passenger/Service Lift",
          "Cranes and Lifting Equipment",
        ],
      },
      stats: {
        experience: "40+ Years",
        specialists: "50+",
        facilities: "Houston TX",
      },
    },
  };

  // Convert servicesData object to array for easier mapping
  const services = Object.values(servicesData).map((service, index) => ({
    id: index + 1,
    ...service,
  }));

  // Auto-rotate services
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, services.length]);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[activeService];
  const IconComponent = currentService.icon;

  // Get icon for a specific item
  const getIconForItem = (item: string, serviceType: string) => {
    const mappings = iconMappings[serviceType as keyof typeof iconMappings];
    const IconComponent = mappings?.[item] || CheckCircle;
    return IconComponent;
  };

  // Render service-specific categorized content for LEFT side with grid layout and icons
  const renderCategorizedContent = () => {
    switch (currentService.id) {
      case 1: // Technical Manpower
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Our Services Include:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {currentService.features.map((feature, index) => {
                  const FeatureIcon = getIconForItem(feature, "manpower");
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-slate-300 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                    >
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <FeatureIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-sm">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 2: // Engineering Services
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Engineering Disciplines:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {currentService.disciplines.map((discipline, index) => {
                  const DisciplineIcon = getIconForItem(
                    discipline,
                    "engineering"
                  );
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-slate-300 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                    >
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <DisciplineIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-sm">{discipline}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 3: // Procurement Services
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Our Procurement Practices:
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {currentService.practices.map((practice, index) => {
                  const PracticeIcon = getIconForItem(practice, "procurement");
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-slate-300 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                    >
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5`}
                      >
                        <PracticeIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm leading-relaxed">
                        {practice}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-emerald-300 font-semibold text-center text-sm">
                {currentService.capabilities}
              </p>
            </div>
          </div>
        );

      case 4: // Technical Inspection
        return (
          <div className="space-y-8">
            {/* Workforce Capability */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Our Workforce Capability:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {currentService.workforce.map((item, index) => {
                  const WorkforceIcon = getIconForItem(item, "inspection");
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-slate-300 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                    >
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <WorkforceIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testing Sections */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Non-Destructive Testing
                </h3>
                <div className="space-y-2">
                  {currentService.testing.nondestructive.map((test, index) => {
                    const TestIcon = getIconForItem(test, "inspection");
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-slate-300 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                      >
                        <div
                          className={`p-1.5 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <TestIcon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm">{test}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Quality Assurance/Control
                </h3>
                <div className="space-y-2">
                  {currentService.testing.quality.map((item, index) => {
                    const QualityIcon = getIconForItem(item, "inspection");
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-slate-300 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                      >
                        <div
                          className={`p-1.5 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <QualityIcon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Additional Inspection Sections */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Facility Inspections
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {currentService.inspections.facility.map((item, index) => {
                    const FacilityIcon = getIconForItem(item, "inspection");
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-slate-300 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                      >
                        <div
                          className={`p-1.5 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <FacilityIcon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Risk Management
                  </h3>
                  <div className="space-y-2">
                    {currentService.inspections.risk.map((item, index) => {
                      const RiskIcon = getIconForItem(item, "inspection");
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-slate-300 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                        >
                          <div
                            className={`p-1.5 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300`}
                          >
                            <RiskIcon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-sm">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Project Management
                  </h3>
                  <div className="space-y-2">
                    {currentService.inspections.project.map((item, index) => {
                      const ProjectIcon = getIconForItem(item, "inspection");
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-slate-300 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                        >
                          <div
                            className={`p-1.5 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300`}
                          >
                            <ProjectIcon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-sm">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Statutory Inspection
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentService.inspections.statutory.map((item, index) => {
                    const StatutoryIcon = getIconForItem(item, "inspection");
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-slate-300 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                      >
                        <div
                          className={`p-1.5 rounded-lg bg-gradient-to-r ${currentService.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <StatutoryIcon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Render paragraph content for RIGHT side
  const renderParagraphContent = () => {
    switch (currentService.id) {
      case 1: // Technical Manpower
        return (
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              {currentService.description}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              {currentService.fullDescription}
            </p>
          </div>
        );

      case 2: // Engineering Services
        return (
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed">
              {currentService.description}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mt-4">
              {currentService.fullDescription}
            </p>
          </div>
        );

      case 3: // Procurement Services
        return (
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              {currentService.description}
            </p>
            <div className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
              {currentService.fullDescription}
            </div>
          </div>
        );

      case 4: // Technical Inspection
        return (
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              {currentService.description}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {currentService.fullDescription}
            </p>

            {/* Partner Section */}
            <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">
                Our Partner
              </h3>
              <p className="text-purple-300 font-semibold mb-2">
                {currentService.partner.name}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {currentService.partner.description}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 -left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${
              -mousePosition.y * 0.02
            }px)`,
          }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-18 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-orange-200 backdrop-blur-sm px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-400"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Our Services
          </motion.span>
        </div>
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-5xl xl:text-5xl font-bold text-white mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Oil & Gas
            </span>
            <br />
            Solutions
          </h1>

          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            World-class technical services, manpower supply, and inspection
            solutions for the global oil and gas industry.
          </p>
        </div>

        {/* Main Services Showcase */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-32">
          {/* Left Column - Categorized Content */}
          <div className="space-y-8">
            {/* Service Navigation */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeService
                          ? "bg-white scale-125"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-400 text-sm">
                  {activeService + 1} / {services.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevService}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5 text-white group-hover:text-blue-400" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white group-hover:text-blue-400" />
                  ) : (
                    <Play className="w-5 h-5 text-white group-hover:text-blue-400" />
                  )}
                </button>
                <button
                  onClick={nextService}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <ChevronRight className="w-5 h-5 text-white group-hover:text-blue-400" />
                </button>
              </div>
            </div>

            {/* Service Header */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentService.color} shadow-2xl shadow-current/20`}
              >
                <IconComponent className="w-8 h-8 text-black" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {currentService.title}
                </h2>
              </div>
            </div>

            {/* Categorized Content with Grid Layout and Icons */}
            <div className="max-h-[500px] overflow-y-auto pr-4 beautiful-scrollbar">
              {renderCategorizedContent()}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6 border-t border-white/10">
              <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Request Service
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Column - Paragraph Content with Visual Background */}
          <div className="relative">
            <div
              className={`relative h-full min-h-[600px] rounded-3xl bg-gradient-to-br ${currentService.bgGradient} border border-white/10 backdrop-blur-sm overflow-hidden`}
            >
              {/* Background Visual Elements */}
              <div className="absolute inset-0">
                {/* Background Image/Emoji */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="text-9xl absolute top-10 right-10">
                    {currentService.image}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float"></div>
                <div
                  className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float"
                  style={{ animationDelay: "4s" }}
                ></div>
              </div>

              {/* Paragraph Content Overlay - Occupies 90% */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className=" backdrop-blur-sm rounded-2xl p-8 w-full h-[90%] overflow-y-auto beautiful-scrollbar">
                  {renderParagraphContent()}
                </div>
              </div>

              {/* Stats at Bottom */}
            </div>
          </div>
        </div>

{/* Enhanced CTA Section with Masked Background Image */}
<div className="text-center">
  <div className="relative rounded-3xl p-12  overflow-hidden bg-slate-900/90 backdrop-blur-sm">
    {/* Background Image with Masking */}
    <div className="absolute inset-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`
        }}
      ></div>
      
      {/* Dark Overlay to mask image with background color */}
      <div className="absolute inset-0 bg-slate-900/95 mix-blend-multiply"></div>
      
      {/* Additional gradient for better blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800/95"></div>

      {/* Subtle animated elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 mb-8 shadow-2xl shadow-orange-500/25"
      >
        <Zap className="w-5 h-5 text-white" />
        <span className="text-white font-semibold text-sm uppercase tracking-wider">Get Started Today</span>
      </motion.div>

      {/* Main Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Ready to Partner with{" "}
        <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
          Deepdrill?
        </span>
      </h2>

      {/* Description */}
      <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
      Join <span className="text-amber-300 font-semibold">100+ industry leaders</span> who trust 
          Deepdrill for cutting-edge solutions and unparalleled expertise in the oil and gas sector.
      </p>

      {/* Stats */}

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Calendar className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Schedule Consultation</span>
          <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 px-12 py-4 border border-white/30 text-white rounded-2xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
        >
          <Users className="w-5 h-5" />
          <span>Contact Our Team</span>
        </motion.button>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 pt-8 border-t border-white/20">
        <p className="text-slate-400 text-sm mb-6">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {[
              { icon: ShieldCheck, text: "ISO 9001 Certified", color: "text-green-400" },
              { icon: Award, text: "Award Winning", color: "text-yellow-400" },
              { icon: Globe, text: "Global Network", color: "text-blue-400" },
              { icon: Zap, text: "24/7 Support", color: "text-orange-400" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-center gap-3 text-slate-300">
                  <IconComponent className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  </div>
</div>
</div>

      {/* Add custom animations and beautiful scrollbar */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { 
            background-position: 0% 50%;
            filter: hue-rotate(0deg);
          }
          50% { 
            background-position: 100% 50%;
            filter: hue-rotate(10deg);
          }
        }
        
        @keyframes float-3d {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% { 
            transform: translateY(-20px) rotate(120deg) scale(1.1);
          }
          66% { 
            transform: translateY(10px) rotate(240deg) scale(0.9);
          }
        }
        
        @keyframes laser-beam {
          0% { 
            transform: translateX(-100%);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10%, 90% { 
            opacity: 1;
          }
          50% { 
            transform: translateY(-100px) translateX(20px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
        }
        
        @keyframes gradient-x {
          0% { 
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
          100% { 
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        .animate-float-3d {
          animation: float-3d 6s ease-in-out infinite;
        }
        
        .animate-laser-beam {
          animation: laser-beam 3s linear infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Beautiful Scrollbar Design */
        .beautiful-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .beautiful-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          margin: 4px;
        }
        .beautiful-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.2)
          );
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        .beautiful-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.3)
          );
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
        .beautiful-scrollbar::-webkit-scrollbar-thumb:active {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.4)
          );
        }

        /* Firefox Scrollbar */
        .beautiful-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default ServiceSection;
