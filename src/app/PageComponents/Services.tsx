// components/Services.tsx
// "use client";

// import * as React from "react";
// import Image from "next/image";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Bolt, 
//   Wrench, 
//   ShoppingCart, 
//   Eye,
//   ArrowRight,
//   Users,
//   BarChart3,
//   ShieldCheck,
//   Clock,
//   Globe,
//   Zap,
//   CheckCircle,
//   Target,
//   Cog,
//   Truck,
//   ClipboardCheck
// } from "lucide-react";

// export default function Services() {
//   const [activeTab, setActiveTab] = React.useState("manpower");

//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
//   };

//   const stagger = {
//     animate: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const tabVariants = {
//     initial: { opacity: 0, x: 20 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -20 }
//   };

//   const servicesData = {
//     manpower: {
//       title: "Technical Manpower",
//       description: "Skilled professionals for all project phases",
//       icon: Users,
//       color: "from-orange-500 to-amber-500",
//       image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
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
//       image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
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
//       image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
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
//       image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
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

//   return (
//     <section id="services" className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-blue-50/30" />
      
//       {/* Floating Blobs */}
//       <motion.div
//         className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-20"
//         animate={{
//           x: [0, 40, 0],
//           y: [0, -30, 0],
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
      
//       <motion.div
//         className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
//         animate={{
//           x: [0, -40, 0],
//           y: [0, 30, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1,
//         }}
//       />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header - Reduced Margins */}
//         <motion.div
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={stagger}
//           className="max-w-3xl text-center mx-auto mb-12"
//         >
//           <motion.span
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
          
//           <motion.h2
//             variants={fadeInUp}
//             className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent"
//           >
//             Quality Staff &{" "}
//             <motion.span 
//               className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent"
//               animate={{ backgroundPosition: ["0%", "100%"] }}
//               transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
//               style={{ backgroundSize: "200% 200%" }}
//             >
//               Services
//             </motion.span>
//           </motion.h2>
          
//           <motion.p
//             variants={fadeInUp}
//             className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed"
//           >
//             Select a service category to see how Deepdrill delivers reliable value—on time and in real time.
//           </motion.p>
//         </motion.div>

//         {/* Enhanced Tabs - Optimized Spacing */}
        // <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12 lg:mt-50">
        //   <div className="grid gap-6  lg:grid-cols-[500px_1fr]">
        //     {/* Vertical Tab List - Optimized */}
        //     <motion.div
        //       initial={{ opacity: 0, x: -30 }}
        //       whileInView={{ opacity: 1, x: 0 }}
        //       transition={{ duration: 0.6 }}
        //       viewport={{ once: true }}
        //     >
        //       <TabsList
        //         className={cn(
        //           "flex lg:flex-col gap-3 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70",
        //           "rounded-2xl p-4 border border-white/50 shadow-xl shadow-slate-100/50 w-3/4"
        //         )}
        //       >
        //         {Object.entries(servicesData).map(([key, service]) => (
        //           <TabsTrigger
        //             key={key}
        //             value={key}
        //             className={cn(
        //               "group relative w-full rounded-xl p-4 text-left transition-all duration-500",
        //               "data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-orange-100",
        //               "data-[state=active]:scale-[1.02]",
        //               "hover:bg-white/60 hover:scale-[1.02]",
        //               "flex items-end gap-3 min-h-[80px]"
        //             )}
        //           >
        //             <motion.div
        //               className={cn(
        //                 "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r flex-shrink-0",
        //                 service.color,
        //                 "group-data-[state=active]:shadow-lg"
        //               )}
        //               whileHover={{ rotate: 5, scale: 1.1 }}
        //             >
        //               <service.icon className="h-5 w-5 text-white" />
        //             </motion.div>
        //             <div className="flex-1 min-w-0">
        //               <div className="text-sm font-semibold text-slate-900 group-data-[state=active]:text-slate-900 leading-tight">
        //                 {service.title}
        //               </div>
        //               <div className="text-xs text-slate-500 mt-1 group-data-[state=active]:text-slate-600 leading-relaxed">
        //                 {service.description}
        //               </div>
        //             </div>
        //             <motion.div
        //               className="opacity-0 group-data-[state=active]:opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 "
        //               animate={{ x: [0, 3, 0] }}
        //               transition={{ duration: 1.5, repeat: Infinity }}
        //             >
        //               <ArrowRight className="h-4 w-4 text-orange-500" />
        //             </motion.div>
        //           </TabsTrigger>
        //         ))}
        //       </TabsList>
        //     </motion.div>

//             {/* RIGHT SIDE - Original Design with Optimized Spacing */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="min-h-[550px]"
//             >
//               <AnimatePresence mode="wait">
//                 {Object.entries(servicesData).map(([key, service]) => (
//                   <TabsContent value={key} className="m-0" key={key}>
//                     <motion.div
//                       variants={tabVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       transition={{ duration: 0.3 }}
//                       className="grid gap-6 lg:grid-cols-2"
//                     >
//                       {/* Main Service Card - Original Design */}
//                       <motion.div
//                         className="rounded-3xl overflow-hidden border border-white/50 bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-100/50 group"
//                         whileHover={{ y: -2 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="relative aspect-[16/10] overflow-hidden">
//                           <motion.img
//                             src={service.image}
//                             alt={`${service.title} services`}
//                             className="absolute inset-0 h-full w-full object-cover"
//                             loading="lazy"
//                             initial={{ scale: 1.1 }}
//                             whileInView={{ scale: 1 }}
//                             transition={{ duration: 1.2, ease: "easeOut" }}
//                           />
//                           <motion.div
//                             className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-slate-900/15 to-transparent"
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ delay: 0.5, duration: 0.8 }}
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <motion.div
//                               animate={{ 
//                                 rotate: [0, 5, 0, -5, 0],
//                                 scale: [1, 1.05, 1]
//                               }}
//                               transition={{ duration: 6, repeat: Infinity }}
//                             >
//                               <service.icon className="h-20 w-20 text-white/30" />
//                             </motion.div>
//                           </div>
//                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                          
//                           {/* Service Badge */}
//                           <motion.div
//                             className="absolute top-4 left-4"
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.8, duration: 0.6 }}
//                           >
//                             <div className={cn(
//                               "px-3 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-sm",
//                               "bg-gradient-to-r", service.color
//                             )}>
//                               {service.title}
//                             </div>
//                           </motion.div>
//                         </div>
//                         <div className="p-6">
//                           <h3 className="text-xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                             {service.title} Services
//                           </h3>
//                           <p className="mt-3 text-slate-700 leading-relaxed">
//                             Deepdrill delivers comprehensive {service.title.toLowerCase()} solutions with real-time coordination and quality assurance.
//                           </p>
                          
//                           <motion.ul 
//                             className="mt-4 grid gap-2 text-slate-700"
//                             variants={stagger}
//                           >
//                             {service.features.map((item, index) => (
//                               <motion.li 
//                                 key={item} 
//                                 className="flex items-center gap-3 group"
//                                 variants={fadeInUp}
//                               >
//                                 <motion.div
//                                   className={cn(
//                                     "flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r",
//                                     service.color
//                                   )}
//                                   whileHover={{ scale: 1.2, rotate: 90 }}
//                                   transition={{ duration: 0.3 }}
//                                 >
//                                   <CheckCircle className="h-2.5 w-2.5 text-white" />
//                                 </motion.div>
//                                 <span className="text-sm group-hover:text-slate-900 transition-colors">{item}</span>
//                               </motion.li>
//                             ))}
//                           </motion.ul>

//                           <motion.div 
//                             className="mt-6 flex flex-wrap gap-3"
//                             variants={fadeInUp}
//                           >
//                             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                               <Link
//                                 href="#contact"
//                                 className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
//                               >
//                                 Request Service
//                                 <ArrowRight className="h-3 w-3" />
//                               </Link>
//                             </motion.div>
//                             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                               <Link
//                                 href="#about"
//                                 className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-white hover:shadow-lg transition-all duration-300"
//                               >
//                                 Learn More
//                               </Link>
//                             </motion.div>
//                           </motion.div>
//                         </div>
//                       </motion.div>

//                       {/* Side Info Cards - Original Design */}
//                       <motion.div
//                         className="space-y-4"
//                         variants={stagger}
//                       >
//                         {/* Why Choose Card */}
//                         <motion.div
//                           variants={fadeInUp}
//                           className="rounded-2xl border border-white/50 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl"
//                         >
//                           <h4 className="text-base font-bold text-white mb-4">
//                             Why Choose Deepdrill?
//                           </h4>
//                           <div className="space-y-3">
//                             {service.whyItems.map((item, index) => (
//                               <motion.div
//                                 key={item.label}
//                                 className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
//                                 whileHover={{ x: 3 }}
//                               >
//                                 <div className={cn(
//                                   "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r flex-shrink-0",
//                                   service.color
//                                 )}>
//                                   <item.icon className="h-4 w-4 text-white" />
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                   <div className="text-sm font-semibold text-white">{item.label}</div>
//                                   <div className="text-xs text-slate-300 mt-0.5">{item.value}</div>
//                                 </div>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </motion.div>

//                         {/* Capabilities Card */}
//                         <motion.div
//                           variants={fadeInUp}
//                           className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50/50 p-5 shadow-lg"
//                         >
//                           <div className="flex items-center gap-2 mb-3">
//                             <Target className="h-3 w-3 text-orange-600" />
//                             <div className="text-xs font-semibold uppercase tracking-wide text-orange-600">
//                               Key Capabilities
//                             </div>
//                           </div>
//                           <p className="text-slate-700 text-xs leading-relaxed mb-3">
//                             {service.typicalRoles}
//                           </p>
//                           <motion.div 
//                             className="flex flex-wrap gap-1.5"
//                             animate={{ opacity: [0.7, 1, 0.7] }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           >
//                             {service.features.slice(0, 4).map((feature) => (
//                               <span
//                                 key={feature}
//                                 className="inline-flex items-center rounded-full bg-white/80 px-2 py-1 text-xs font-medium text-orange-600 backdrop-blur-sm"
//                               >
//                                 {feature.split(' ')[0]}
//                               </span>
//                             ))}
//                           </motion.div>
//                         </motion.div>
//                       </motion.div>
//                     </motion.div>
//                   </TabsContent>
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           </div>
//         </Tabs>
//       </div>
//     </section>
//   );
// }


"use client";

import * as React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bolt, 
  Wrench, 
  ShoppingCart, 
  Eye,
  ArrowRight,
  Users,
  BarChart3,
  ShieldCheck,
  Clock,
  Globe,
  Zap,
  CheckCircle,
  Target,
  Cog,
  Factory,
  ClipboardCheck,
  Truck
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = React.useState("manpower");

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const tabVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const servicesData = {
    manpower: {
      title: "Technical Manpower",
      description: "Skilled professionals for all project phases",
      icon: Users,
      color: "from-orange-500 to-amber-500",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      features: [
        "Planning & Scheduling",
        "Cost Control & Coordination",
        "Procurement & Material Control",
        "QA/QC & Construction Management",
        "Feasibility Studies & Engineering",
        "Project Controls & Risk Management",
      ],
      whyItems: [
        { icon: Clock, label: "Response Time", value: "Short-notice mobilization" },
        { icon: Globe, label: "Global Coverage", value: "Local & expatriate professionals" },
        { icon: ShieldCheck, label: "Compliance", value: "HSE-first mindset & documentation" },
        { icon: Zap, label: "Delivery", value: "Real-time coordination" },
      ],
      typicalRoles: "Drilling engineers, wellsite supervisors, QA/QC engineers, planners, cost controllers, inspectors, construction managers, materials coordinators, and more."
    },
    engineering: {
      title: "Engineering Services",
      description: "End-to-end engineering solutions",
      icon: Cog,
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      features: [
        "Conceptual & Detailed Design",
        "FEED Studies & Analysis",
        "Process Engineering",
        "Mechanical & Piping Design",
        "Civil & Structural Engineering",
        "Electrical & Instrumentation",
      ],
      whyItems: [
        { icon: BarChart3, label: "Expertise", value: "Seasoned engineering professionals" },
        { icon: ShieldCheck, label: "Quality", value: "ISO-compliant deliverables" },
        { icon: Clock, label: "Efficiency", value: "Streamlined engineering processes" },
        { icon: Zap, label: "Innovation", value: "Cutting-edge engineering solutions" },
      ],
      typicalRoles: "Process engineers, mechanical engineers, civil engineers, electrical engineers, instrumentation engineers, pipeline engineers, and more."
    },
    procurement: {
      title: "Procurement Services",
      description: "Strategic sourcing & supply chain",
      icon: Truck,
      color: "from-emerald-500 to-green-500",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      features: [
        "Strategic Sourcing",
        "Vendor Management",
        "Supply Chain Optimization",
        "Logistics & Transportation",
        "Inventory Management",
        "Procurement Analytics",
      ],
      whyItems: [
        { icon: ShoppingCart, label: "Global Network", value: "Established vendor relationships" },
        { icon: Clock, label: "Lead Time", value: "Optimized delivery schedules" },
        { icon: ShieldCheck, label: "Quality", value: "Rigorous vendor qualification" },
        { icon: Zap, label: "Cost Savings", value: "Competitive pricing strategies" },
      ],
      typicalRoles: "Procurement specialists, supply chain managers, logistics coordinators, vendor managers, procurement analysts, and more."
    },
    inspection: {
      title: "Technical Inspection",
      description: "Quality assurance & compliance",
      icon: ClipboardCheck,
      color: "from-violet-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      features: [
        "NDT & Quality Control",
        "Welding Inspection",
        "Coating & Corrosion Control",
        "Material Verification",
        "Dimensional Control",
        "Documentation & Reporting",
      ],
      whyItems: [
        { icon: Eye, label: "Thoroughness", value: "Comprehensive inspection protocols" },
        { icon: ShieldCheck, label: "Standards", value: "International code compliance" },
        { icon: Clock, label: "Efficiency", value: "Minimal project disruption" },
        { icon: Zap, label: "Accuracy", value: "Precision measurement tools" },
      ],
      typicalRoles: "QA/QC inspectors, NDT technicians, welding inspectors, coating inspectors, material engineers, and more."
    }
  };

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-blue-50/30" />
      
      {/* Floating Blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="max-w-3xl text-center mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600"
          >
            <motion.span 
              className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Our Services
          </motion.span>
          
          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent"
          >
            Quality Staff &{" "}
            <motion.span 
              className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Services
            </motion.span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Select a service category to see how Deepdrill delivers reliable value—on time and in real time.
          </motion.p>
        </motion.div>

        {/* Enhanced Tabs */}
        <div className="flex lg:flex-row flex-col items-center lg:justify-between">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12 lg:mt-30">
          <div className="grid gap-6  lg:grid-cols-[400px_1fr]">
            {/* Vertical Tab List - Optimized */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TabsList
                className={cn(
                  "flex lg:flex-col gap-3 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70",
                  "rounded-2xl p-4 border border-white/50 shadow-xl shadow-slate-100/50 w-full lg:mt-40"
                )}
              >
                {Object.entries(servicesData).map(([key, service]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className={cn(
                      "group relative w-full rounded-xl p-4 text-left transition-all duration-500",
                      "data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-orange-100",
                      "data-[state=active]:scale-[1.02]",
                      "hover:bg-white/60 hover:scale-[1.02]",
                      "flex items-end gap-3 min-h-[80px]"
                    )}
                  >
                    <motion.div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r flex-shrink-0",
                        service.color,
                        "group-data-[state=active]:shadow-lg"
                      )}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <service.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-900 group-data-[state=active]:text-slate-900 leading-tight">
                        {service.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 group-data-[state=active]:text-slate-600 leading-relaxed">
                        {service.description}
                      </div>
                    </div>
                    <motion.div
                      className="opacity-0 group-data-[state=active]:opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 "
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4 text-orange-500" />
                    </motion.div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>


            {/* Enhanced Panels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="min-h-[600px]"
            >
              <AnimatePresence mode="wait">
                {Object.entries(servicesData).map(([key, service]) => (
                  <TabsContent value={key} className="m-0" key={key}>
                    <motion.div
                      variants={tabVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="grid gap-8 lg:grid-cols-2"
                    >
                      {/* Main Service Card */}
                      <motion.div
                        className="rounded-3xl overflow-hidden border border-white/50 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-100/50 group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <motion.img
                            src={service.image}
                            alt={`${service.title} services`}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-slate-900/15 to-transparent"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ 
                                rotate: [0, 5, 0, -5, 0],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ duration: 6, repeat: Infinity }}
                            >
                              <service.icon className="h-24 w-24 text-white/30" />
                            </motion.div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                          
                          {/* Service Badge */}
                          <motion.div
                            className="absolute top-6 left-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                          >
                            <div className={cn(
                              "px-4 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-sm",
                              "bg-gradient-to-r", service.color
                            )}>
                              {service.title}
                            </div>
                          </motion.div>
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                            {service.title} Services
                          </h3>
                          <p className="mt-4 text-slate-700 leading-relaxed text-lg">
                            Deepdrill delivers comprehensive {service.title.toLowerCase()} solutions with real-time coordination and quality assurance.
                          </p>
                          
                          <motion.ul 
                            className="mt-6 grid gap-3 text-slate-700"
                            variants={stagger}
                          >
                            {service.features.map((item, index) => (
                              <motion.li 
                                key={item} 
                                className="flex items-center gap-3 group"
                                variants={fadeInUp}
                              >
                                <motion.div
                                  className={cn(
                                    "flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r",
                                    service.color
                                  )}
                                  whileHover={{ scale: 1.2, rotate: 90 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <CheckCircle className="h-3 w-3 text-white" />
                                </motion.div>
                                <span className="text-sm group-hover:text-slate-900 transition-colors">{item}</span>
                              </motion.li>
                            ))}
                          </motion.ul>

                          <motion.div 
                            className="mt-8 flex flex-wrap gap-4"
                            variants={fadeInUp}
                          >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
                              >
                                Request Service
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </motion.div>
                          
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Side Info Cards */}
                      <motion.div
                        className="space-y-6"
                        variants={stagger}
                      >
                        {/* Why Choose Card */}
                        <motion.div
                          variants={fadeInUp}
                          className="rounded-3xl border border-white/50 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl"
                        >
                          <h4 className="text-lg font-bold text-white mb-6">
                            Why Choose Deepdrill?
                          </h4>
                          <div className="space-y-4">
                            {service.whyItems.map((item, index) => (
                              <motion.div
                                key={item.label}
                                className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                                whileHover={{ x: 5 }}
                              >
                                <div className={cn(
                                  "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r",
                                  service.color
                                )}>
                                  <item.icon className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-white">{item.label}</div>
                                  <div className="text-sm text-slate-300">{item.value}</div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Capabilities Card */}
                        <motion.div
                          variants={fadeInUp}
                          className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-sm p-6 shadow-lg"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="h-4 w-4 text-orange-600" />
                            <div className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                              Key Capabilities
                            </div>
                          </div>
                          <p className="text-slate-700 text-sm leading-relaxed mb-4">
                            {service.typicalRoles}
                          </p>
                          <motion.div 
                            className="flex flex-wrap gap-2"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {service.features.slice(0, 4).map((feature) => (
                              <span
                                key={feature}
                                className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 backdrop-blur-sm"
                              >
                                {feature.split(' ')[0]}
                              </span>
                            ))}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </Tabs>
        </div>
      </div>
    </section>
  );
}