import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppHeader } from "@/components/app-header";
import TerminalModal from "@/components/home/TerminalModal";

import "./globals.css";

export const metadata: Metadata = {
    title: "Yashwant Ughade",
    description:
        "Experienced Full-stack developer, building user-focused applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full antialiased">
            <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <TerminalModal />
                    <TooltipProvider>
                        <SidebarProvider>
                            <AppSidebar />
                            <SidebarInset>
                                <AppHeader />
                                <div className="flex flex-1 flex-col gap-4 p-4 px-4 sm:px-6 lg:px-8">
                                    {children}
                                </div>
                            </SidebarInset>
                        </SidebarProvider>
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
