"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useRef, useState } from "react";

const mfaSchema = z.object({
  otp: z.string(),
});

export type MFASchema = z.infer<typeof mfaSchema>;

const DEFAULT_VALUES: MFASchema = {
  otp: "",
};

export default function MFAPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasEnrolled = useRef<boolean>(false);
  const [factorId, setFactorId] = useState<string | null>(null);
  const form = useForm<MFASchema>({
    resolver: zodResolver(mfaSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { control, reset } = form;

  useEffect(() => {
    if (!hasEnrolled.current) {
      handleEnroll();
      hasEnrolled.current = true;
    }
  }, []);

  const handleEnroll = async () => {
    setFactorId(null);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleVerify: SubmitHandler<MFASchema> = async (data) => {
    setIsSubmitting(true);
    const otp = data.otp;

    console.log(otp);

    if (!factorId) {
      toast.error("Please enter the code sent to your phone");
      setIsSubmitting(false);
      return;
    }

    toast.promise(
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      },
      {
        loading: "Verifying code",
        success: () => {
          reset(DEFAULT_VALUES);
          return "Code verified";
        },
        error: "Error verifying code",
        finally: () => setIsSubmitting(false),
      }
    );
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Set up MFA</CardTitle>
          <CardDescription>
            Enhance your account security with Multi-Factor Authentication
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button
            onClick={() => {
              console.log(factorId);
            }}>
            Send Verification Code
          </Button>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleVerify)}
              className="flex flex-col gap-4">
              <FormField
                control={control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the 6-digit code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="mt-4 w-full"
                type="submit"
                disabled={isSubmitting}>
                Verify
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
