"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signInWithEmail } from "../actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginSchema = z.infer<typeof loginSchema>;

const DEFAULT_VALUES: LoginSchema = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { control, reset } = form;

  const onSubmit = async (data: LoginSchema) => {
    setIsSubmitting(true);
    toast.promise(async () => signInWithEmail(data), {
      loading: "Logging in",
      success: () => {
        reset(DEFAULT_VALUES);
        return "Login successful";
      },
      error: "Something went wrong. Please try again later.",
      finally: () => setIsSubmitting(false),
    });
  };

  return (
    <div className="flex flex-1 items-center justify-center bg-background">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="arya@stark.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="* * * * * * * *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="mt-4 w-full"
                type="submit"
                disabled={isSubmitting}>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
