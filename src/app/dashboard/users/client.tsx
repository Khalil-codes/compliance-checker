"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@supabase/supabase-js";
type Props = {
  users: User[];
};

const UserTable = ({ users }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>MFA Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              {user.user_metadata.full_name || user.user_metadata.name || "--"}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              {user.factors?.some((factor) => factor.status === "verified")
                ? "Enabled"
                : "Disabled"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
