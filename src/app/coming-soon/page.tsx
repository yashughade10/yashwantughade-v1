import Link from "next/link";
import { ArrowUpRight, Code2, Lock, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const stack = [
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "Thoughtful motion",
];

const launchSignals = [
    { label: "Launch mode", value: "Locked" },
    { label: "Focus", value: "Portfolio polish" },
    { label: "Next reveal", value: "Soon" },
];

export default function ComingSoonPage() {
    return (
        <main className="launch-shell fixed inset-0 z-50 isolate flex items-center overflow-hidden bg-background text-foreground">
            <div
                aria-hidden="true"
                className="launch-grid absolute inset-0 opacity-35"
            />
            <div
                aria-hidden="true"
                className="launch-float absolute -left-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(215,176,109,0.28),transparent_72%)] blur-3xl sm:h-96 sm:w-96"
            />
            <div
                aria-hidden="true"
                className="launch-float launch-float--reverse launch-float--slow absolute bottom-[-5rem] right-[-6rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(110,140,118,0.22),transparent_70%)] blur-3xl sm:h-[28rem] sm:w-[28rem]"
                style={{ animationDelay: "-6s" }}
            />

            <div className="relative mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center">
                    <section className="space-y-8">
                        <div className="launch-reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.36em] text-white/65 backdrop-blur">
                            <Sparkles className="size-3.5 text-amber-300" />
                            Portfolio coming soon
                        </div>

                        <div className="space-y-5">
                            <p className="launch-reveal font-mono text-xs uppercase tracking-[0.5em] text-white/45">
                                Yashwant Ughade
                            </p>
                            <h1 className="launch-reveal max-w-3xl font-heading text-5xl leading-[0.92] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                                Crafting a portfolio that feels more like a
                                product than a placeholder.
                            </h1>
                            <p className="launch-reveal max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                                The full site is intentionally locked while I
                                finish the details. I&apos;m tuning the
                                visuals, refining the motion, and shaping the
                                content so the first public version lands with
                                clarity.
                            </p>
                        </div>

                        <div
                            className="launch-reveal flex flex-wrap gap-3"
                            style={{ animationDelay: "340ms" }}
                        >
                            {stack.map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur"
                                >
                                    <Code2 className="size-3.5 text-emerald-300" />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div
                            className="launch-reveal flex flex-col gap-3 sm:flex-row"
                            style={{ animationDelay: "420ms" }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full px-6 shadow-lg shadow-black/20"
                            >
                                <Link
                                    href="https://github.com/yashughade10"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View GitHub
                                    <ArrowUpRight className="size-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
                            >
                                <Link
                                    href="https://www.linkedin.com/in/yashwant-ughade-a04682220/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </Link>
                            </Button>
                        </div>
                    </section>

                    <aside
                        className="launch-reveal relative"
                        style={{ animationDelay: "220ms" }}
                    >
                        <div
                            aria-hidden="true"
                            className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(215,176,109,0.18),transparent_62%)] blur-2xl"
                        />
                        <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                            <CardContent className="space-y-6 p-6 sm:p-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/45">
                                            Launch console
                                        </p>
                                        <h2 className="mt-2 font-heading text-3xl text-white">
                                            Access restricted
                                        </h2>
                                    </div>
                                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
                                        <Lock className="size-3.5" />
                                        Locked
                                    </span>
                                </div>

                                <Separator className="bg-white/10" />

                                <div className="space-y-4">
                                    {launchSignals.map((signal) => (
                                        <div
                                            key={signal.label}
                                            className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                                        >
                                            <span className="text-sm text-white/55">
                                                {signal.label}
                                            </span>
                                            <span className="text-sm font-medium text-white">
                                                {signal.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-white/40">
                                        Build signal
                                    </p>
                                    <div className="space-y-2 text-sm text-white/75">
                                        <p>
                                            <span className="text-emerald-300">
                                                status:
                                            </span>{" "}
                                            polishing
                                        </p>
                                        <p>
                                            <span className="text-emerald-300">
                                                routes:
                                            </span>{" "}
                                            temporarily gated
                                        </p>
                                        <p>
                                            <span className="text-emerald-300">
                                                goal:
                                            </span>{" "}
                                            a clean, memorable launch
                                        </p>
                                    </div>
                                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </main>
    );
}
