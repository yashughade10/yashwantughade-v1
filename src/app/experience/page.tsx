"use client";

import React from "react";
import { 
    Briefcase, 
    Calendar,
    MapPin
} from "lucide-react";
import { inter, figtree, outfit } from "@/lib/fonts";
import { getSkillColor } from "@/lib/skillColors";

interface ProductProps {
    name: string;
    description: string;
    details: string[];
    tech: string[];
}

interface ExperienceProps {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    products?: ProductProps[];
    bullets?: string[];
}

function ProductHighlight({ name, description, details, tech }: ProductProps) {
    return (
        <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-md space-y-4 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
            <div className="space-y-1">
                <h4 className={`${outfit.className} text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2`}>
                    {name}
                </h4>
                <p className={`${figtree.className} text-xs text-primary font-semibold tracking-wider uppercase`}>{description}</p>
            </div>
            
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                {details.map((detail, idx) => (
                    <li key={idx} className="leading-relaxed">{detail}</li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2">
                {tech.map((t) => (
                    <span 
                        key={t} 
                        className={`${figtree.className} px-2.5 py-0.5 text-[10px] font-bold border rounded-md ${getSkillColor(t)}`}
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ExperienceBlock({ role, company, period, location, description, products, bullets }: ExperienceProps) {
    return (
        <div className="relative pl-6 md:pl-8 border-l-2 border-border/80 pb-12 last:pb-0 group/timeline">
            {/* Timeline Dot */}
            <span className="absolute -left-[13px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-primary ring-4 ring-background group-hover/timeline:border-accent transition-colors duration-300">
                <span className="h-2 w-2 rounded-full bg-primary group-hover/timeline:bg-accent" />
            </span>

            {/* Position details */}
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                        <h3 className={`${outfit.className} text-xl font-bold text-foreground group-hover/timeline:text-primary transition-colors`}>
                            {role}
                        </h3>
                        <div className="text-base font-bold text-primary mt-0.5 flex items-center gap-2">
                            {company}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold md:self-start">
                        <span className={`${figtree.className} px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border flex items-center gap-1`}>
                            <Calendar size={12} />
                            {period}
                        </span>
                        <span className={`${figtree.className} px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border flex items-center gap-1`}>
                            <MapPin size={12} />
                            {location}
                        </span>
                    </div>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {description}
                </p>

                {/* Sub Bullets (for intern roles) */}
                {bullets && (
                    <ul className="space-y-2.5 text-sm text-muted-foreground list-disc pl-4 mt-2">
                        {bullets.map((bullet, idx) => (
                            <li key={idx} className="leading-relaxed">{bullet}</li>
                        ))}
                    </ul>
                )}

                {/* Sub Products (for developer roles) */}
                {products && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                        {products.map((product, idx) => (
                            <ProductHighlight key={idx} {...product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ExperiencePage() {
    const experiences: ExperienceProps[] = [
        {
            role: "Software Developer – I",
            company: "TBP CODOT",
            period: "August 2024 – Present",
            location: "Bangalore, India (Remote)",
            description: "Designing, building, and deploying highly functional frontend layouts, backend engines, and database environments for high-traffic multi-tenant SaaS products and AI services.",
            products: [
                {
                    name: "PG Management Platform",
                    description: "Multi-tenant Operational & Financial Suite",
                    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Supabase"],
                    details: [
                        "Designed and developed a multi-tenant Property/PG management engine featuring 120+ production screens.",
                        "Configured 4 distinct user roles with full role-based access control (RBAC).",
                        "Implemented operational workflows, tenant management, maintenance requests, financial workflows, billing, and statistics dashboards."
                    ]
                },
                {
                    name: "GooCampus",
                    description: "Global Mentorship Healthcare Platform",
                    tech: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL"],
                    details: [
                        "Built a healthcare mentorship and learning platform serving over 10,000 users globally across India, the UK, Australia, and the US.",
                        "Engineered mentor and student dashboard views, appointment scheduling, authentication, video sessions, and an LMS module."
                    ]
                },
                {
                    name: "Google Meet Integration",
                    description: "Automated Meeting Synchronizer",
                    tech: ["Google APIs", "OAuth 2.0", "Node.js", "Calendar Integration"],
                    details: [
                        "Developed a scheduling API integrating Google Meet, OAuth 2.0 flows, and Google Calendar.",
                        "Programmed automatic event creation, calendar synchronization, and automated confirmation workflows."
                    ]
                },
                {
                    name: "OLA kruti.ai Engagement",
                    description: "AI Agent Workflows & Client Engagement",
                    tech: ["AI Agents", "React.js", "API Orchestration", "High-Traffic Feed"],
                    details: [
                        "Contributed to AI-powered agentic workflows supporting cab booking, food ordering, and utility bill payments.",
                        "Built fluid frontend user experiences for the Discover feed, scaling for 50K+ projected daily active users (DAUs)."
                    ]
                }
            ]
        },
        {
            role: "Full Stack Developer Intern",
            company: "DealsDray Online Pvt. Ltd.",
            period: "Internship",
            location: "Bangalore, India",
            description: "Developed and optimized frontend UI and backend services for DealsDray's internal operational infrastructure.",
            bullets: [
                "Worked on a large-scale internal Warehouse Management System (WMS) supporting Vendor Management, Inventory Tracking, Product Inspection, Repair Workflows, Refurbishment, Warehouse Operations, and Sales Lifecycles.",
                "Built and enhanced frontend features and server-side logic using React.js, Node.js, Express.js, MongoDB, and REST APIs.",
                "Resolved key production bugs, improved loading speeds, and supported day-to-day warehouse operations."
            ]
        },
        {
            role: "Frontend Developer Intern",
            company: "Aeons Technologies",
            period: "August 2023 – December 2023",
            location: "Remote",
            description: "Focused on crafting responsive interfaces and high-performance frontend components for business products.",
            bullets: [
                "Developed dynamic web applications including portfolios, e-commerce stores, and ERP interfaces using React.js, Bootstrap, and Tailwind CSS.",
                "Optimized rendering speed via code-splitting, lazy loading, image optimization, and data caching, improving device responsiveness."
            ]
        }
    ];

    return (
        <section className={`${inter.className} space-y-10 w-full py-2`}>
            {/* Header */}
            <div className="space-y-3 border-b border-border pb-4">
                <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3`}>
                    <Briefcase className="text-primary" size={28} />
                    Work Experience
                </h1>
                <p className="text-muted-foreground text-sm md:text-base">
                    A summary of my professional milestones, full-stack products, and operational systems built at startups and enterprise tech companies.
                </p>
            </div>

            {/* Timeline Wrapper */}
            <div className="mt-8 ml-3 space-y-4">
                {experiences.map((exp, idx) => (
                    <ExperienceBlock key={idx} {...exp} />
                ))}
            </div>
        </section>
    );
}
