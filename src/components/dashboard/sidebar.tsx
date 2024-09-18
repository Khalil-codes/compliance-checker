"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutDashboard, Shield, Database, Clock, Users } from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "RLS Status", href: "/dashboard/rls", icon: Database },
  { name: "PITR Status", href: "/dashboard/pitr", icon: Clock },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-background lg:block dark:bg-gray-800/40">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Shield className="h-6 w-6" />
            <span className="">Compliance Checker</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidebarItems.map((item) => (
              <Link key={item.href} href={item.href} prefetch>
                <span
                  className={cn(
                    "text-muted-foreground flex items-center rounded-md px-3 py-2 transition-all hover:text-foreground dark:text-gray-400 dark:hover:text-gray-50",
                    { "bg-muted text-foreground": pathname === item.href },
                    "my-1"
                  )}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
}
