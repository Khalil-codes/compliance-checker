import { createAdminClient } from "@/lib/supabase/admin";

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
