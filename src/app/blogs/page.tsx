"use client";

import React, { useState } from "react";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";

interface BlogPost {
    id: string;
    title: string;
    date: string;
    readTime: string;
    category: string;
    excerpt: string;
    content: string;
}

export default function BlogsPage() {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const blogPosts: BlogPost[] = [
        {
            id: "multi-tenant-nextjs",
            title: "Building Multi-Tenant PG Management Platforms at Scale",
            date: "May 12, 2026",
            readTime: "6 min read",
            category: "Next.js & Architecture",
            excerpt: "Learn the architectural patterns required to deliver a multi-tenant operational platform featuring financial compliance, role-based dashboards, and custom tenancy isolation.",
            content: `
### The Challenge of Multi-Tenancy

In modern SaaS architecture, multi-tenancy is a crucial strategy for maximizing resource efficiency while isolating customer data. During my work on property management platforms, I helped design a multi-tenant Next.js engine supporting 120+ operational screens and complex, multi-role compliance workflows.

Here are the key takeaways from designing such architectures:

#### 1. Tenant Isolation at the Database Layer
Depending on security requirements, you can choose between:
- **Shared Database, Shared Schema**: Separate tenants using a tenant_id column. Simplest but requires strict query filtering.
- **Shared Database, Separate Schemas**: PostgreSQL schemas are ideal for this. Users share a database connection pool, but queries are isolated by setting the Search Path.
- **Separate Databases**: Best for high-compliance tenants.

We implemented a **PostgreSQL schema-based isolation** strategy, leveraging Next.js middleware to detect the host subdomain and dynamically set the schema search path for database queries.

#### 2. Dynamic Routing & Subdomain Routing
With Next.js, we mapped subdomains (e.g., \`tenant1.domain.com\`) to dynamic tenant views using middleware rewrites. This approach allowed us to keep the URL clean for users while loading tenancy-specific themes and configurations server-side.

\`\`\`typescript
// middleware.ts sample
export function middleware(request: NextRequest) {
    const host = request.headers.get("host");
    const subdomain = getSubdomain(host);
    
    if (subdomain) {
        return NextResponse.rewrite(new URL(\`/_tenants/\${subdomain}\${request.nextUrl.pathname}\`, request.url));
    }
}
\`\`\`

#### 3. State Management & Role-Based UI
Managing 4 distinct user roles (Super Admin, Property Manager, Operational Staff, and Tenants) requires a scalable client state. By separating core states into modular **Zustand** stores, we decoupled data fetching from UI presentation, reducing component re-renders significantly.
            `
        },
        {
            id: "agentic-flows-cab-booking",
            title: "Building Agentic LLM Flows for Cab Booking and Bill Payments",
            date: "March 28, 2026",
            readTime: "8 min read",
            category: "AI & Agents",
            excerpt: "How we collaborated on building the Discover feed and agentic booking flows for Ola Kruti.ai, bridging natural language intents with transactional API executions.",
            content: `
### Agentic Workflows: The Next Frontier of UX

Chat interfaces are evolving. Instead of static text responses, modern applications use LLMs as autonomous agents capable of calling APIs, retrieving information, and completing real-world transactions like cab bookings, food ordering, and utility bill payments.

Working on **Kruti.ai** at Ola, we focused on converting natural language queries (e.g., *'Book a prime cab to the airport now'*) into reliable structured executions.

#### 1. Function Calling and Structured Tool Selection
The backbone of agentic execution is structured output. By training models and configuring strict schemas, the agent evaluates the user intent and decides which API to call. 

We used a three-step orchestration pipeline:
1. **Intent Extraction**: Parsing names, destinations, and payment categories.
2. **Context Enrichment**: Fetching current user GPS locations, saved addresses, and payment profiles.
3. **Execution Guardrails**: Verifying API payloads before confirming payment transactions.

#### 2. Handling State & Multi-turn Dialogs
Booking a ride is rarely a single-turn action. The agent must verify variables such as:
- *Which type of cab? (Mini, Prime, Auto)*
- *Confirm the price surge?*
- *Select payment method?*

By maintaining a lightweight conversational state machine in our backend Node/FastAPI servers, we allowed the model to request missing parameters progressively without losing the user's initial prompt context.

#### 3. Scaling the Discover Feed
For the Discover feature (projected 50K DAU), rendering speed was critical. We coupled React's incremental static regeneration with client-side caching to render feed widgets instantly, ensuring smooth scrolling and high conversion rates.
            `
        },
        {
            id: "nextjs-performance-optimization",
            title: "The Playbook for Optimizing Next.js Frontend Performance",
            date: "January 15, 2026",
            readTime: "5 min read",
            category: "Frontend & Performance",
            excerpt: "A compilation of real-world frontend optimization techniques, from webpack chunk splitting to image encoding, ensuring sub-second page loads.",
            content: `
### Speed is a Feature

Optimizing frontend load times directly impacts retention and search ranking. During my work across e-commerce and portfolio UIs, I implemented code-splitting and asset compression to bring Core Web Vitals into the green zone.

Here is the exact optimization workflow I recommend:

#### 1. Code Splitting & Dynamic Imports
Large third-party libraries (e.g., complex charting libraries, PDF parsers, heavy visual animations) should not block the initial document parse. Using Next.js dynamic imports, we deferred the loading of these components until the user interacted with them.

\`\`\`typescript
import dynamic from 'next/dynamic';
const InteractiveChart = dynamic(() => import('@/components/InteractiveChart'), {
  ssr: false,
  loading: () => <Skeleton className="h-64 w-full" />
});
\`\`\`

#### 2. Modern Image Pipelines
Unoptimized images are the #1 cause of poor Largest Contentful Paint (LCP). 
- Always use the Next.js \`Image\` component.
- Ensure images are served in modern formats like WebP or AVIF.
- Specify exact width/height attributes or use fill options with responsive sizes attributes to prevent layout shifts (CLS).

#### 3. Asset Compression & Bundling
Analyzing packages with the \`@next/bundle-analyzer\` helps identify heavy node modules. Re-configuring target compilation parameters in ESBuild or Webpack can cut down bundle sizes by up to 35%, ensuring instantaneous interaction times on low-bandwidth connections.
            `
        }
    ];

    return (
        <section className="space-y-8 px-4 py-6 md:px-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="space-y-3 border-b border-border pb-4">
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground flex items-center gap-2">
                    <BookOpen className="text-primary" size={28} />
                    Developer Blog
                </h1>
                <p className="text-muted-foreground text-sm md:text-base">
                    Thoughts, guides, and engineering logs about frontend optimization, multi-tenant architectures, and agentic AI.
                </p>
            </div>

            {/* Main view / Reading View conditional layout */}
            {selectedPost ? (
                // Full Blog Post View
                <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-indigo-400 cursor-pointer"
                    >
                        <ArrowLeft size={16} />
                        Back to Articles
                    </button>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                            <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                                {selectedPost.category}
                            </span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                                <Calendar size={12} />
                                {selectedPost.date}
                            </span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                                <Clock size={12} />
                                {selectedPost.readTime}
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold font-heading text-foreground leading-tight">
                            {selectedPost.title}
                        </h2>

                        <div className="flex items-center gap-3 pt-2">
                            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground">
                                YU
                            </div>
                            <div>
                                <p className="text-sm font-bold text-foreground">Yashwant Ughade</p>
                                <p className="text-xs text-muted-foreground">Software Developer - I</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-border" />

                    {/* Blog Content */}
                    <article className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-sm md:text-base space-y-6">
                        {selectedPost.content.split("\n\n").map((para, i) => {
                            if (para.trim().startsWith("###")) {
                                return (
                                    <h3 key={i} className="text-xl font-bold font-heading text-foreground pt-4">
                                        {para.replace("###", "").trim()}
                                    </h3>
                                );
                            }
                            if (para.trim().startsWith("####")) {
                                return (
                                    <h4 key={i} className="text-lg font-bold font-heading text-foreground pt-2">
                                        {para.replace("####", "").trim()}
                                    </h4>
                                );
                            }
                            if (para.trim().startsWith("- ")) {
                                return (
                                    <ul key={i} className="list-disc pl-5 space-y-1">
                                        {para.split("\n").map((li, j) => (
                                            <li key={j}>{li.replace("- ", "").trim()}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            if (para.trim().includes("```")) {
                                const code = para.replaceAll("```typescript", "").replaceAll("```", "").trim();
                                return (
                                    <pre key={i} className="p-4 rounded-xl bg-muted border border-border font-mono text-xs text-foreground overflow-x-auto">
                                        <code>{code}</code>
                                    </pre>
                                );
                            }
                            return <p key={i}>{para.trim()}</p>;
                        })}
                    </article>
                    
                    <div className="pt-8 border-t border-border flex justify-between">
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="px-4 py-2 rounded-xl border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted/50 transition-all"
                        >
                            Back to Articles
                        </button>
                    </div>
                </div>
            ) : (
                // Article List Grid
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between hover:border-primary/40 transition-colors cursor-pointer group hover:shadow-md"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-xs font-semibold text-primary">
                                    <span>{post.category}</span>
                                    <span className="text-muted-foreground flex items-center gap-1">
                                        <Clock size={12} />
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                                <span>Read Full Article</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
