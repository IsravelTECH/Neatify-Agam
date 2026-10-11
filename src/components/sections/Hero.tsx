"use client";

import React from "react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/SectionHeading";
import { CheckCircle2, ShieldCheck, Sparkles, Clock, MapPin, IndianRupee } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[var(--gold)]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--green)] text-[var(--ong)] border border-[var(--gold)]/40 mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span className="text-xs font-bold tracking-[0.16em] uppercase">
                  YOUR SPACE. OUR CARE.
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-heading font-bold text-[var(--ink)] leading-[1.08] tracking-tight mb-6">
                Make It Neat. <br />
                <span className="text-[var(--gold)] italic font-medium">Make It Home.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-[var(--mute)] leading-relaxed mb-8 max-w-2xl">
                From everyday flats to corporate offices, institutions, and community spaces,{" "}
                <strong className="text-[var(--ink)] font-bold">NEATIFY AGAM</strong> cleans,
                organises, arranges, and sets up with heart-felt excellence. Small jobs start from{" "}
                <span className="font-bold text-[var(--ink)]">₹99</span>. You get a clear upfront
                quote first and pay after we inspect together.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                <WhatsAppButton
                  size="lg"
                  text="Get a Free Quote on WhatsApp"
                  className="w-full sm:w-auto shadow-md"
                />
                <Button
                  variant="outline"
                  size="lg"
                  href="#services"
                  className="w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--line)] w-full">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                    <IndianRupee className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--mute)]">Starting at</div>
                    <div className="text-sm font-bold text-[var(--ink)]">₹99 Micro-tasks</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--mute)]">Availability</div>
                    <div className="text-sm font-bold text-[var(--ink)]">24/7 By Booking</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="p-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--mute)]">Coverage</div>
                    <div className="text-sm font-bold text-[var(--ink)]">All Over Chennai</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Framing with Authentic Assets & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.3} yOffset={30}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background decorative border frame */}
                <div className="absolute -inset-3 rounded-2xl border-2 border-[var(--gold)]/30 transform rotate-1 pointer-events-none" />

                {/* Main Image container */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[var(--line)] bg-[var(--card)]">
                  <Image
                    src="/images/neatify-hero.jpeg"
                    alt="Neatify Agam Organised Home Care"
                    fill
                    className="object-cover object-center transform hover:scale-102 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--green)]/70 via-transparent to-transparent" />

                  {/* Caption overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-[var(--ong)]">
                    <p className="text-xs font-serif-heading italic tracking-wide text-[var(--gold)]">
                      {BRAND.scripture}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider opacity-90">
                      {BRAND.scriptureRef}
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: Upfront Quote */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-[var(--card)] border border-[var(--line)] shadow-lg rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                  <div className="p-2 rounded-lg bg-[var(--green)] text-[var(--ong)]">
                    <ShieldCheck className="w-4 h-4 text-[var(--gold)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--ink)]">Clear Quote First</div>
                    <div className="text-[11px] text-[var(--mute)]">No hidden surprise fees</div>
                  </div>
                </div>

                {/* Floating Badge 2: Inspect Together, Then Pay */}
                <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[var(--card)] border border-[var(--line)] shadow-lg rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                  <div className="p-2 rounded-lg bg-[var(--gold)] text-[#17210f]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--ink)]">Inspect, Then Pay</div>
                    <div className="text-[11px] text-[var(--mute)]">Joint walkthrough walkout</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
