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
