"use client";

import SpotlightBanner from "@/components/home/SpotlightBanner";

const greetings = [
    "नमस्ते",
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "হ্যালো",
    "こんにちは",
    "வணக்கம்",
    "ಹಲೋ",
    "你好",
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
];

export default function Home() {
    return (
        <div className="space-y-8 px-10 py-6">
            <SpotlightBanner />

            <div className="flex flex-col items-start justify-center">
                <h1 className="mb-6 text-6xl font-bold text-purple-300">
                    {greetings[0]}!
                </h1>

                <p className="mb-6 text-lg text-gray-700">
                    {greetings.join(", ")}
                </p>

                <p className="mb-2 text-xl">
                    I&apos;m{" "}
                    <span className="font-semibold">Yashwant Ughade</span>
                </p>

                <p className="mb-6 text-gray-600">
                    I build fast, scalable, clean web experiences.
                </p>

                <button className="rounded-lg bg-purple-400 px-6 py-3 text-white shadow-md transition hover:scale-105">
                    HIRE ME
                </button>
            </div>
        </div>
    );
}
