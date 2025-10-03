"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1722183704200-e96339975ba4?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582517378602-f109b395ce40?q=80&w=1920&auto=format&fit=crop",
];

type Props = {
  className?: string;
  intervalMs?: number;
};

export default function HeroSection({ className, intervalMs = 6000 }: Props) {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_IMAGES.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Enhanced slides with parallax effect
  const slides = useMemo(
    () =>
      HERO_IMAGES.map((src, i) => {
        const isActive = i === active;
        return (
          <div
            key={src}
            aria-hidden={!isActive}
            className={cn(
              "absolute inset-0 bg-cover bg-center will-change-transform",
              "transition-all duration-1500 ease-out",
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-110",
              prefersReducedMotion ? "" : isActive ? "dd-kenburns-active" : ""
            )}
            style={{
              backgroundImage: `url('${src}')`,
            }}
          />
        );
      }),
    [active, prefersReducedMotion]
  );

  // Floating geometric shapes for premium feel
  const FloatingShapes = () => (
    <>
      {/* Large Orange Circle */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400/10 to-orange-500/10 blur-3xl animate-float-slow" />

      {/* Blue Geometric Shape */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rotate-45 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 blur-2xl animate-float-medium" />

      {/* Small Floating Dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5 animate-float-random"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 15 + 10}s`,
          }}
        />
      ))}

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Shimmer Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-40 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 via-10% to-transparent animate-shimmer" />
      </div>
    </>
  );

  return (
    <section
      id="home"
      aria-label="Deepdrill - Premium Oil & Gas Engineering Services"
      className={cn(
        "relative isolate  min-h-screen w-full overflow-hidden",
        "bg-slate-900",
        className
      )}
    >
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0">{slides}</div>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-slate-900/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />

      {/* Animated Radial Gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent animate-pulse-slow" />
      </div>

      {/* Decorative Elements */}
      <FloatingShapes />

      {/* Premium Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Enhanced Top Gradient for Navbar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div
            className={cn(
              "max-w-4xl",
              mounted && !prefersReducedMotion ? "dd-stagger-parent" : ""
            )}
          >
            {/* Premium Animated Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 lg:px-6 px-4 py-2 lg:py-4 backdrop-blur-2xl",
                "shadow-2xl shadow-black/30 border-l-4 border-l-amber-400",
                "transform hover:scale-105 transition-all duration-500",
                mounted && !prefersReducedMotion ? "dd-pop-in" : ""
              )}
              style={{ animationDelay: "120ms" }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 animate-pulse" />
                  <div className="absolute -inset-2 rounded-full bg-amber-400/20 animate-ping" />
                </div>
                <span className="text-xs lg:text-sm font-bold uppercase tracking-widest text-white">
                  Engineering services for the oil & gas industry
                </span>
              </div>
              <div className="h-6 w-px bg-white/30" />
              <div className="flex text-xs lg:text-sm items-center gap-3 text-white/90">
                <span className="text-sm font-semibold">
                  🌍 Global Operations
                </span>
                {/* <span className="text-amber-400 font-bold">•</span> */}
                {/* <span className="text-sm font-semibold">
                  🏆 Certified Excellence
                </span> */}
              </div>
            </div>

            {/* Enhanced Main Heading with Better Mobile Responsiveness */}
            <div className="mt-6 lg:mt-12">
              <h1
                className={cn(
                  "text-5xl font-black leading-[1.05] text-white md:text-6xl lg:text-7xl xl:text-8xl",
                  "drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                )}
              >
                <span
                  className={cn(
                    "block bg-gradient-to-r from-white via-white to-amber-100 bg-clip-text text-transparent",
                    mounted && !prefersReducedMotion ? "dd-slide-up" : ""
                  )}
                  style={{ animationDelay: "200ms" }}
                >
                  Deepdrill
                </span>
                <span
                  className={cn(
                    "block text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 md:mt-6",
                    "bg-gradient-to-r from-amber-200 via-amber-100 to-orange-200 bg-clip-text text-transparent",
                    mounted && !prefersReducedMotion ? "dd-slide-up" : ""
                  )}
                  style={{ animationDelay: "320ms" }}
                >
                  Oilfield Services
                </span>
              </h1>

              {/* Enhanced Subheading */}
              <div className="mt-4 md:mt-8 max-w-3xl">
                <p
                  className={cn(
                    "text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/95",
                    "drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]",
                    mounted && !prefersReducedMotion ? "dd-fade-in-up" : ""
                  )}
                  style={{ animationDelay: "420ms" }}
                >
                  <span className="font-semibold text-amber-200">
                    Engineering excellence
                  </span>{" "}
                  and real-time technical support for the global oil & gas
                  industry. Trusted by upstream operators to deliver
                  unparalleled quality and safety.
                </p>
              </div>
            </div>

            {/* Premium CTA Buttons with Enhanced Mobile Layout */}
            <div
              className={cn(
                "mt-8 lg:mt-12 flex flex-col sm:flex-row gap-4",
                mounted && !prefersReducedMotion ? "dd-fade-in-up" : ""
              )}
              style={{ animationDelay: "520ms" }}
            >
              <Link
                href="#contact"
                className={cn(
                  "group relative inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base lg:text-lg font-bold text-white",
                  "bg-gradient-to-r from-amber-500 to-orange-500 shadow-2xl shadow-amber-500/25",
                  "hover:shadow-3xl hover:shadow-amber-500/40 transition-all duration-500",
                  "hover:scale-105 active:scale-95 border border-amber-300/30",
                  "transform-gpu overflow-hidden",
                  "w-full sm:w-auto text-center"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Partnership
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Glow Effect */}
                <div className="absolute -inset-2 rounded-2xl bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <Link
                href="#services"
                className={cn(
                  "group relative inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base lg:text-lg font-bold text-white",
                  "border border-white/25 bg-white/10 backdrop-blur-2xl shadow-2xl",
                  "hover:bg-white/15 hover:border-white/40 transition-all duration-500",
                  "hover:scale-105 active:scale-95",
                  "transform-gpu",
                  "w-full sm:w-auto text-center"
                )}
              >
                Explore Our Services
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>

            {/* Enhanced Trust Indicators with Mobile Optimization */}
            <div
              className={cn(
                "mt-8 hidden lg:mt-16 lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8",
                mounted && !prefersReducedMotion ? "dd-fade-in-up" : ""
              )}
              style={{ animationDelay: "620ms" }}
            >
              {[
                {
                  label: "24/7 Real-time Support",
                  color: "emerald",
                  icon: "🔄",
                },
                {
                  label: "HSE First • ISO Standards",
                  color: "sky",
                  icon: "🛡️",
                },
                { label: "Upstream Specialists", color: "amber", icon: "⛰️" },
                { label: "Global Operations", color: "purple", icon: "🌍" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                >
                  <div
                    className={cn(
                      "relative flex items-center justify-center w-12 h-12 rounded-xl",
                      "bg-gradient-to-br from-white/10 to-white/5",
                      "transition-transform duration-300 group-hover:scale-110"
                    )}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <div
                      className={cn(
                        "absolute -inset-1 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        item.color === "emerald" && "bg-emerald-500/20",
                        item.color === "sky" && "bg-sky-500/20",
                        item.color === "amber" && "bg-amber-500/20",
                        item.color === "purple" && "bg-purple-500/20"
                      )}
                    />
                  </div>
                  <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors flex-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-slate-700 via-slate-800 to-transparent" />

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#about"
          aria-label="Scroll to About Section"
          className="group inline-flex flex-col items-center text-white/80 hover:text-white transition-all duration-500"
        >
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 opacity-80 group-hover:opacity-100">
            Explore More
          </span>
          <div className="relative h-12 w-px overflow-hidden rounded-full bg-white/30 group-hover:bg-white/50">
            <div className="absolute top-0 left-0 right-0 h-8 bg-white animate-bounce" />
          </div>
          <div className="mt-2 h-4 w-4 rounded-full border-2 border-white/50 group-hover:border-white transition-colors flex items-center justify-center">
            <svg
              className="h-2 w-2 text-white/50 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </a>
      </div>

      {/* Enhanced Slide Indicators - Hidden on Mobile */}
      <div className="pointer-events-none absolute right-4 lg:right-8 top-1/2 hidden lg:flex -translate-y-1/2 flex-col gap-3">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "group relative p-2 transition-all duration-500",
              "pointer-events-auto"
            )}
          >
            <div
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-500",
                i === active
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/40 group-hover:bg-white/60 group-hover:scale-110"
              )}
            />
            {i === active && (
              <div className="absolute -inset-2 rounded-full bg-white/20 animate-ping" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-amber-900 to-blue-500 transition-all duration-1000 ease-out"
          style={{
            width: `${(active / (HERO_IMAGES.length - 1)) * 100}%`,
          }}
        />
      </div>

      {/* Mobile Slide Dots - Only show on mobile */}
      {/* <div className="lg:hidden absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              i === active ? "bg-white scale-125" : "bg-white/40"
            )}
          />
        ))}
      </div> */}
    </section>
  );
}
