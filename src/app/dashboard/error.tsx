"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <Button onClick={reset}>Try Again</Button>
    </section>
  );
};

export default ErrorPage;
