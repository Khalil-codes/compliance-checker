import React, { Suspense } from "react";
import UserTable from "./client";
import { TableSkeleton } from "@/components/dashboard/skeletons";
import { getUsers } from "@/services/dashboard";

const UsersPage = () => {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <h3 className="text-xl font-semibold">Users</h3>
        <p className="text-muted dark:text-muted-foreground mt-2 text-sm">
          Multi-Factor Authentication status for all users
        </p>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <UsersTable />
      </Suspense>
    </section>
  );
};

export default UsersPage;

const UsersTable = async () => {
  const users = await getUsers();
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <UserTable users={users} />;
};
