import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button asChild>
        <Link className="mt-4 text-sm" href="/dashboard">
          Return Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
