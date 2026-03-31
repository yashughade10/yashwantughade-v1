"use client";

import { useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

const SpotlightBanner = () => {
    useEffect(() => {
        const all = document.querySelectorAll(".spotlight-card");

        const handleMouseMove = (ev: MouseEvent) => {
            all.forEach((e) => {
                const blob = e.querySelector(".blob") as HTMLElement;
                const fblob = e.querySelector(".fake-blob") as HTMLElement;

                if (!blob || !fblob) return;

                const rec = fblob.getBoundingClientRect();

                blob.style.opacity = "1";

                blob.animate(
                    [
                        {
                            transform: `translate(${
                                ev.clientX - rec.left - rec.width / 2
                            }px, ${ev.clientY - rec.top - rec.height / 2}px)`,
                        },
                    ],
                    {
                        duration: 300,
                        fill: "forwards",
                    }
                );
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="w-full">
            <div className="relative group w-full">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500"></div>

                <Card className="relative w-full rounded-2xl bg-[#111] border border-white/10 backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl">
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-4 min-w-0">
                                <div className="relative shrink-0">
                                    <img
                                        src="./profile-yellow-bg.png"
                                        alt="Profile"
                                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white/20 object-cover"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <h2 className="text-white text-lg sm:text-xl font-semibold truncate">
                                        Yashwant Ughade
                                    </h2>
                                    <p className="text-gray-400 text-xs sm:text-sm">
                                        Full Stack Developer
                                    </p>
                                </div>
                            </div>

                            <div className="flex sm:justify-end">
                                <a
                                    href="https://www.linkedin.com/in/yashwant-ughade-a04682220/"
                                    target="_blank"
                                >
                                    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
                                        <Link size={18} />
                                        Connect With Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SpotlightBanner;
