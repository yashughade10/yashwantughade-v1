"use client";

import React, { useState } from "react";
import { useContactModal } from "@/hooks/use-contact-modal";
import { Mail, Phone, X, Send, CheckCircle2, Loader2 } from "lucide-react";

export function ContactModal() {
    const { isOpen, closeModal } = useContactModal();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) return;

        setStatus("sending");
        // Simulate API send
        setTimeout(() => {
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Banner */}
                <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500" />

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-5">
                    {/* Left Info Column */}
                    <div className="md:col-span-2 p-6 md:p-8 bg-muted/30 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-foreground font-heading">
                                Let&apos;s Connect
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Have an opportunity, a project, or just want to chat? Drop a message.
                            </p>

                            <div className="mt-8 space-y-4">
                                <a
                                    href="mailto:yashughade24@gmail.com"
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <div className="p-2.5 rounded-lg bg-background border border-border">
                                        <Mail size={16} className="text-primary" />
                                    </div>
                                    <span className="truncate">yashughade24@gmail.com</span>
                                </a>

                                <a
                                    href="tel:+917666935571"
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <div className="p-2.5 rounded-lg bg-background border border-border">
                                        <Phone size={16} className="text-primary" />
                                    </div>
                                    <span>+91 7666935571</span>
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Social Channels
                            </h4>
                            <div className="flex gap-3 mt-3">
                                <a
                                    href="https://in.linkedin.com/in/yashwant-ughade-a04682220"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center"
                                >
                                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/yashughade10"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center"
                                >
                                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in-95 duration-300">
                                <CheckCircle2 size={54} className="text-emerald-500 mb-4" />
                                <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                                <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                                    Thank you for reaching out. Yashwant will get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 px-4 py-2 text-xs font-medium rounded-lg border border-border hover:bg-muted text-foreground transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe"
                                        disabled={status === "sending"}
                                        className="w-full mt-1.5 px-3 py-2 text-sm rounded-lg border border-border bg-background focus:ring-1 focus:ring-ring focus:border-ring outline-none transition-all disabled:opacity-50"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@example.com"
                                        disabled={status === "sending"}
                                        className="w-full mt-1.5 px-3 py-2 text-sm rounded-lg border border-border bg-background focus:ring-1 focus:ring-ring focus:border-ring outline-none transition-all disabled:opacity-50"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Hi, I'd love to connect regarding..."
                                        disabled={status === "sending"}
                                        className="w-full mt-1.5 px-3 py-2 text-sm rounded-lg border border-border bg-background focus:ring-1 focus:ring-ring focus:border-ring outline-none resize-none transition-all disabled:opacity-50"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending" || !name || !email || !message}
                                    className="w-full py-2.5 px-4 mt-2 inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "sending" ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
