import { getRLSStatus } from "@/services/dashboard";
import React, { Suspense } from "react";
import RowLevelSecurityStatusTable from "./client";
import { TableSkeleton } from "@/components/dashboard/skeletons";

const RowLevelSecurityPage = () => {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <h3 className="text-xl font-semibold">Row Level Security Status</h3>
        <p className="text-muted dark:text-muted-foreground mt-2 text-sm">
          Policies for all tables in a project
        </p>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <PolicyTable />
      </Suspense>
    </section>
  );
};

export default RowLevelSecurityPage;

const PolicyTable = async () => {
  const policies = await getRLSStatus();

  return <RowLevelSecurityStatusTable policies={policies} />;
};
