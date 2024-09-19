import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { RowLevelSecurityPolicy } from "@/types";

export const getUsers = async () => {
  const admin = createAdminClient();

  const {
    data: { users },
    error,
  } = await admin.listUsers();

  if (error) {
    throw error;
  }

  return users;
};

export const getRLSStatus = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .rpc("get_rls_policies_for_all_tables")
    .select("*");

  if (error) {
    throw error;
  }

  return data as RowLevelSecurityPolicy[];
};

export const getPITRStatus = async () => {
  // Mock data, replace with actual Supabase project ID and details
  const projects = [
    {
      id: "a0b5e7ac-740c-44f2-b6b3-9468456a0f3a",
      project_name: "project_1",
      pitr_enabled: true,
    },
    {
      id: "293bbd27-9018-45e5-9efb-1a5c774c1aa6",
      project_name: "project_2",
      pitr_enabled: false,
    },
    {
      id: "37f5a2af-eb59-451f-9442-3866831029bb",
      project_name: "project_3",
      pitr_enabled: true,
    },
    {
      id: "69286e6a-019c-4cb6-b21d-7e775b43c1ab",
      project_name: "project_4",
      pitr_enabled: false,
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return projects;
};
