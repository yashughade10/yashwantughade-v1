"use client";

import React from "react";
import { Eye, ListCollapse } from "lucide-react";
import Image from "next/image";
import { inter, figtree, outfit } from "@/lib/fonts";

interface ProjectProps {
    title: string;
    details: string;
    imgSrc: string;
    preview: string;
    github: string;
    more: string;
}

function ProjectCard(props: ProjectProps) {
    return (
        <div className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 relative animate-in fade-in duration-300">
            {/* The outer box now adapts to light/dark themes with elegant border colors */}
            <div className="h-full border border-border bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative group overflow-hidden bg-muted">
                    {/* Project Preview Image */}
                    <Image className="w-full aspect-[16/10] object-cover object-center group-hover:scale-105 transition-transform duration-300" src={props.imgSrc} alt={props.title} width={600} height={375} unoptimized />

                    {/* Hover Actions Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-250">
                        <a href={props.preview} target="_blank" rel="noreferrer" className="text-white mx-2 hover:text-blue-200 bg-slate-900 hover:bg-blue-600 py-3 px-3 mr-4 border border-white/20 rounded-full transition-all hover:scale-105">
                            <Eye size={24} />
                        </a>
                        <a href={props.github} target="_blank" rel="noreferrer" className="text-white mx-2 hover:text-blue-200 bg-slate-900 hover:bg-blue-600 py-3 px-3 border border-white/20 rounded-full transition-all hover:scale-105">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="p-4 space-y-3">
                    <h2 className={`${outfit.className} text-lg font-bold text-foreground tracking-tight`}>{props.title}</h2>
                    <p className="leading-relaxed text-sm text-muted-foreground h-[100px] overflow-y-auto pr-1 scrollbar-thin">
                        {props.details}
                    </p>
                    <div className="flex flex-wrap items-center pt-2">
                        <a href={props.github} target="_blank" rel="noreferrer" className={`${figtree.className} text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-sm inline-flex items-center cursor-pointer gap-1.5 transition-colors`}>
                            {props.more}
                            <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    const projectsList: ProjectProps[] = [
        {
            title: "MedsOverflow",
            details: "A community-driven medical QA platform inspired by Stack Overflow. Implements full CRUD operations for question posting, voting, tag searching, and clean RESTful API backend models using React.js, Node.js, Express.js, and MongoDB.",
            imgSrc: "/meds_overflow.png",
            preview: "https://github.com/yashughade10/medsOverflow",
            github: "https://github.com/yashughade10/medsOverflow",
            more: "Source Code"
        },
        {
            title: "Tech-Beat",
            details: "Built a fully functional, high-fidelity e-commerce UI for an online electronics store. Features central state management with Redux, dynamic search, multi-criteria filtering, and smooth cart transitions.",
            imgSrc: "/tech_beat.png",
            preview: "https://e-commerce-tech-shop.vercel.app/",
            github: "https://github.com/yashughade10/E-commerce-Tech-Shop",
            more: "Live Preview"
        },
        {
            title: "EngageSync",
            details: "A modern SaaS synchronization dashboard for contacts and team directory management. Features status tracking indicators, quick synchronization hooks, and a crisp, responsive layout.",
            imgSrc: "/engage_sync.png",
            preview: "https://engage-sync.vercel.app/contacts/list",
            github: "https://github.com/yashughade10",
            more: "Live Preview"
        }
    ];

    return (
        <section className={`${inter.className} space-y-8 w-full py-2`}>
            {/* Header */}
            <div className="space-y-3 border-b border-border pb-4">
                <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold text-foreground flex items-center gap-2`}>
                    {/* <ListCollapse className="text-indigo-500" size={28} /> */}
                    Projects
                </h1>
                <p className="text-muted-foreground text-sm md:text-base">
                    Here is a showcase of full-stack products, applications, and frontends built using modern web architectures.
                </p>
            </div>

            {/* Grid container with -m-4 to support the card's percentage width system */}
            <div className="flex flex-wrap -m-4">
                {projectsList.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </section>
    );
}
