"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { LoginSchema } from "./login/page";
import { SignupSchema } from "./signup/page";

export const signInWithEmail = async (data: LoginSchema) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    throw new Error("Could not login. Please try again later.");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
};

export const signUpWithEmail = async (data: SignupSchema) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        full_name: data.name,
        avatar_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          data.name
        )}&background=random&rounded=true`,
        name: data.name,
      },
    },
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
};

export const logout = async () => {
  const supabase = createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/login/");
};
