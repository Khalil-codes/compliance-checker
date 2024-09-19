import { getUser } from "@/lib/supabase/user";
import { Shield } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import Profile from "../dashboard/profile";
import { Skeleton } from "../ui/skeleton";
import { ModeToggle } from "../theme-toggle";

const Header = () => {
  return (
    <header className="bg-background/80 sticky top-0 flex h-14 items-center px-4 py-4 backdrop-blur-md lg:px-6 dark:bg-gray-900/80">
      <Link className="flex items-center justify-center" href="/">
        <Shield className="mr-2 h-6 w-6" />
        <span className="font-bold">Supabase Compliance Checker</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#features">
          Features
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#pricing">
          Pricing
        </Link>
        <Suspense
          fallback={
            <Skeleton className="bg-primary/30 h-8 w-8 rounded-full" />
          }>
          <User />
        </Suspense>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;

const User = async () => {
  const user = await getUser();

  if (!user)
    return (
      <Link
        className="text-sm font-medium underline-offset-4 hover:underline"
        href="/login">
        Login
      </Link>
    );

  return (
    <>
      <Link
        href="/dashboard"
        className="text-sm font-medium underline-offset-4 hover:underline">
        Dashboard
      </Link>
      <Profile user={user} />
    </>
  );
};
