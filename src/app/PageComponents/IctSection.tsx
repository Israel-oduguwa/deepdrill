// components/ICT-Section.tsx
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { cn } from "@/lib/utils";
// import { 
//   Satellite, 
//   Wifi, 
//   Cpu, 
//   Network, 
//   Server, 
//   Shield,
//   Zap,
//   Cloud,
//   Database,
//   Router,
//   Cable,
//   Monitor,
//   Smartphone,
//   Building,
//   Globe,
//   ArrowRight,
//   CheckCircle,
//   Award,
//   Users
// } from "lucide-react";

// const tabs = [
//   {
//     id: "telecom",
//     label: "Our ICT Solutions",
//     subtitle: "Telecom Services",
//     icon: Satellite,
//     image: "https://images.unsplash.com/photo-1581094794321-8410e49a6c2d?q=80&w=1920&auto=format&fit=crop",
//     content: {
//       description: "Deepdrill along with her partners carry out every aspect of wireless telecoms network infrastructure delivery. From acquisition, planning and design through to deployment and optimisation, we project network roll-outs by utilizing resources to guarantee unsurpassed quality and stability.",
//       services: [
//         {
//           category: "Satellite Connectivity",
//           items: ["VSAT Connectivity - Stabilized VSAT", "Mobile Satellite Connectivity", "Offshore & Marine Communications"]
//         },
//         {
//           category: "Wireless Connectivity",
//           items: ["Digital Microwave Radio", "Broadband Services", "Rignet - Onshore/Offshore"]
//         },
//         {
//           category: "Connectivity & Transmission Services",
//           items: ["Systems Integration - Data/Voice/Video", "Unified Communication/IP Migration"]
//         }
//       ],
//       features: ["Global Coverage", "24/7 Monitoring", "Military-grade Security", "Low Latency"]
//     }
//   },
//   {
//     id: "media-converters",
//     label: "Media Converters",
//     subtitle: "Network Infrastructure",
//     icon: Cpu,
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop",
//     content: {
//       description: "Comprehensive media conversion solutions for seamless network integration and optimal performance across all your infrastructure needs.",
//       categories: [
//         {
//           title: "Media Converters",
//           items: ["Satellite Connectivity", "Stand-Alone Media Converters", "Point System Chassis Platform", "The ION Platform", "PCI Media Converters"]
//         },
//         {
//           title: "Ethernet Switches",
//           items: ["Managed Switches", "Unmanaged Switches", "Managed PoE Switches", "Industrial Switches"]
//         },
//         {
//           title: "Small Form Factor Pluggables",
//           items: ["Simplex LC", "Duplex LC", "CWDM", "10G XFP CWDM", "10G SFP+ Modules"]
//         },
//         {
//           title: "Industrial Ethernet",
//           items: ["Switches", "Media Converters", "Device Servers"]
//         }
//       ]
//     }
//   },
//   {
//     id: "network-optimization",
//     label: "Network Optimization",
//     subtitle: "Performance Solutions",
//     icon: Zap,
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop",
//     content: {
//       description: "Advanced network optimization solutions designed to maximize performance, security, and efficiency across all enterprise environments.",
//       solutions: [
//         {
//           category: "Service Provider Solutions",
//           icon: Globe,
//           items: ["Business Services", "Mobile Backhaul", "Fiber Conservation (CWDM)"]
//         },
//         {
//           category: "Security Networking",
//           icon: Shield,
//           items: ["Analog Video", "IP Video", "Access Control"]
//         },
//         {
//           category: "Enterprise",
//           icon: Building,
//           items: ["Education", "Retail", "Data Center", "Corporate"]
//         },
//         {
//           category: "Industrial Networking",
//           icon: Cpu,
//           items: ["Factory and Fully Hardened", "Intelligent Transportation Systems", "Power over Ethernet", "Coarse Wave Division Multiplexing (CWDM)", "Industrial Mini"]
//         }
//       ]
//     }
//   },
//   {
//     id: "partners",
//     label: "Our ICT Partner",
//     subtitle: "Strategic Alliance",
//     icon: Users,
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop",
//     content: {
//       description: "Deepdrill is proud to represent Transition Networks as an authorized distributor and partner for the reselling and provision of networking solutions in Nigeria and the West African sub region.",
//       partnership: {
//         title: "Transition Networks Partnership",
//         benefits: [
//           "Authorized distributor and partner",
//           "Pre-sale support and post-sale technical assistance",
//           "Expertise from global industry leaders",
//           "Comprehensive networking solutions"
//         ],
//         solutions: [
//           "VSAT Connectivity - Stabilized VSAT",
//           "Mobile Satellite Connectivity", 
//           "Offshore & Marine Communications"
//         ],
//         expertise: "Transition Networks offers the ability to affordably integrate the benefits of fiber optics into any data network – in any application – in any environment. Offering support for multiple protocols, any interface, and a multitude of hardware platforms, Transition Networks portfolio gives the power to deliver and manage any network traffic reliably over fiber."
//       }
//     }
//   }
// ];

// export default function ICTSection() {
//   const [activeTab, setActiveTab] = useState(tabs[0].id);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const activeTabData = tabs.find(tab => tab.id === activeTab);
//   const IconComponent = activeTabData?.icon || Satellite;

//   return (
//     <section 
//       id="ict" 
//       ref={sectionRef}
//       className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-amber-50/30" />
//       <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-float-slow" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float-medium" />
      
//       {/* Grid Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 px-4 py-2 mb-6">
//             <Zap className="h-5 w-5 text-amber-600" />
//             <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
//               ICT Solutions
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
//             Advanced <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">ICT Infrastructure</span>
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             Cutting-edge telecommunications and networking solutions powering the future of oil & gas operations with reliability and innovation.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
//           {/* Tabs Navigation - Left Side */}
//           <div className="lg:col-span-4">
//             <div className="sticky top-24 space-y-2 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-2xl shadow-black/5">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
//                   <Network className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-slate-900 text-lg">Solutions</h3>
//                   <p className="text-slate-500 text-sm">Choose a category</p>
//                 </div>
//               </div>

//               {tabs.map((tab) => {
//                 const TabIcon = tab.icon;
//                 const isActive = activeTab === tab.id;
                
//                 return (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={cn(
//                       "w-full text-left p-4 rounded-2xl transition-all duration-500 group",
//                       "hover:scale-105 hover:shadow-lg",
//                       isActive
//                         ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl"
//                         : "bg-white/50 text-slate-700 hover:bg-white hover:border-amber-200/50 border border-transparent"
//                     )}
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className={cn(
//                         "p-3 rounded-xl transition-all duration-500",
//                         isActive 
//                           ? "bg-white/20" 
//                           : "bg-amber-500/10 group-hover:bg-amber-500/20"
//                       )}>
//                         <TabIcon className={cn(
//                           "h-6 w-6 transition-all duration-500",
//                           isActive ? "text-white" : "text-amber-600 group-hover:text-amber-700"
//                         )} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="font-semibold text-base mb-1">{tab.label}</div>
//                         <div className={cn(
//                           "text-sm transition-all duration-500",
//                           isActive ? "text-white/90" : "text-slate-500 group-hover:text-slate-700"
//                         )}>
//                           {tab.subtitle}
//                         </div>
//                       </div>
//                       <ArrowRight className={cn(
//                         "h-5 w-5 transition-all duration-500 flex-shrink-0",
//                         isActive ? "text-white translate-x-1" : "text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1"
//                       )} />
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Tab Content - Right Side */}
//           <div className="lg:col-span-8">
//             <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl shadow-black/10 border border-slate-200/60">
//               {/* Background Image with Overlay */}
//               <div className="absolute inset-0">
//                 <img
//                   src={activeTabData?.image}
//                   alt={activeTabData?.label}
//                   className={cn(
//                     "w-full h-full object-cover transition-all duration-1000",
//                     imageLoaded ? "opacity-20 scale-100" : "opacity-0 scale-105"
//                   )}
//                   onLoad={() => setImageLoaded(true)}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/80" />
//               </div>

//               {/* Content */}
//               <div className="relative z-10 p-8 lg:p-12">
//                 {/* Header */}
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
//                     <IconComponent className="h-7 w-7 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl lg:text-3xl font-black text-slate-900">
//                       {activeTabData?.label}
//                     </h3>
//                     <p className="text-lg text-amber-600 font-semibold">
//                       {activeTabData?.subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-lg text-slate-700 mb-12 leading-relaxed max-w-4xl">
//                   {activeTabData?.content.description}
//                 </p>

//                 {/* Dynamic Content Based on Tab */}
//                 <div className="space-y-12">
//                   {activeTab === "telecom" && (
//                     <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//                       {activeTabData?.content.services?.map((service, index) => (
//                         <div
//                           key={service.category}
//                           className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 hover:border-amber-200/60 transition-all duration-500 hover:scale-105 hover:shadow-lg"
//                           style={{ animationDelay: `${index * 100}ms` }}
//                         >
//                           <div className="flex items-center gap-3 mb-4">
//                             <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
//                               <Server className="h-5 w-5 text-white" />
//                             </div>
//                             <h4 className="font-bold text-slate-900 text-lg">{service.category}</h4>
//                           </div>
//                           <ul className="space-y-3">
//                             {service.items.map((item, itemIndex) => (
//                               <li key={item} className="flex items-center gap-3 text-slate-700">
//                                 <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
//                                 <span className="text-sm">{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {activeTab === "media-converters" && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       {activeTabData?.content.categories?.map((category, index) => (
//                         <div
//                           key={category.title}
//                           className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 hover:border-blue-200/60 transition-all duration-500 hover:scale-105"
//                         >
//                           <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-3">
//                             <Cpu className="h-5 w-5 text-blue-500" />
//                             {category.title}
//                           </h4>
//                           <ul className="space-y-2">
//                             {category.items.map((item) => (
//                               <li key={item} className="flex items-center gap-3 text-slate-700 py-2 border-b border-slate-100 last:border-b-0">
//                                 <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
//                                 <span className="text-sm">{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {activeTab === "network-optimization" && (
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                       {activeTabData?.content.solutions?.map((solution, index) => {
//                         const SolutionIcon = solution.icon;
//                         return (
//                           <div
//                             key={solution.category}
//                             className="group p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm border border-slate-200/60 hover:border-purple-200/60 transition-all duration-500 hover:scale-105 hover:shadow-lg"
//                           >
//                             <div className="flex items-center gap-3 mb-4">
//                               <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
//                                 <SolutionIcon className="h-6 w-6 text-white" />
//                               </div>
//                               <h4 className="font-bold text-slate-900 text-lg">{solution.category}</h4>
//                             </div>
//                             <ul className="space-y-3">
//                               {solution.items.map((item) => (
//                                 <li key={item} className="flex items-center gap-3 text-slate-700">
//                                   <Zap className="h-4 w-4 text-purple-500 flex-shrink-0" />
//                                   <span className="text-sm">{item}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}

//                   {activeTab === "partners" && (
//                     <div className="space-y-8">
//                       <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/60">
//                         <h4 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
//                           <Award className="h-6 w-6 text-amber-600" />
//                           {activeTabData?.content.partnership?.title}
//                         </h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                           <div>
//                             <h5 className="font-semibold text-slate-800 mb-3">Partnership Benefits</h5>
//                             <ul className="space-y-2">
//                               {activeTabData?.content.partnership?.benefits.map((benefit, index) => (
//                                 <li key={benefit} className="flex items-center gap-3 text-slate-700">
//                                   <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
//                                   <span className="text-sm">{benefit}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                           <div>
//                             <h5 className="font-semibold text-slate-800 mb-3">Solutions Offered</h5>
//                             <ul className="space-y-2">
//                               {activeTabData?.content.partnership?.solutions.map((solution, index) => (
//                                 <li key={solution} className="flex items-center gap-3 text-slate-700">
//                                   <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
//                                   <span className="text-sm">{solution}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60">
//                         <h5 className="font-semibold text-slate-800 mb-3">Expertise & Capabilities</h5>
//                         <p className="text-slate-700 leading-relaxed">
//                           {activeTabData?.content.partnership?.expertise}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* CTA Button */}
//                 <div className="mt-12 pt-8 border-t border-slate-200/60">
//                   <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-lg font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
//                     Request ICT Consultation
//                     <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

// }


// components/ICT.tsx
"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Satellite, 
  Wifi, 
  Network, 
  Users,
  ArrowRight,
  Server,
  Cable,
  Cpu,
  Shield,
  Globe,
  Cloud,
  Router,
  Database,
  Settings,
  CheckCircle,
  Target,
  Zap,
  BarChart3,
  CircuitBoard,
  Cctv,
  Radio,
  HardDrive
} from "lucide-react";

export default function ICT() {
  const [activeTab, setActiveTab] = React.useState("solutions");

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

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const ictData = {
    solutions: {
      title: "ICT Solutions",
      description: "Advanced telecom infrastructure",
      icon: Satellite,
      color: "from-cyan-500 to-blue-600",
      gradient: "bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10",
      border: "border-cyan-200/50",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80",
      mainDescription: "Deepdrill along with her partners carry out every aspect of wireless telecoms network infrastructure delivery. From acquisition, planning and design through to deployment and optimisation.",
      sections: [
        {
          title: "Satellite Communications",
          icon: Satellite,
          items: [
            "VSAT Connectivity - Stabilized VSAT",
            "Mobile Satellite Connectivity",
            "Offshore & Marine Communications",
            "Global Coverage Solutions"
          ]
        },
        {
          title: "Wireless Networks",
          icon: Wifi,
          items: [
            "Digital Microwave Radio",
            "Broadband Services",
            "Rignet - Onshore/Offshore",
            "5G Ready Infrastructure"
          ]
        },
        {
          title: "Integrated Systems",
          icon: Network,
          items: [
            "Systems Integration - Data/Voice/Video",
            "Unified Communication/IP Migration",
            "Enterprise Network Solutions",
            "Cloud Integration Services"
          ]
        }
      ],
      stats: [
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "24/7", label: "Support Coverage" },
        { value: "50+", label: "Countries Served" }
      ]
    },
    converters: {
      title: "Media Converters",
      description: "Networking hardware solutions",
      icon: CircuitBoard,
      color: "from-purple-500 to-indigo-600",
      gradient: "bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-pink-500/10",
      border: "border-purple-200/50",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80",
      mainDescription: "Comprehensive range of media converters and networking components for enterprise-grade infrastructure deployment and optimization.",
      sections: [
        {
          title: "Converter Systems",
          icon: HardDrive,
          items: [
            "Stand-Alone Media Converters",
            "Point System Chassis Platform",
            "The ION Platform",
            "PCI Media Converters"
          ]
        },
        {
          title: "Switching Solutions",
          icon: Router,
          items: [
            "Managed & Unmanaged Switches",
            "Managed PoE Switches",
            "Industrial Switches",
            "Carrier Ethernet"
          ]
        },
        {
          title: "Fiber Optics",
          icon: Cable,
          items: [
            "SFP/SFP+ Modules",
            "CWDM Solutions",
            "10G XFP/X2 Modules",
            "Multi-vendor Compatibility"
          ]
        }
      ],
      stats: [
        { value: "10G+", label: "Data Speeds" },
        { value: "100+", label: "Device Models" },
        { value: "5ms", label: "Latency Target" }
      ]
    },
    optimization: {
      title: "Network Optimization",
      description: "Performance enhancement",
      icon: BarChart3,
      color: "from-emerald-500 to-green-600",
      gradient: "bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10",
      border: "border-emerald-200/50",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      mainDescription: "Advanced network optimization solutions designed to maximize performance, security, and efficiency across diverse enterprise environments.",
      sections: [
        {
          title: "Service Provider",
          icon: Cloud,
          items: [
            "Business Services Optimization",
            "Mobile Backhaul Solutions",
            "Fiber Conservation (CWDM)",
            "Security Networking"
          ]
        },
        {
          title: "Enterprise Solutions",
          icon: Server,
          items: [
            "Education Infrastructure",
            "Retail Networks",
            "Data Center Optimization",
            "Corporate Networks"
          ]
        },
        {
          title: "Industrial Networks",
          icon: Cctv,
          items: [
            "Factory Hardened Systems",
            "Transportation Networks",
            "Power over Ethernet",
            "Industrial Mini Solutions"
          ]
        }
      ],
      stats: [
        { value: "40%", label: "Performance Gain" },
        { value: "99.99%", label: "Reliability" },
        { value: "360°", label: "Monitoring" }
      ]
    },
    partner: {
      title: "ICT Partnership",
      description: "Strategic technology alliance",
      icon: Users,
      color: "from-orange-500 to-amber-600",
      gradient: "bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-red-500/10",
      border: "border-orange-200/50",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      mainDescription: "Deepdrill is proud to represent Transition Networks as an authorized distributor and partner for networking solutions in Nigeria and West Africa.",
      sections: [
        {
          title: "Partner Solutions",
          icon: Shield,
          items: [
            "VSAT Connectivity - Stabilized VSAT",
            "Mobile Satellite Connectivity",
            "Offshore & Marine Communications"
          ]
        },
        {
          title: "Partnership Benefits",
          icon: Zap,
          items: [
            "Authorized Distribution Rights",
            "Pre-sale Technical Support",
            "Post-sale Technical Assistance",
            "Expert Backend Support"
          ]
        },
        {
          title: "Technology Portfolio",
          icon: Database,
          items: [
            "Fiber Optics Integration",
            "Multi-protocol Support",
            "Any Interface Compatibility",
            "Multiple Hardware Platforms"
          ]
        }
      ],
      stats: [
        { value: "15+", label: "Years Experience" },
        { value: "1000+", label: "Deployments" },
        { value: "24/7", label: "Expert Support" }
      ]
    }
  };

  return (
    <section id="ict" className="relative py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Header with Tech Flair */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-6"
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-widest font-accent">
              Technology Division
            </span>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-serif"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced ICT
            </span>
            <br />
            <span className="text-white">Infrastructure</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Enterprise-grade technology solutions powering the future of connectivity, 
            communication, and digital transformation across industries.
          </motion.p>
        </motion.div>

        {/* Unique Tab Navigation - Circular Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-3 md:gap-4 bg-transparent p-0">
              {Object.entries(ictData).map(([key, service]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={cn(
                    "group relative rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-5 transition-all duration-500 backdrop-blur-md border",
                    "data-[state=active]:bg-white/10 data-[state=active]:border-cyan-400/50 data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/25",
                    "bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-400/30",
                    "flex flex-col items-center gap-3 min-w-[140px] md:min-w-[160px]"
                  )}
                >
                  <motion.div
                    className={cn(
                      "flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-gradient-to-r",
                      service.color,
                      "group-data-[state=active]:shadow-lg group-data-[state=active]:scale-110"
                    )}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </motion.div>
                  <div className="text-center">
                    <div className="text-sm md:text-base font-semibold text-white group-data-[state=active]:text-cyan-300 leading-tight">
                      {service.title}
                    </div>
                    <div className="text-xs text-slate-400 group-data-[state=active]:text-cyan-200 mt-1 hidden md:block">
                      {service.description}
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content Area - Completely Different Layout */}
            <div className="mt-12">
              <AnimatePresence mode="wait">
                {Object.entries(ictData).map(([key, service]) => (
                  <TabsContent value={key} className="m-0 space-y-12" key={key}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Hero Section with Stats */}
                      <div className={cn(
                        "rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl border",
                        service.gradient,
                        service.border
                      )}>
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                          {/* Content */}
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 font-serif">
                                {service.title} Solutions
                              </h3>
                              <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-sans">
                                {service.mainDescription}
                              </p>
                            </div>
                            
                            {/* Stats */}
                            <div className="flex gap-6 md:gap-8">
                              {service.stats.map((stat, index) => (
                                <motion.div
                                  key={stat.label}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.2 }}
                                  className="text-center"
                                >
                                  <div className={cn(
                                    "text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                                    service.color
                                  )}>
                                    {stat.value}
                                  </div>
                                  <div className="text-sm text-slate-300 mt-1 font-accent">
                                    {stat.label}
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            <motion.div 
                              className="flex flex-wrap gap-4"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                  href="#contact"
                                  className={cn(
                                    "inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 font-accent",
                                    service.color
                                  )}
                                >
                                  <Radio className="h-4 w-4" />
                                  Request Consultation
                                </Link>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                  href="#solutions"
                                  className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300 font-accent"
                                >
                                  <Settings className="h-4 w-4" />
                                  Technical Details
                                </Link>
                              </motion.div>
                            </motion.div>
                          </div>

                          {/* Image */}
                          <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="relative rounded-2xl overflow-hidden aspect-video">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className={cn(
                                  "px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20",
                                  "text-white text-sm font-semibold font-accent"
                                )}>
                                  Enterprise {service.title} Deployment
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Services Grid - Hexagonal Design */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.sections.map((section, index) => (
                          <motion.div
                            key={section.title}
                            variants={cardVariants}
                            initial="initial"
                            whileInView="animate"
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                              "rounded-2xl p-6 backdrop-blur-md border transition-all duration-500 hover:scale-105",
                              "bg-white/5 border-white/10 hover:border-cyan-400/30",
                              "group"
                            )}
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <div className={cn(
                                "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r",
                                service.color
                              )}>
                                <section.icon className="h-6 w-6 text-white" />
                              </div>
                              <h4 className="text-lg font-semibold text-white font-serif">
                                {section.title}
                              </h4>
                            </div>
                            <ul className="space-y-3">
                              {section.items.map((item, itemIndex) => (
                                <motion.li 
                                  key={item}
                                  className="flex items-center gap-3 text-slate-300 group-hover:text-slate-200 transition-colors"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                                  viewport={{ once: true }}
                                >
                                  <div className={cn(
                                    "flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity",
                                    service.color
                                  )}>
                                    <CheckCircle className="h-3 w-3 text-white" />
                                  </div>
                                  <span className="text-sm font-sans">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}