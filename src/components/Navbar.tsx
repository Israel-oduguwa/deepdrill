// components/Navbar.tsx
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#safety", label: "Safety" },
  { href: "#ict", label: "ICT" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // control Sheet so we can animate children

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="Deepdrill Oilfield Services Ltd"
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="h-3 w-3 rounded-full bg-amber-400 shadow-sm animate-pulse" />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold text-xl tracking-tight bg-gradient-to-br bg-clip-text transition-all duration-500",
                  scrolled
                    ? "text-transparent from-slate-900 to-slate-700"
                    : "text-white drop-shadow-lg"
                )}
              >
                Deepdrill
              </span>
              <span
                className={cn(
                  "text-xs font-medium transition-all duration-500",
                  scrolled ? "text-slate-500" : "text-white/80"
                )}
              >
                Oilfield Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 group",
                  "hover:scale-105 active:scale-95",
                  scrolled
                    ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span
                  className={cn(
                    "pointer-events-none absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100",
                    scrolled
                      ? "bg-gradient-to-r from-slate-900 to-slate-700"
                      : "bg-gradient-to-r from-amber-400 to-orange-500"
                  )}
                />
              </Link>
            ))}
            <Link
              href="#contact"
              className={cn(
                "ml-4 inline-flex items-center rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300",
                "shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95",
                "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600",
                "relative overflow-hidden group"
              )}
            >
              <span className="relative z-10">Work With Us</span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile: shadcn Sheet (controlled) */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Toggle menu"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl p-3 transition-all duration-300",
                  "hover:scale-105 active:scale-95 relative group",
                  scrolled
                    ? "text-slate-700 hover:bg-slate-100/80"
                    : "text-white hover:bg-white/10"
                )}
              >
                <div className="relative h-6 w-6">
                  <span className="absolute left-0 top-1 h-0.5 w-6 bg-current" />
                  <span className="absolute left-0 top-3 h-0.5 w-6 bg-current" />
                  <span className="absolute left-0 top-5 h-0.5 w-6 bg-current" />
                </div>
              </SheetTrigger>

              <SheetPortal>
                {/* Blurry overlay */}
                <SheetOverlay className="fixed inset-0 z-40 bg-white/40 backdrop-blur-xl data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

                {/* Drawer */}
                <SheetContent
                  side="right"
                  className={cn(
                    "z-50 w-96 max-w-[80vw] border-l border-white/20 bg-slate-50 backdrop-blur-2xl shadow-2xl",
                    "data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=open]:duration-300",
                    "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=closed]:duration-200",
                    "p-0 flex flex-col"
                  )}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center shadow-lg">
                        <div className="h-4 w-4 rounded-full bg-amber-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-2xl bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                          Deepdrill
                        </span>
                        <span className="text-sm text-slate-500">
                          Oilfield Services
                        </span>
                      </div>
                    </div>
                  
                  </div>

                  {/* Links (staggered) */}
                  <div className="flex-1 px-4 pb-6 overflow-auto">
                    {navItems.map((item, index) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "group block rounded-2xl px-6 py-4 text-lg font-semibold",
                            "bg-slate-50 hover:bg-white shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur",
                            " hover:border-slate-300",
                            "text-slate-800 hover:shadow-lg transition-all mt-2 first:mt-0",
                            open ? "dd-animate-in" : "opacity-0"
                          )}
                          style={{
                            animationDelay: open
                              ? `${index * 200}ms`
                              : undefined,
                          }}
                          // when opening, animate each link in
                        >
                          <span className="flex items-center justify-between">
                            <span className="flex items-center gap-3">
                              {/* subtle bullet/marker */}
                              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 opacity-70 group-hover:opacity-100 transition" />
                              {item.label}
                            </span>
                            <svg
                              className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-transform duration-300 -translate-x-2 group-hover:translate-x-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </Link>
                      </SheetClose>
                    ))}

                    {/* CTA (with its own pop animation) */}
                    <SheetClose asChild>
                      <Link
                        href="#contact"
                        className={cn(
                          "mt-6 flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-bold text-white",
                          "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
                          "shadow-xl hover:shadow-2xl border border-amber-300/30 transition-transform",
                          open ? "dd-cta-in" : "opacity-0"
                        )}
                        style={{
                          animationDelay: open
                            ? `${navItems.length * 80 + 120}ms`
                            : undefined,
                        }}
                      >
                        Work With Us
                      </Link>
                    </SheetClose>
                  </div>

                  {/* Footer */}
                  {/* <div className="px-6 py-6 border-t border-slate-200/60 text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} Deepdrill Oilfield Services Ltd
                    <div className="text-xs text-slate-400 mt-2">
                      Excellence in Oilfield Solutions
                    </div>
                  </div> */}
                </SheetContent>
              </SheetPortal>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
