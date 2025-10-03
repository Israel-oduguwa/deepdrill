// components/About.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BoltIcon,
  Building,
  ChartBarIcon,
  MapPin,
  ShieldCheckIcon,
} from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-amber-50/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-3xl" />
 <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30"
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
      {/* Decorative SVG Elements */}
      <div className="absolute left-1/4 top-10 opacity-10">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="text-blue-600"
        >
          <path
            d="M50 10 L90 50 L50 90 L10 50 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute right-1/4 bottom-20 opacity-10">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="text-orange-500"
        >
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative ">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl text-center mx-auto mb-16 md:mb-20"
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
                      About Deepdrill
                    </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent"
          >
            Doing business as{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Deepdrill Oilfield
            </span>{" "}
            Services Ltd
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            We deliver first-class upstream support with a real-time
            mindset—combining engineering excellence, disciplined project
            management, and uncompromising safety.
          </motion.p>
        </motion.div>

        {/* Main Content Grid - Image takes half page, content on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Image spanning half page */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-full min-h-[500px] lg:min-h-[600px] rounded-r-3xl lg:rounded-r-[2.5rem] overflow-hidden group">
              {/* Main Image */}
              <img
                src="https://plus.unsplash.com/premium_photo-1661932816149-291a447e3022?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Deepdrill team at work in a plant environment"
                className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-900/10 to-transparent" />

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500/50"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32">
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-orange-500/50"></div>
              </div>

              {/* Mission Card - Positioned on image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-4/5"
              >
                <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl shadow-slate-900/20 p-6 hover:shadow-3xl hover:shadow-slate-900/30 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                      <BoltIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Powered by a strong sense of commitment to excellence, our
                    mission is to be the best— to attain leadership by providing
                    excellent technical support and services to our clients in{" "}
                    <span className="font-semibold text-orange-600">
                      real time
                    </span>
                    .
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="lg:col-span-6 space-y-6"
          >
            <div className="max-w-2xl space-y-6">
              {/* Introduction Section */}
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 md:p-8 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Introduction
                  </h3>
                </div>

                <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-6">
                  Deepdrill Oilfield Services Ltd,{" "}
                  <span className="font-semibold text-orange-600">
                    RC-422177
                  </span>
                  , is a wholly indigenous oil services company organized under
                  the laws of the Federal Republic of Nigeria. We provide
                  first-class services to major operators in the upstream sector
                  of the oil and gas industry.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50/50 border border-blue-200/50 p-4 md:p-5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="h-5 w-5 text-blue-600" />
                      <div className="text-sm font-semibold uppercase tracking-wide text-blue-600/80">
                        Head Office
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-900 leading-relaxed">
                      9, Adebayo Ogunrombi Close, Ogudu GRA, Lagos, Nigeria
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/50 p-4 md:p-5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      <div className="text-sm font-semibold uppercase tracking-wide text-amber-600/80">
                        Overseas Office
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-900 leading-relaxed">
                      100 Glenborough Drive, Suite #444, Houston, TX 77067, USA
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Credibility strip */}
              <motion.div
                variants={fadeInUp}
                className="grid gap-4 sm:grid-cols-3"
              >
                {[
                  {
                    label: "Real-time Delivery",
                    sub: "Operational mindset",
                    icon: BoltIcon,
                    color: "blue",
                  },
                  {
                    label: "Project Management",
                    sub: "Experienced PM professionals",
                    icon: ChartBarIcon,
                    color: "cyan",
                  },
                  {
                    label: "Engineering Quality",
                    sub: "End-to-end QA/QC",
                    icon: ShieldCheckIcon,
                    color: "amber",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={cn(
                      "rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-5 shadow-lg",
                      "hover:shadow-xl transition-all duration-500 group cursor-pointer",
                      `hover:border-${item.color}-200/80`
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl transform transition-all duration-500",
                          `bg-gradient-to-br from-${item.color}-500 to-${item.color}-600`,
                          "group-hover:scale-110 group-hover:shadow-lg"
                        )}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-slate-800">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-600 mt-1">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Expertise Section */}
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 shadow-2xl hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Primary Areas of Expertise
                  </h3>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2 mb-6">
                  {[
                    "Technical Manpower Services",
                    "Engineering and Fabrication Services",
                    "Procurement Services",
                    "Technical Inspection Services",
                    "Quality Assurance / Quality Control",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-slate-200 group"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-white" />
                      </div>
                      <span className="text-sm group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Link
                      href="#services"
                      className=" inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Explore Services
                    </Link>
                  </motion.div>
                
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-500"></div>
            <div className="h-px w-8 bg-orange-500"></div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Deepdrill is fast gaining ground and recognition in the industry,
            with qualified and experienced project management professionals and
            engineering consultants who ensure quality services across all
            aspects of our clients' project requirements in{" "}
            <span className="font-semibold text-orange-600">real time</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
