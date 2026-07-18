"use client";

import React from "react";
import { 
  GraduationCap, 
  Heart, 
  Code2, 
  Cpu, 
  Wrench, 
  Languages, 
  Database,
  Compass,
  Lightbulb,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { inter, figtree, outfit } from "@/lib/fonts";
import { getSkillColor } from "@/lib/skillColors";

export default function AboutPage() {
    const skills = {
        languages: ["TypeScript", "JavaScript", "Python", "C/C++"],
        frontend: ["Next.js", "React.js", "React Native", "Redux", "Zustand", "Tailwind CSS", "jQuery", "HTML5", "CSS3", "Responsive Web Design"],
        backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication & Authorization", "JWT"],
        databases: ["MongoDB", "PostgreSQL", "Qdrant", "Supabase"],
        tools: ["Git", "GitHub", "Docker", "Linux", "Postman", "Webpack", "ESBuild", "CI/CD"]
    };

    const philosophy = "I enjoy building software that is Scalable, Maintainable, Performant, Accessible, and User-Centric. I believe clean architecture, reusable components, and thoughtful engineering decisions are what separate good software from great software.";

    const careerGoals = {
        shortTerm: "Build expertise in backend engineering, system design, and distributed systems while delivering high-quality full-stack applications.",
        longTerm: "Become a Cloud & DevOps Engineer capable of designing, deploying, and operating highly scalable cloud-native applications while combining strong software engineering fundamentals with modern infrastructure practices."
    };

    const funFacts = [
        "Passionate about learning new technologies.",
        "Love building real-world products instead of tutorial projects.",
        "Interested in AI, Cloud Computing, DevOps, and scalable system design.",
        "Always exploring better engineering practices and modern software architecture."
    ];

    return (
        <section className={`${inter.className} space-y-12 w-full py-2`}>
            {/* Header */}
            <div className="space-y-3 border-b border-border pb-4">
                <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold text-foreground`}>About Me</h1>
                <p className="text-muted-foreground text-base md:text-lg">
                    Full Stack Software Engineer who bridges robust frontend experiences with scalable backend systems.
                </p>
            </div>

            {/* Bio & Education grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <h3 className={`${outfit.className} text-lg font-bold text-foreground`}>My Journey</h3>
                    <p>
                        I&apos;m a Full Stack Software Engineer with over two years of experience building modern web applications for startups and enterprise products.
                    </p>
                    <p>
                        My experience spans multi-tenant SaaS platforms, AI-powered applications, healthcare platforms, warehouse management systems, and internal business tools. I enjoy building intuitive frontend experiences while also designing scalable backend services and APIs.
                    </p>
                    <p>
                        I believe great software is not just about writing code—it&apos;s about understanding the business problem, designing maintainable systems, and delivering exceptional user experiences. Currently, I&apos;m focused on strengthening my expertise in Cloud Computing, DevOps, System Design, and scalable backend engineering.
                    </p>
                </div>

                {/* Education Card */}
                <div className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-lg flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:scale-125 transition-transform" />
                    <div>
                        <div className="flex items-center gap-2 text-primary">
                            <GraduationCap size={22} />
                            <h4 className={`${outfit.className} font-bold text-foreground`}>Education</h4>
                        </div>
                        <div className="mt-4 space-y-2 text-sm">
                            <h5 className="font-bold text-foreground">SGGS Institute of Engineering & Technology</h5>
                            <p className="text-xs text-muted-foreground">Nanded, Maharashtra, India</p>
                            <p className="text-xs font-bold text-primary mt-2">B.Tech in Electronics and Communication Engineering</p>
                            <p className="text-xs font-semibold text-muted-foreground">Graduated in 2023</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-6">
                <h3 className={`${outfit.className} text-lg font-bold text-foreground flex items-center gap-2 border-b border-border/50 pb-2`}>
                    <Code2 size={22} className="text-primary" />
                    Technical Skills
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Languages */}
                    <div className="p-5 rounded-2xl bg-card border border-border space-y-3 hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-2 text-primary">
                            <Cpu size={18} />
                            <h4 className={`${outfit.className} font-bold text-foreground text-sm`}>Languages</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.languages.map((lang) => (
                                <span key={lang} className={`${figtree.className} px-2.5 py-1 text-xs font-semibold rounded-lg border ${getSkillColor(lang)}`}>
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="p-5 rounded-2xl bg-card border border-border space-y-3 hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-2 text-primary">
                            <Code2 size={18} />
                            <h4 className={`${outfit.className} font-bold text-foreground text-sm`}>Frontend</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.frontend.map((item) => (
                                <span key={item} className={`${figtree.className} px-2.5 py-1 text-xs font-semibold rounded-lg border ${getSkillColor(item)}`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="p-5 rounded-2xl bg-card border border-border space-y-3 hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-2 text-primary">
                            <Wrench size={18} />
                            <h4 className={`${outfit.className} font-bold text-foreground text-sm`}>Backend & APIs</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.backend.map((item) => (
                                <span key={item} className={`${figtree.className} px-2.5 py-1 text-xs font-semibold rounded-lg border ${getSkillColor(item)}`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="p-5 rounded-2xl bg-card border border-border space-y-3 hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-2 text-primary">
                            <Database size={18} />
                            <h4 className={`${outfit.className} font-bold text-foreground text-sm`}>Databases</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.databases.map((item) => (
                                <span key={item} className={`${figtree.className} px-2.5 py-1 text-xs font-semibold rounded-lg border ${getSkillColor(item)}`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Developer Tools */}
                    <div className="p-5 rounded-2xl bg-card border border-border space-y-3 hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-2 text-primary">
                            <Sparkles size={18} />
                            <h4 className={`${outfit.className} font-bold text-foreground text-sm`}>Developer Tools & CI/CD</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map((item) => (
                                <span key={item} className={`${figtree.className} px-2.5 py-1 text-xs font-semibold rounded-lg border ${getSkillColor(item)}`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Engineering Philosophy & Career Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Engineering Philosophy */}
                <div className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-md flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-primary mb-3">
                            <Lightbulb size={20} />
                            <h4 className={`${outfit.className} font-bold text-foreground`}>Engineering Philosophy</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                            &ldquo;{philosophy}&rdquo;
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                        {["Scalable", "Maintainable", "Performant", "Accessible", "User-Centric"].map((val) => (
                            <span key={val} className={`${figtree.className} px-2.5 py-0.5 text-xs font-bold bg-primary/10 text-primary rounded-full border border-primary/20`}>
                                {val}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Career Goals */}
                <div className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-md">
                    <div className="flex items-center gap-2 text-primary mb-3">
                        <Compass size={20} />
                        <h4 className={`${outfit.className} font-bold text-foreground`}>Career Goals</h4>
                    </div>
                    <div className="space-y-4 text-sm">
                        <div className="space-y-1">
                            <span className="font-bold text-foreground text-xs uppercase tracking-wider text-primary">Short Term Goal</span>
                            <p className="text-muted-foreground leading-relaxed">{careerGoals.shortTerm}</p>
                        </div>
                        <div className="space-y-1">
                            <span className="font-bold text-foreground text-xs uppercase tracking-wider text-primary">Long Term Goal</span>
                            <p className="text-muted-foreground leading-relaxed">{careerGoals.longTerm}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fun Facts & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Fun Facts */}
                <div className="md:col-span-2 p-6 rounded-2xl bg-card border border-border space-y-4 shadow-md">
                    <div className="flex items-center gap-2 text-primary mb-3">
                        <Sparkles size={20} />
                        <h4 className={`${outfit.className} font-bold text-foreground`}>Fun Facts</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        {funFacts.map((fact, index) => (
                            <li key={index} className="flex items-start gap-2.5">
                                <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                                <span>{fact}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Languages Known & Interests */}
                <div className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-md flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-primary mb-3">
                            <Languages size={20} />
                            <h4 className={`${outfit.className} font-bold text-foreground`}>Languages</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                            <span className="px-2.5 py-1 rounded-lg bg-secondary border border-border">English (Fluent)</span>
                            <span className="px-2.5 py-1 rounded-lg bg-secondary border border-border">Hindi (Native)</span>
                            <span className="px-2.5 py-1 rounded-lg bg-secondary border border-border">Marathi (Native)</span>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 text-primary mb-3">
                            <Heart size={18} />
                            <h4 className={`${outfit.className} font-bold text-foreground text-xs uppercase tracking-wider`}>Interests</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                            <span className="px-2.5 py-1 rounded-lg bg-secondary border border-border">✈️ Travel</span>
                            <span className="px-2.5 py-1 rounded-lg bg-secondary border border-border">🎸 Guitar</span>
                            <span className="px-2.5 py-1 rounded-lg bg-secondary border border-border">🏊 Swimming</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
