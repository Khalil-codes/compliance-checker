import { ModeToggle } from "@/components/theme-toggle";
import { getUser } from "@/lib/supabase/user";
import Profile from "./profile";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {
  shouldHideLogo?: boolean;
};

export function TopNav({ shouldHideLogo = false }: Props) {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-6 dark:bg-gray-800/40">
      <div className="flex flex-1 items-center justify-between">
        {!shouldHideLogo ? (
          <h1 className="text-lg font-semibold">Supabase Compliance Checker</h1>
        ) : (
          <div />
        )}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Suspense
            fallback={
              <Skeleton className="bg-primary/30 h-8 w-8 rounded-full" />
            }>
            <User />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

const User = async () => {
  const user = await getUser();

  if (!user) return null;

  return <Profile user={user} />;
};
