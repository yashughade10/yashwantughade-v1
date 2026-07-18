"use client";
import * as React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import {
    Briefcase,
    CodeXml,
    Command,
    GitBranch,
    Home,
    List,
    QrCode,
    ShieldHalf,
    User,
    User2Icon,
} from "lucide-react";
import Link from "next/link";
import { inter, figtree, outfit } from "@/lib/fonts";

type NavItem = {
    title: string;
    url: `/${string}` | `#${string}` | `https://${string}`;
    icon?: React.ReactNode;
    isActive?: boolean;
};

type NavGroup = {
    title: string;
    url: string;
    items: NavItem[];
};

const data: { navMain: NavGroup[] } = {
    navMain: [
        {
            title: "Menu",
            url: "#",
            items: [
                {
                    title: "Home",
                    url: "/",
                    // icon: <Home1 height={24} width={24} strokeWidth={0} color={"#FCFCFD"} />,
                    icon: <Home />,
                },
                {
                    title: "About",
                    url: "/about",
                    // icon: <IdCard height={24} width={24} strokeWidth={0} color={"#FCFCFD"} />,
                    icon: <User2Icon />,
                },
                {
                    title: "Experience",
                    url: "/experience",
                    icon: <Briefcase />,
                },
                {
                    title: "Projects",
                    url: "/projects",
                    // icon: <Description height={24} width={24} strokeWidth={0} color={"#FCFCFD"} />,
                    icon: <List />,
                },
            ],
        },
        {
            title: "Social",
            url: "#",
            items: [
                {
                    title: "Github",
                    url: "https://github.com/yashughade10",
                    icon: <GitBranch />,
                },
                {
                    title: "LinkedIn",
                    url: "https://www.linkedin.com/in/yashwant-ughade-a04682220/",
                    icon: <QrCode />,
                    isActive: true,
                },
                {
                    title: "Leetcode",
                    url: "https://leetcode.com/yashughade/",
                    icon: <CodeXml />,
                },
                {
                    title: "HackerRank",
                    url: "https://www.hackerrank.com/profile/yashughade24",
                    icon: <ShieldHalf />,
                },
                {
                    title: "Portfolio",
                    url: "#",
                    icon: <User />,
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" className={inter.className} {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className={`truncate font-bold ${outfit.className}`}>
                                        Yashwant Ughade
                                    </span>
                                    <span className="truncate text-xs">
                                        SDE - I
                                    </span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {data.navMain.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel className={`${figtree.className} font-semibold text-xs tracking-wider`}>
                            {item.title}
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={item.isActive}
                                            tooltip={item.title}
                                            className="py-2!"
                                        >
                                            <Link
                                                href={item.url}
                                                className="flex items-center gap-2 py-4"
                                            >
                                                {item.icon && (
                                                    <span className="size-4">
                                                        {item.icon}
                                                    </span>
                                                )}
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
