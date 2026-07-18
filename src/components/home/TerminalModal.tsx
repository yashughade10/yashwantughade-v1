"use client";

import { useEffect, useMemo, useState } from "react";

export default function TerminalModal() {
    const commands = useMemo(
        () => [
            "npm start",
            "connecting to server...",
            "initializing yashwant...",
        ],
        []
    );
    const successMessage = "Loaded yashwant_ughade.js successfully";

    const [lines, setLines] = useState<string[]>([]);
    const [currentText, setCurrentText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showModal, setShowModal] = useState(true);
    const [countdown, setCountdown] = useState(3);

    const showSuccess = lineIndex >= commands.length;

    useEffect(() => {
        if (showSuccess) {
            return;
        }

        if (charIndex < commands[lineIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + commands[lineIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 40);

            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setLines((prev) => [...prev, commands[lineIndex]]);
            setCurrentText("");
            setCharIndex(0);
            setLineIndex((prev) => prev + 1);
        }, 500);

        return () => clearTimeout(timeout);
    }, [charIndex, commands, lineIndex, showSuccess]);

    useEffect(() => {
        if (!showSuccess) {
            return;
        }

        if (countdown === 0) {
            const timer = setTimeout(() => {
                setShowModal(false);
            }, 0);
            return () => clearTimeout(timer);
        }

        const timeout = setTimeout(() => {
            setCountdown((value) => value - 1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [countdown, showSuccess]);

    if (!showModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="w-full max-w-2xl rounded-xl border border-gray-700 bg-[#0d1117] p-6 font-mono text-green-400 shadow-lg md:p-8">
                <div className="mb-4 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>

                {lines.map((line) => (
                    <div key={line}>
                        <span className="text-green-500">$ </span>
                        {line}
                    </div>
                ))}

                {!showSuccess && (
                    <div>
                        <span className="text-green-500">$ </span>
                        {currentText}
                        <span className="cursor">|</span>
                    </div>
                )}

                {showSuccess && (
                    <div className="mt-2 text-green-300">{successMessage}</div>
                )}

                {showSuccess && (
                    <p className="mt-4 text-sm text-gray-400">
                        building scalable web apps, crafting clean UIs, solving
                        real problems
                    </p>
                )}

                {showSuccess && countdown > 0 && (
                    <p className="mt-2 text-sm text-gray-500">
                        closing in {countdown}...
                    </p>
                )}
            </div>
        </div>
    );
}
