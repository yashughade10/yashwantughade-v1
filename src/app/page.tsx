"use client";

import SpotlightBanner from "@/components/home/SpotlightBanner";
import { TypeAnimation } from "react-type-animation";
import { useContactModal } from "@/hooks/use-contact-modal";
import Link from "next/link";
import { Briefcase, ArrowRight, Download, Mail, Star, Users, Layers, Award } from "lucide-react";

export default function Home() {
    const { openModal } = useContactModal();

    return (
        <div className="space-y-12 px-4 py-6 md:px-8 max-w-6xl mx-auto">
            {/* Spotlight Banner at top */}
            <SpotlightBanner />

            {/* Hero / Introduction Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
                <div className="lg:col-span-8 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold">
                        <Star size={12} className="fill-primary animate-pulse" />
                        Available for Full-time Roles & Projects
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-heading leading-tight">
                        Hi, I&apos;m <span className="text-primary">Yashwant Ughade</span>
                        <br />
                        <span className="text-2xl md:text-4xl font-sans font-medium text-muted-foreground block mt-2">
                            I am a{" "}
                            <TypeAnimation
                                sequence={[
                                    "Software Developer",
                                    2000,
                                    "Full Stack Engineer",
                                    2000,
                                    "Next.js & React Specialist",
                                    2000,
                                    "Node & FastAPI Developer",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={40}
                                repeat={Infinity}
                                className="text-primary font-semibold"
                            />
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        Full-Stack Software Developer specializing in building high-performance, scalable, and user-centric web applications. Proven experience in delivering multi-tenant operational platforms, agentic AI workflows, and large-scale mentorship platforms.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button
                            onClick={openModal}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:opacity-95 hover:scale-[1.02] transition-all cursor-pointer"
                        >
                            <Mail size={18} />
                            Hire Me
                        </button>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted/50 hover:border-primary/30 transition-all"
                        >
                            Explore Projects
                            <ArrowRight size={16} />
                        </Link>
                        <a
                            href="/New_Resume_Yashwant.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted/50 hover:border-primary/30 transition-all"
                        >
                            <Download size={16} />
                            View Resume
                        </a>
                    </div>
                </div>

                {/* Quick Bio Info Card */}
                <div className="lg:col-span-4 bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm">
                    <h3 className="text-lg font-bold font-heading text-foreground">Quick Details</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Location</span>
                            <span className="font-medium">Bangalore, India (Remote)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Education</span>
                            <span className="font-medium">B.Tech ECE (2023)</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Languages</span>
                            <span className="font-medium">English, Hindi, Marathi</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-muted-foreground">Hobbies</span>
                            <span className="font-medium">Travel, Guitar, Swimming</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievement Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-sm hover:border-primary/30 transition-colors">
                    <Award className="text-primary mb-3" size={24} />
                    <div>
                        <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-heading">2+ Years</div>
                        <div className="text-xs text-muted-foreground mt-1">Professional Experience</div>
                    </div>
                </div>
                <div className="p-5 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-sm hover:border-primary/30 transition-colors">
                    <Layers className="text-primary mb-3" size={24} />
                    <div>
                        <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-heading">120+ Screens</div>
                        <div className="text-xs text-muted-foreground mt-1">UI/UX Delivered</div>
                    </div>
                </div>
                <div className="p-5 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-sm hover:border-primary/30 transition-colors">
                    <Users className="text-primary mb-3" size={24} />
                    <div>
                        <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-heading">10K+</div>
                        <div className="text-xs text-muted-foreground mt-1">Active Users Served</div>
                    </div>
                </div>
                <div className="p-5 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-sm hover:border-primary/30 transition-colors">
                    <Briefcase className="text-primary mb-3" size={24} />
                    <div>
                        <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-heading">3+</div>
                        <div className="text-xs text-muted-foreground mt-1">Full-stack Workplaces</div>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6 pt-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <h2 className="text-2xl font-bold font-heading text-foreground flex items-center gap-2">
                        <Briefcase size={22} className="text-primary" />
                        Professional Journey
                    </h2>
                </div>

                <div className="relative border-l-2 border-border ml-3 pl-6 space-y-10 py-2">
                    {/* Position 1: TBPCODOT */}
                    <div className="relative animate-in fade-in slide-in-from-left-4 duration-300">
                        <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                            <div>
                                <h3 className="text-lg font-bold text-foreground">
                                    Software Developer - I
                                </h3>
                                <div className="text-sm font-semibold text-primary mt-0.5">
                                    TBPCODOT
                                </div>
                            </div>
                            <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border md:self-start">
                                August 2024 – Current
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Bangalore, India (Remote)</p>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-4">
                            <li>Delivered a multi-tenant PG management platform spanning 120+ screens, 4 user roles, and complex financial, compliance, and operational workflows.</li>
                            <li>Built a full-featured Next.js 15 medical education mentorship platform <strong>GooCampus</strong> serving 10K+ users across India, UK, Australia, and USA.</li>
                            <li>Developed a multi-platform video meeting system supporting Google Meet with OAuth2 calendar integration.</li>
                            <li>Engineered robust full-stack solutions using React, Next.js, React Native, TypeScript, MongoDB, and PostgreSQL.</li>
                        </ul>
                    </div>

                    {/* Position 2: OLA */}
                    <div className="relative animate-in fade-in slide-in-from-left-4 duration-400">
                        <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-border ring-4 ring-background" />
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                            <div>
                                <h3 className="text-lg font-bold text-foreground">
                                    Software Developer - I
                                </h3>
                                <div className="text-sm font-semibold text-primary mt-0.5">
                                    OLA (Kruti.ai)
                                </div>
                            </div>
                            <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border md:self-start">
                                August 2024 – August 2025
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Bangalore, India (Remote)</p>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-4">
                            <li>Collaborated on building agentic AI flows for cab booking, food ordering, and utility bill payment functionalities.</li>
                            <li>Developed the Discover feed feature projected to serve 50K Daily Active Users (DAU).</li>
                            <li>Worked in a core engineering team of 4 to design robust frontend web architecture and deploy feature modules.</li>
                        </ul>
                    </div>

                    {/* Position 3: AEONS */}
                    <div className="relative animate-in fade-in slide-in-from-left-4 duration-500">
                        <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-border ring-4 ring-background" />
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                            <div>
                                <h3 className="text-lg font-bold text-foreground">
                                    Frontend Developer Intern
                                </h3>
                                <div className="text-sm font-semibold text-primary mt-0.5">
                                    Aeons Technologies
                                </div>
                            </div>
                            <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border md:self-start">
                                August 2023 – December 2023
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Remote</p>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-4">
                            <li>Developed dynamic web applications (portfolios, e-commerce stores, ERP interfaces) using React.js and CSS utility libraries (Bootstrap, Tailwind CSS).</li>
                            <li>Optimized app rendering performance using code-splitting, image optimization, and caching, ensuring device responsiveness.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
