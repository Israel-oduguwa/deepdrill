// components/Services.tsx
"use client";


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
//   Factory,
//   ClipboardCheck,
//   Truck
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
//     <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
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

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }} />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={stagger}
//           className="max-w-3xl text-center mx-auto"
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
//             className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent"
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
//             className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed"
//           >
//             Select a service category to see how Deepdrill delivers reliable value—on time and in real time.
//           </motion.p>
//         </motion.div>

//         {/* Enhanced Tabs */}
//         <div className="flex lg:flex-row flex-col items-center lg:justify-between">
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12 lg:mt-30">
//           <div className="grid gap-6  lg:grid-cols-[400px_1fr]">
//             {/* Vertical Tab List - Optimized */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <TabsList
//                 className={cn(
//                   "flex lg:flex-col gap-3 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70",
//                   "rounded-2xl p-4 border border-white/50 shadow-xl shadow-slate-100/50 w-full lg:mt-40"
//                 )}
//               >
//                 {Object.entries(servicesData).map(([key, service]) => (
//                   <TabsTrigger
//                     key={key}
//                     value={key}
//                     className={cn(
//                       "group relative w-full rounded-xl p-4 text-left transition-all duration-500",
//                       "data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-orange-100",
//                       "data-[state=active]:scale-[1.02]",
//                       "hover:bg-white/60 hover:scale-[1.02]",
//                       "flex items-end gap-3 min-h-[80px]"
//                     )}
//                   >
//                     <motion.div
//                       className={cn(
//                         "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r flex-shrink-0",
//                         service.color,
//                         "group-data-[state=active]:shadow-lg"
//                       )}
//                       whileHover={{ rotate: 5, scale: 1.1 }}
//                     >
//                       <service.icon className="h-5 w-5 text-white" />
//                     </motion.div>
//                     <div className="flex-1 min-w-0">
//                       <div className="text-sm font-semibold text-slate-900 group-data-[state=active]:text-slate-900 leading-tight">
//                         {service.title}
//                       </div>
//                       <div className="text-xs text-slate-500 mt-1 group-data-[state=active]:text-slate-600 leading-relaxed">
//                         {service.description}
//                       </div>
//                     </div>
//                     <motion.div
//                       className="opacity-0 group-data-[state=active]:opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 "
//                       animate={{ x: [0, 3, 0] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       <ArrowRight className="h-4 w-4 text-orange-500" />
//                     </motion.div>
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </motion.div>


//             {/* Enhanced Panels */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="min-h-[600px]"
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
//                       className="grid gap-8 lg:grid-cols-2"
//                     >
//                       {/* Main Service Card */}
//                       <motion.div
//                         className="rounded-3xl overflow-hidden border border-white/50 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-100/50 group"
//                         whileHover={{ y: -5 }}
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
//                               <service.icon className="h-24 w-24 text-white/30" />
//                             </motion.div>
//                           </div>
//                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                          
//                           {/* Service Badge */}
//                           <motion.div
//                             className="absolute top-6 left-6"
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.8, duration: 0.6 }}
//                           >
//                             <div className={cn(
//                               "px-4 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-sm",
//                               "bg-gradient-to-r", service.color
//                             )}>
//                               {service.title}
//                             </div>
//                           </motion.div>
//                         </div>
//                         <div className="p-8">
//                           <h3 className="text-2xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                             {service.title} Services
//                           </h3>
//                           <p className="mt-4 text-slate-700 leading-relaxed text-lg">
//                             Deepdrill delivers comprehensive {service.title.toLowerCase()} solutions with real-time coordination and quality assurance.
//                           </p>
                          
//                           <motion.ul 
//                             className="mt-6 grid gap-3 text-slate-700"
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
//                                     "flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r",
//                                     service.color
//                                   )}
//                                   whileHover={{ scale: 1.2, rotate: 90 }}
//                                   transition={{ duration: 0.3 }}
//                                 >
//                                   <CheckCircle className="h-3 w-3 text-white" />
//                                 </motion.div>
//                                 <span className="text-sm group-hover:text-slate-900 transition-colors">{item}</span>
//                               </motion.li>
//                             ))}
//                           </motion.ul>

//                           <motion.div 
//                             className="mt-8 flex flex-wrap gap-4"
//                             variants={fadeInUp}
//                           >
//                             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                               <Link
//                                 href="#contact"
//                                 className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
//                               >
//                                 Request Service
//                                 <ArrowRight className="h-4 w-4" />
//                               </Link>
//                             </motion.div>
                          
//                           </motion.div>
//                         </div>
//                       </motion.div>

//                       {/* Side Info Cards */}
//                       <motion.div
//                         className="space-y-6"
//                         variants={stagger}
//                       >
//                         {/* Why Choose Card */}
//                         <motion.div
//                           variants={fadeInUp}
//                           className="rounded-3xl border border-white/50 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl"
//                         >
//                           <h4 className="text-lg font-bold text-white mb-6">
//                             Why Choose Deepdrill?
//                           </h4>
//                           <div className="space-y-4">
//                             {service.whyItems.map((item, index) => (
//                               <motion.div
//                                 key={item.label}
//                                 className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
//                                 whileHover={{ x: 5 }}
//                               >
//                                 <div className={cn(
//                                   "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r",
//                                   service.color
//                                 )}>
//                                   <item.icon className="h-5 w-5 text-white" />
//                                 </div>
//                                 <div className="flex-1">
//                                   <div className="text-sm font-semibold text-white">{item.label}</div>
//                                   <div className="text-sm text-slate-300">{item.value}</div>
//                                 </div>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </motion.div>

//                         {/* Capabilities Card */}
//                         <motion.div
//                           variants={fadeInUp}
//                           className="rounded-3xl border border-white/50 bg-white/80 backdrop-blur-sm p-6 shadow-lg"
//                         >
//                           <div className="flex items-center gap-2 mb-3">
//                             <Target className="h-4 w-4 text-orange-600" />
//                             <div className="text-sm font-semibold uppercase tracking-wide text-orange-600">
//                               Key Capabilities
//                             </div>
//                           </div>
//                           <p className="text-slate-700 text-sm leading-relaxed mb-4">
//                             {service.typicalRoles}
//                           </p>
//                           <motion.div 
//                             className="flex flex-wrap gap-2"
//                             animate={{ opacity: [0.7, 1, 0.7] }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           >
//                             {service.features.slice(0, 4).map((feature) => (
//                               <span
//                                 key={feature}
//                                 className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 backdrop-blur-sm"
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
//         </div>
//       </div>
//     </section>
//   );
// }

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
//   Settings
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


//   // Premium services data
//   const services = [
//     {
//       id: 1,
//       icon: Cpu,
//       title: "Digital Transformation",
//       description: "Revolutionize your operations with cutting-edge digital solutions that drive efficiency and innovation.",
//       features: ["AI Integration", "Process Automation", "Cloud Migration", "Data Analytics"],
//       gradient: "from-purple-500 to-pink-500",
//       bgGradient: "from-purple-500/5 to-pink-500/5",
//       image: "🔄",
//       stats: { efficiency: "+45%", roi: "3.2x", clients: "250+" }
//     },
//     {
//       id: 2,
//       icon: Shield,
//       title: "Cybersecurity Solutions",
//       description: "Enterprise-grade security infrastructure protecting your most valuable digital assets.",
//       features: ["Threat Detection", "Compliance Management", "Encryption", "24/7 Monitoring"],
//       gradient: "from-blue-500 to-cyan-500",
//       bgGradient: "from-blue-500/5 to-cyan-500/5",
//       image: "🛡️",
//       stats: { efficiency: "+99.9%", roi: "4.1x", clients: "180+" }
//     },
//     {
//       id: 3,
//       icon: BarChart3,
//       title: "Data Intelligence",
//       description: "Transform raw data into actionable insights with advanced analytics and machine learning.",
//       features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reporting", "ML Models"],
//       gradient: "from-emerald-500 to-teal-500",
//       bgGradient: "from-emerald-500/5 to-teal-500/5",
//       image: "📊",
//       stats: { efficiency: "+65%", roi: "5.8x", clients: "320+" }
//     },
//     {
//       id: 4,
//       icon: Cloud,
//       title: "Cloud Infrastructure",
//       description: "Scalable, secure cloud solutions designed for enterprise performance and reliability.",
//       features: ["Multi-cloud Strategy", "DevOps Integration", "Disaster Recovery", "Cost Optimization"],
//       gradient: "from-orange-500 to-red-500",
//       bgGradient: "from-orange-500/5 to-red-500/5",
//       image: "☁️",
//       stats: { efficiency: "+52%", roi: "3.9x", clients: "410+" }
//     },
//     {
//       id: 5,
//       icon: Globe,
//       title: "Global Expansion",
//       description: "Strategic guidance and execution for seamless international market entry and growth.",
//       features: ["Market Research", "Localization", "Compliance", "Partnership Development"],
//       gradient: "from-indigo-500 to-purple-500",
//       bgGradient: "from-indigo-500/5 to-purple-500/5",
//       image: "🌍",
//       stats: { efficiency: "+38%", roi: "2.8x", clients: "150+" }
//     },
//     {
//       id: 6,
//       icon: Settings,
//       title: "Managed Services",
//       description: "Comprehensive IT management allowing you to focus on core business objectives.",
//       features: ["24/7 Support", "Performance Monitoring", "Security Updates", "Strategic Planning"],
//       gradient: "from-slate-600 to-slate-800",
//       bgGradient: "from-slate-600/5 to-slate-800/5",
//       image: "⚙️",
//       stats: { efficiency: "+48%", roi: "3.5x", clients: "290+" }
//     }
//   ];



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
//       className="relative min-h-screen  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         {/* Gradient Orbs */}
//         <div 
//           className="absolute top-1/4 -left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000"
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
//         <div className="absolute inset-0" style={{
//           backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }} />
//       </div>
//       </div>

//       <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         {/* Header Section */}
//         <div className="text-center mb-20">
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
          
//           <h1 className="text-5xl md:text-7xl lg:text-5xl xl:text-5xl font-bold text-white mb-6">
            
//               Transformative
//             Solutions for
//             <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"> Modern Enterprise</span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
//             Delivering cutting-edge services that drive innovation, efficiency, and growth for forward-thinking organizations worldwide.
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

//               {/* Features Grid */}
//               <div className="grid grid-cols-2 gap-4">
//                 {currentService.features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-3 text-slate-300">
//                     <div className="w-2 h-2 bg-current rounded-full"></div>
//                     <span className="font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
//                 {Object.entries(currentService.stats).map(([key, value]) => (
//                   <div key={key} className="text-center">
//                     <div className="text-2xl font-bold text-white mb-1">{value}</div>
//                     <div className="text-sm text-slate-400 capitalize">{key}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex gap-4 pt-6">
//                 <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
//                   Start Project
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
//                   <div className="text-8xl mb-6">{currentService.image}</div>
//                   <div className="text-white text-2xl font-semibold">Interactive Demo</div>
//                   <div className="text-slate-400 mt-2">Experience the power</div>
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
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
//               Join hundreds of successful companies that have revolutionized their operations with our premium services.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
//                 Schedule Consultation
//               </button>
//               <button className="px-12 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300">
//                 View Our Work
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



import React, { useState, useRef, useEffect } from 'react';
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
  Eye
} from 'lucide-react';

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  };

  // Updated services data based on your structure
  const servicesData = {
    manpower: {
      title: "Technical Manpower",
      description: "Skilled professionals for all project phases",
      icon: Users,
      color: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/5 to-amber-500/5",
      image: "👥",
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
      bgGradient: "from-blue-500/5 to-cyan-500/5",
      image: "⚙️",
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
      bgGradient: "from-emerald-500/5 to-green-500/5",
      image: "🚚",
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
      bgGradient: "from-violet-500/5 to-purple-500/5",
      image: "🔍",
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

  // Convert servicesData object to array for easier mapping
  const services = Object.values(servicesData).map((service, index) => ({
    id: index + 1,
    ...service,
    gradient: service.color,
    stats: { 
      expertise: "15+ Years", 
      projects: "500+", 
      clients: "100+" 
    }
  }));

  // Auto-rotate services
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);

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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[activeService];
  const IconComponent = currentService.icon;

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
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
          }}
        ></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
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
          
          <h1 className="text-5xl md:text-7xl lg:text-5xl xl:text-5xl font-bold text-white mb-6">
            Technical Excellence
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"> Industrial Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Comprehensive technical services and manpower solutions for industrial projects, ensuring quality, efficiency, and reliability.
          </p>
        </div>

        {/* Main Services Showcase */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-32">
          {/* Left Column - Service Details */}
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
                          ? 'bg-white scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
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

            {/* Service Content */}
            <div className="space-y-6">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentService.gradient} shadow-2xl shadow-current/20`}>
                <IconComponent className="w-8 h-8 text-black" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {currentService.title}
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                {currentService.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Why Choose Us Section */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Our Service</h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentService.whyItems.map((item, index) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 text-slate-300">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${currentService.gradient}`}>
                          <ItemIcon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white text-sm">{item.value}</div>
                          <div className="text-xs text-slate-400">{item.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Typical Roles */}
              <div className="pt-4">
                <p className="text-slate-300 text-sm">
                  <span className="font-semibold text-white">Typical Roles: </span>
                  {currentService.typicalRoles}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-6">
                <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  Request Manpower
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300">
                  View Case Study
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Showcase */}
          <div className="relative">
            <div className={`relative h-full min-h-[600px] rounded-3xl bg-gradient-to-br ${currentService.bgGradient} border border-white/10 backdrop-blur-sm overflow-hidden`}>
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="text-9xl absolute top-10 right-10">{currentService.image}</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float"></div>
              <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 animate-float" style={{animationDelay: '4s'}}></div>
              
              {/* Content Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">{currentService.image}</div>
                  <div className="text-white text-2xl font-semibold">Industrial Excellence</div>
                  <div className="text-slate-400 mt-2">Proven track record</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Technical Operations?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of industrial companies that have enhanced their operations with our technical services and manpower solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Schedule Consultation
              </button>
              <button className="px-12 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300">
                View Our Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServiceSection;