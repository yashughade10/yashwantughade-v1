"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const SpotlightBanner = () => {
    useEffect(() => {
        const all = document.querySelectorAll(".spotlight-card");

        const handleMouseMove = (event: MouseEvent) => {
            all.forEach((element) => {
                const blob = element.querySelector(".blob") as HTMLElement | null;
                const fakeBlob = element.querySelector(
                    ".fake-blob"
                ) as HTMLElement | null;

                if (!blob || !fakeBlob) {
                    return;
                }

                const rect = fakeBlob.getBoundingClientRect();

                blob.style.opacity = "1";
                blob.animate(
                    [
                        {
                            transform: `translate(${
                                event.clientX - rect.left - rect.width / 2
                            }px, ${
                                event.clientY - rect.top - rect.height / 2
                            }px)`,
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
            <div className="group relative w-full">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-60 blur-md transition duration-500 group-hover:opacity-100"></div>

                <Card className="relative w-full rounded-2xl border border-white/10 bg-[#111] backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl">
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex min-w-0 items-center gap-4">
                                <div className="relative shrink-0">
                                    <Image
                                        src="/profile-yellow-bg.png"
                                        alt="Profile"
                                        width={80}
                                        height={80}
                                        className="h-16 w-16 rounded-full border-4 border-white/20 object-cover sm:h-20 sm:w-20"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <h2 className="truncate text-lg font-semibold text-white sm:text-xl">
                                        Yashwant Ughade
                                    </h2>
                                    <p className="text-xs text-gray-400 sm:text-sm">
                                        Full Stack Developer
                                    </p>
                                </div>
                            </div>

                            <div className="flex sm:justify-end">
                                <Link
                                    href="https://www.linkedin.com/in/yashwant-ughade-a04682220/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:from-sky-400 hover:to-blue-500 hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-base"
                                >
                                    <LinkIcon size={18} />
                                    Connect With Me
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SpotlightBanner;
