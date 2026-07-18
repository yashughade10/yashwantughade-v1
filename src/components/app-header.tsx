"use client";

import { useTheme } from "next-themes";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/hooks/use-contact-modal";
import { figtree } from "@/lib/fonts";

export function AppHeader() {
    const { theme, setTheme } = useTheme();
    const { openModal } = useContactModal();

    return (
        <header className={`${figtree.className} sticky top-0 z-10 flex py-3 shrink-0 items-center justify-between gap-2 px-4 border-b bg-background shadow-sm`}>
            <SidebarTrigger />
            <div className="flex items-center gap-5">
                <Toggle
                    pressed={theme === "dark"}
                    onPressedChange={(pressed) =>
                        setTheme(pressed ? "dark" : "light")
                    }
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? (
                        <Moon className="h-4 w-4" />
                    ) : (
                        <Sun className="h-4 w-4" />
                    )}
                </Toggle>

                <Button onClick={openModal}>Contact Me</Button>
            </div>
        </header>
    );
}
