import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppHeader } from "@/components/app-header";
import TerminalModal from "@/components/home/TerminalModal";
import { ContactModal } from "@/components/contact-modal";

import "./globals.css";

export const metadata: Metadata = {
    title: "Yashwant Ughade | Full Stack Software Engineer",
    description:
        "Portfolio of Yashwant Ughade - Full Stack Software Engineer specializing in building scalable software, AI-powered applications, and modern web experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
            <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    {/* <TerminalModal /> */}
                    <ContactModal />
                    <TooltipProvider>
                        <SidebarProvider>
                            <AppSidebar />
                            <SidebarInset>
                                <AppHeader />
                                <div className="flex flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8 w-full">
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
