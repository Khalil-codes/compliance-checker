"use client";

import React, { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "../ui/avatar";
import { UserResponse } from "@supabase/supabase-js";
import { getInitials } from "@/lib/utils";
import { logout } from "@/app/(auth)/actions";
import { User } from "lucide-react";

type Props = {
  user: NonNullable<UserResponse["data"]["user"]>;
};

const Profile = ({ user }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleLogout = async () => {
    startTransition(() => {
      logout();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
          <Avatar className="h-8 w-8">
            {/* {user.user_metadata?.avatar_url && (
              <AvatarImage
                src={user.user_metadata.avatar_url}
                alt={user.email}
              />
            )} */}
            <AvatarFallback className="w-full">
              {getInitials(
                user.user_metadata.name || user.user_metadata.full_name
              ) || <User size={16} />}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.user_metadata.name ||
                user.user_metadata.full_name ||
                "User"}
            </p>
            <p className="text-muted-foreground text-xs leading-none">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button
            variant="ghost"
            className="w-full"
            onClick={handleLogout}
            disabled={isPending}
            size={"sm"}>
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
