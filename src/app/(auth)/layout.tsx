import { TopNav } from "@/components/dashboard/top-nav";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background dark:bg-gray-900">
      <TopNav />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
