"use client"

import Image from "next/image"

import { brand } from "@/lib/site-config"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-[transform,opacity] duration-500 sm:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-sm border border-border bg-secondary">
              <Image src="/centro danza/chisiamo.jpg" alt="Permanent makeup artist at work" fill quality={68} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="mx-auto flex max-w-xl flex-col justify-center self-center lg:mx-0 lg:py-6">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">About</p>
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">Meet your artist.</h2>
            <p className="mb-5 text-lg leading-relaxed text-pretty text-foreground">{brand.artistNames} at [Studio Name] brings [Years of Experience] of experience and is fully licensed and certified ([Certifications/License]).</p>
            <div className="space-y-4 text-lg leading-relaxed text-pretty text-foreground">
              <p><span className="font-semibold text-primary">Specialties:</span> Brows, Lip Blush, Eyeliner, and Corrections.</p>
              <p>Natural, soft, and customized to you &mdash; every shape and shade is mapped to your features so the result enhances the face you already love.</p>
              <p>Sterile tools, single-use supplies, and a clean studio. Your comfort and safety guide every step of the process.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
