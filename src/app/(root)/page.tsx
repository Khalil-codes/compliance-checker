// app/(marketing)/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Database, Clock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Ensure Your Supabase Configuration is Compliant
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Easily check and manage your Supabase setup for MFA, RLS, and
                  PITR compliance.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/signup">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CheckCircle className="mb-2 h-8 w-8 text-green-500" />
                  <CardTitle>MFA Status Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Verify Multi-Factor Authentication status for all users to
                    enhance security.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Database className="mb-2 h-8 w-8 text-blue-500" />
                  <CardTitle>RLS Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ensure Row Level Security is properly configured for all
                    your database tables.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="mb-2 h-8 w-8 text-purple-500" />
                  <CardTitle>PITR Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Check Point-in-Time Recovery settings to safeguard your data
                    against accidental loss.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple Pricing
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Plan</CardTitle>
                  <CardDescription>
                    For small projects and individual developers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 text-4xl font-bold">$9/month</div>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Up to 5 projects</li>
                    <li>Daily compliance checks</li>
                    <li>Email notifications</li>
                  </ul>
                  <Button className="mt-auto w-full">Choose Basic</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro Plan</CardTitle>
                  <CardDescription>
                    For teams and larger applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 text-4xl font-bold">$29/month</div>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Unlimited projects</li>
                    <li>Real-time compliance monitoring</li>
                    <li>Advanced reporting and analytics</li>
                    <li>Priority support</li>
                  </ul>
                  <Button className="w-full">Choose Pro</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
