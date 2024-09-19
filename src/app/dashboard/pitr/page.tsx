import { TableSkeleton } from "@/components/dashboard/skeletons";
import { getPITRStatus } from "@/services/dashboard";
import React, { Suspense } from "react";
import PITRStatusTable from "./client";

const PITRPage = () => {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <h3 className="text-xl font-semibold">Point-in-Time Recovery</h3>
        <p className="text-muted dark:text-muted-foreground mt-2 text-sm">
          Point-in-Time Recovery for all tables in a project
        </p>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <PITRTable />
      </Suspense>
    </section>
  );
};

export default PITRPage;

const PITRTable = async () => {
  const pitrStatus = await getPITRStatus();
  return <PITRStatusTable projects={pitrStatus} />;
};
