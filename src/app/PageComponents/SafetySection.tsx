"use client"

// import React, { useState, useEffect } from 'react';
// import { 
//   Shield, 
//   AlertTriangle, 
//   Users, 
//   Award, 
//   TrendingUp, 
//   CheckCircle,
//   Target,
//   BarChart3,
//   Clock,
//   Heart,
//   Zap,
//   Eye,
//   Lock
// } from 'lucide-react';

// const SafetySection = () => {
//   const [activeTab, setActiveTab] = useState('principles');
//   const [isVisible, setIsVisible] = useState(false);

//   // Safety statistics
//   const stats = [
//     { 
//       value: 99.7, 
//       suffix: '%', 
//       label: 'Safety Compliance Rate', 
//       icon: CheckCircle,
//       color: 'text-emerald-500',
//       bgColor: 'bg-emerald-50'
//     },
//     { 
//       value: 120, 
//       suffix: 'K+', 
//       label: 'Training Hours Completed', 
//       icon: Users,
//       color: 'text-blue-500',
//       bgColor: 'bg-blue-50'
//     },
//     { 
//       value: 5, 
//       suffix: 'M+', 
//       label: 'Incident-Free Hours', 
//       icon: Clock,
//       color: 'text-amber-500',
//       bgColor: 'bg-amber-50'
//     },
//     { 
//       value: 25, 
//       suffix: '', 
//       label: 'Safety Awards Received', 
//       icon: Award,
//       color: 'text-purple-500',
//       bgColor: 'bg-purple-50'
//     }
//   ];

//   // Safety principles
//   const principles = [
//     {
//       icon: Shield,
//       title: "Prevention First",
//       description: "Proactive identification and mitigation of potential hazards before they become incidents.",
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: Target,
//       title: "Zero Harm Goal",
//       description: "Our unwavering commitment to ensuring no harm comes to our people, communities, or environment.",
//       gradient: "from-emerald-500 to-green-500"
//     },
//     {
//       icon: Users,
//       title: "Shared Responsibility",
//       description: "Safety is everyone's responsibility, from leadership to frontline operations.",
//       gradient: "from-amber-500 to-orange-500"
//     },
//     {
//       icon: BarChart3,
//       title: "Continuous Improvement",
//       description: "Regular assessment and enhancement of our safety systems and practices.",
//       gradient: "from-purple-500 to-pink-500"
//     }
//   ];

//   // Safety programs
//   const programs = [
//     {
//       title: "Behavior-Based Safety",
//       description: "Empowering employees to identify and correct unsafe behaviors before incidents occur.",
//       icon: Eye
//     },
//     {
//       title: "Process Safety Management",
//       description: "Comprehensive systems to prevent releases of hazardous substances.",
//       icon: Zap
//     },
//     {
//       title: "Emergency Response",
//       description: "State-of-the-art emergency preparedness and response capabilities.",
//       icon: AlertTriangle
//     },
//     {
//       title: "Health & Wellness",
//       description: "Programs focused on both physical and psychological wellbeing of our workforce.",
//       icon: Heart
//     }
//   ];

//   // Performance metrics
//   const metrics = [
//     {
//       value: "0.18",
//       label: "Total Recordable Injury Rate",
//       trend: "↓ 12%",
//       trendColor: "text-emerald-600",
//       bgColor: "bg-emerald-50",
//       icon: AlertTriangle,
//       iconColor: "text-amber-500",
//       comparison: "Industry Avg: 0.42"
//     },
//     {
//       value: "0.02",
//       label: "Lost Time Injury Rate",
//       trend: "↓ 8%",
//       trendColor: "text-emerald-600",
//       bgColor: "bg-red-50",
//       icon: Heart,
//       iconColor: "text-red-500",
//       comparison: "Industry Avg: 0.08"
//     },
//     {
//       value: "98.7%",
//       label: "Safety Training Completion",
//       trend: "↑ 5%",
//       trendColor: "text-emerald-600",
//       bgColor: "bg-blue-50",
//       icon: CheckCircle,
//       iconColor: "text-emerald-500",
//       comparison: "Target: 95%"
//     }
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section id="safety" className="relative overflow-hidden">
      
//       {/* Hero Section */}
//       <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 my-8">
//             <Award className="w-5 h-5 text-blue-400" />
//             <span className="text-blue-300 text-sm font-semibold">Industry Leader in Safety</span>
//           </div>

//           {/* Main Title */}
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             Safety Is Our{' '}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Foundation
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
//             Protecting our people, communities, and environment through unwavering commitment 
//             to the highest safety standards in the industry.
//           </p>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div 
//                   key={index}
//                   className={`${stat.bgColor} backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
//                     isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//                   }`}
//                   style={{ transitionDelay: `${index * 100}ms` }}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className={`p-3 rounded-xl ${stat.bgColor}`}>
//                       <IconComponent className={`w-8 h-8 ${stat.color}`} />
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-white">
//                         {stat.value}
//                         <span className="text-lg">{stat.suffix}</span>
//                       </div>
//                       <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="relative bg-slate-50 py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Tabs Navigation */}
//           <div className="flex flex-wrap justify-center gap-4 mb-16">
//             {[
//               { id: 'principles', label: 'Safety Principles', icon: Shield },
//               { id: 'programs', label: 'Safety Programs', icon: Target },
//               { id: 'performance', label: 'Performance', icon: TrendingUp }
//             ].map((tab) => {
//               const IconComponent = tab.icon;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? 'bg-white text-blue-600 shadow-2xl shadow-blue-500/10 border border-blue-100'
//                       : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
//                   }`}
//                 >
//                   <IconComponent className="w-5 h-5" />
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Tab Content */}
//           <div className="transition-all duration-500">
//             {/* Principles Tab */}
//             {activeTab === 'principles' && (
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {principles.map((principle, index) => {
//                   const IconComponent = principle.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-300/30 transition-all duration-500 transform hover:-translate-y-2"
//                     >
//                       <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${principle.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                         <IconComponent className="w-8 h-8 text-white" />
//                       </div>
//                       <h3 className="text-2xl font-bold text-slate-800 mb-4">{principle.title}</h3>
//                       <p className="text-slate-600 text-lg leading-relaxed">{principle.description}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Programs Tab */}
//             {activeTab === 'programs' && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {programs.map((program, index) => {
//                   const IconComponent = program.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
//                     >
//                       <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full"></div>
//                       <div className="relative z-10">
//                         <div className="flex items-center gap-4 mb-6">
//                           <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
//                             <IconComponent className="w-8 h-8 text-blue-600" />
//                           </div>
//                           <span className="text-4xl font-bold text-slate-300">0{index + 1}</span>
//                         </div>
//                         <h3 className="text-2xl font-bold text-slate-800 mb-4">{program.title}</h3>
//                         <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>
//                         <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
//                           Learn More
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Performance Tab */}
//             {activeTab === 'performance' && (
//               <div className="space-y-12">
//                 <div className="text-center max-w-3xl mx-auto">
//                   <h2 className="text-4xl font-bold text-slate-800 mb-4">Safety Performance Metrics</h2>
//                   <p className="text-xl text-slate-600">
//                     Transparent reporting of our safety performance and continuous improvement journey
//                   </p>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   {metrics.map((metric, index) => {
//                     const IconComponent = metric.icon;
//                     return (
//                       <div
//                         key={index}
//                         className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
//                       >
//                         <div className="flex justify-between items-start mb-6">
//                           <div className={`p-3 rounded-xl ${metric.bgColor}`}>
//                             <IconComponent className={`w-8 h-8 ${metric.iconColor}`} />
//                           </div>
//                           <span className={`px-3 py-1 rounded-full text-sm font-semibold ${metric.trendColor} bg-emerald-50`}>
//                             {metric.trend}
//                           </span>
//                         </div>
//                         <div className="text-4xl font-bold text-slate-800 mb-2">{metric.value}</div>
//                         <div className="text-lg font-semibold text-slate-700 mb-2">{metric.label}</div>
//                         <div className="text-slate-500 text-sm">{metric.comparison}</div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {/* Additional Performance Chart */}
//                 <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
//                   <div className="flex items-center gap-4 mb-8">
//                     <TrendingUp className="w-8 h-8 text-blue-600" />
//                     <h3 className="text-2xl font-bold text-slate-800">Safety Performance Trend</h3>
//                   </div>
//                   <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="text-slate-500 mb-2">Visual representation of safety metrics</div>
//                       <div className="text-sm text-slate-400">(Chart visualization would be implemented here)</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Commitment Section */}
//       <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-24 overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//           }}></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Text Content */}
//             <div className="space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold text-white">
//                 Our Safety <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Commitment</span>
//               </h2>
              
//               <p className="text-xl text-slate-300 leading-relaxed">
//                 We believe that all incidents are preventable and that zero harm is an achievable goal. 
//                 Our safety culture is built on leadership commitment, employee engagement, and continuous 
//                 improvement through learning and innovation.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   "Executive safety leadership and visibility",
//                   "Comprehensive risk assessment and management",
//                   "Investment in safety technology and innovation",
//                   "Transparent safety performance reporting"
//                 ].map((point, index) => (
//                   <div key={index} className="flex items-center gap-4 text-slate-300">
//                     <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
//                       <CheckCircle className="w-5 h-5 text-emerald-400" />
//                     </div>
//                     <span className="text-lg">{point}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Visual Element */}
//             <div className="flex justify-center">
//               <div className="relative">
//                 {/* Animated Circle */}
//                 <div className="relative w-80 h-80">
//                   <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full animate-ping"></div>
//                   <div className="absolute inset-4 border-4 border-blue-400/30 rounded-full animate-pulse"></div>
//                   <div className="absolute inset-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30">
//                     <div className="text-center text-white">
//                       <Shield className="w-16 h-16 mx-auto mb-4" />
//                       <div className="text-2xl font-bold">Zero Harm</div>
//                       <div className="text-blue-100">Our Promise</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SafetySection;

import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import { 
  Shield,
  ShieldCheck,
  Users,
  Heart,
  Globe,
  FileText,
  Target,
  Award,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  TrendingUp,
  ArrowRight,
  Zap,
  Factory,
  HardHat,
  Eye,
  Clock,
  Star
} from 'lucide-react';

const SafetySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const safetyStats = [
    { number: "100%", label: "Client Compliance", icon: CheckCircle, color: "from-green-500 to-emerald-500" },
    { number: "0", label: "Major Incidents", icon: ShieldCheck, color: "from-blue-500 to-cyan-500" },
    { number: "API RP75", label: "Compliant", icon: BookOpen, color: "from-orange-500 to-amber-500" },
    { number: "24/7", label: "Safety Monitoring", icon: Clock, color: "from-purple-500 to-violet-500" }
  ];

  const safetyPrinciples = [
    {
      icon: Shield,
      title: "Safety First Culture",
      description: "Every employee embraces safety as a personal responsibility at all project levels.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
      description: "Protecting the health of our personnel and surrounding communities.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Environmental Stewardship",
      description: "Sustainable practices that minimize environmental impact.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: FileText,
      title: "Documented Procedures",
      description: "Comprehensive SEMP based on API RP75 guidelines.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section
      id="safety" 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Safety Icons */}
        <div className="absolute top-20 left-10 opacity-10">
          <Shield className="w-24 h-24 text-green-400 animate-float" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Heart className="w-20 h-20 text-blue-400 animate-float" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute top-40 right-20 opacity-10">
          <Globe className="w-16 h-16 text-emerald-400 animate-float" style={{animationDelay: '4s'}} />
        </div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span
            variants={fadeInUp}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold uppercase tracking-wider text-green-600 mb-6"
          >
            <motion.span 
              className="h-2 w-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Our Commitment
          </motion.span>
          
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-white mb-6"
          >
            Environment, Health
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> & Safety</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            Protecting our people, communities, and environment through comprehensive 
            safety management and unwavering commitment.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="space-y-8"
          >
            {/* Deepdrill and HSE Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl shadow-green-500/20">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Deepdrill and HSE</h2>
                  <p className="text-green-400 font-semibold">Safety as a Core Value</p>
                </div>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Deepdrill identifies that safety and health of personnel and community is a core 
                determination in ensuring the success of any project.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Hence, we have developed a Safety and Environmental Management Programme (SEMP) 
                which is primarily documentation, based on guidelines provided in API RP75. The 
                focus is to provide written documentation, procedures and practices in an effort 
                to raise the awareness level of workers concerning safety and environmental issues 
                related to the operation of onshore/offshore facilities.
              </p>
            </motion.div>

            {/* Personal Commitment Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-3xl p-8 border border-green-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Personal Safety Commitment</h3>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Each Deepdrill employee has a personal goal of safety at each level of service 
                in both field and shop projects.
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="text-white font-semibold">
                  Deepdrill is 100% compliant with the client's safety requirements. Safety awareness is a priority on each job.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements & Stats */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="space-y-8"
          >
            {/* Safety Statistics */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-6"
            >
              {safetyStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
                  >
                    <div className={`inline-flex p-2 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* Safety Principles */}
            <motion.div
              variants={fadeInUp}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Safety Principles</h3>
              <div className="space-y-6">
                {safetyPrinciples.map((principle, index) => {
                  const IconComponent = principle.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${principle.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{principle.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* SEMP Highlight */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Safety & Environmental Management Programme</h3>
                  <p className="text-blue-400 text-sm">API RP75 Compliant</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Comprehensive documentation system designed to enhance safety awareness and 
                environmental protection across all operational facilities.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Committed to Zero Harm
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with Deepdrill for projects where safety, health, and environmental 
              protection are never compromised.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Download Safety Manual
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-12 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all duration-300">
                Request Safety Audit
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SafetySection;