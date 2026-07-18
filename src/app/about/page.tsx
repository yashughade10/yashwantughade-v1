"use client";

import { GraduationCap, Heart, Code2, Cpu, Wrench, Languages } from "lucide-react";

export default function AboutPage() {
    const skills = {
        languages: ["TypeScript", "JavaScript", "C/C++", "Python"],
        frameworks: ["Next.js", "React.js", "Node.js", "ExpressJS", "FastAPI", "Zustand", "TailwindCSS", "jQuery", "REST APIs"],
        tools: ["Git", "GitHub", "PostgreSQL", "MongoDB", "Supabase", "Webpack", "ESBuild", "PostCSS"]
    };

    return (
        <section className="space-y-10 px-4 py-6 md:px-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="space-y-3 border-b border-border pb-4">
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">About Me</h1>
                <p className="text-muted-foreground text-base md:text-lg">
                    Software Developer I who thrives on building efficient, scalable, and beautifully designed user experiences.
                </p>
            </div>

            {/* Bio & Education grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <h3 className="text-lg font-bold font-heading text-foreground">Who I Am</h3>
                    <p>
                        I graduated with a Bachelor of Technology in Electronics and Communication Engineering in 2023. Since then, I have dedicated myself to professional full-stack development, delivering software solutions in remote-first environments.
                    </p>
                    <p>
                        My work revolves around solving complex operational and financial challenges, such as designing multi-tenant property management workflows and building AI-driven agentic flows for user discovery, cab booking, and bill payments. I focus on clean architecture, modular React code, and highly scalable database structures.
                    </p>
                    <p>
                        I strive to bridge the gap between pixel-perfect frontends and solid backend engines, leveraging state-of-the-art tools like Next.js 15/16, Tailwind, and Node/FastAPI.
                    </p>
                </div>

                {/* Education Card */}
                <div className="p-5 rounded-2xl bg-card border border-border space-y-4 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-primary">
                            <GraduationCap size={20} />
                            <h4 className="font-bold text-foreground font-heading">Education</h4>
                        </div>
                        <div className="mt-4 space-y-1">
                            <h5 className="font-semibold text-sm text-foreground">SGGS Institute of Engineering & Technology</h5>
                            <p className="text-xs text-muted-foreground">Nanded, Maharashtra</p>
                            <p className="text-xs font-semibold text-primary mt-2">B.Tech in ECE</p>
                            <p className="text-xs text-muted-foreground">Batch of 2023</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills grid */}
            <div className="space-y-6">
                <h3 className="text-lg font-bold font-heading text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                    <Code2 size={20} className="text-primary" />
                    Skills & Tech Stack
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Languages */}
                    <div className="p-5 rounded-2xl bg-muted/20 border border-border/60 space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                            <Cpu size={18} />
                            <h4 className="font-bold text-foreground text-sm font-heading">Programming</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.languages.map((lang) => (
                                <span key={lang} className="px-3 py-1 text-xs font-semibold rounded-lg bg-card border border-border hover:border-primary/40 transition-colors">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="p-5 rounded-2xl bg-muted/20 border border-border/60 space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                            <Code2 size={18} />
                            <h4 className="font-bold text-foreground text-sm font-heading">Libraries & Frameworks</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.frameworks.map((fw) => (
                                <span key={fw} className="px-3 py-1 text-xs font-semibold rounded-lg bg-card border border-border hover:border-primary/40 transition-colors">
                                    {fw}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="p-5 rounded-2xl bg-muted/20 border border-border/60 space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                            <Wrench size={18} />
                            <h4 className="font-bold text-foreground text-sm font-heading">Tools & Platforms</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map((tool) => (
                                <span key={tool} className="px-3 py-1 text-xs font-semibold rounded-lg bg-card border border-border hover:border-primary/40 transition-colors">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Dossier details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Languages */}
                <div className="p-5 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-sm">
                    <div className="flex items-center gap-2 text-primary mb-4">
                        <Languages size={18} />
                        <h4 className="font-bold text-foreground text-sm font-heading">Languages Known</h4>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm font-semibold">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/30 border border-border">English <span className="text-xs text-muted-foreground font-normal">(Fluent)</span></span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/30 border border-border">Hindi <span className="text-xs text-muted-foreground font-normal">(Native)</span></span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/30 border border-border">Marathi <span className="text-xs text-muted-foreground font-normal">(Native)</span></span>
                    </div>
                </div>

                {/* Hobbies */}
                <div className="p-5 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-sm">
                    <div className="flex items-center gap-2 text-primary mb-4">
                        <Heart size={18} />
                        <h4 className="font-bold text-foreground text-sm font-heading">Interests & Hobbies</h4>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm font-semibold">
                        <span className="px-3 py-1.5 rounded-xl bg-muted/30 border border-border">✈️ Travel</span>
                        <span className="px-3 py-1.5 rounded-xl bg-muted/30 border border-border">🎸 Guitar</span>
                        <span className="px-3 py-1.5 rounded-xl bg-muted/30 border border-border">🎵 Music</span>
                        <span className="px-3 py-1.5 rounded-xl bg-muted/30 border border-border">🏊 Swimming</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
