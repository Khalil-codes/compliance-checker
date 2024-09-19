import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

export const getUsers = async () => {
  const admin = createAdminClient();
  const supabase = createClient();

  const {
    data: { users },
    error,
  } = await admin.listUsers();

  const test = await admin.mfa.listFactors({ userId: users[0].id });
  const test2 = await supabase.auth.mfa.listFactors();

  console.log(JSON.stringify(test, null, 2));
  console.log(JSON.stringify(users[0], null, 2));
  console.log(JSON.stringify(test2, null, 2));

  if (error) {
    throw error;
  }

  return users;
};
