"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RowLevelSecurityPolicy } from "@/types";
type Props = {
  policies: RowLevelSecurityPolicy[];
};

const CMD_MAP: Record<string, string> = {
  r: "Read",
  w: "Write",
  a: "Append",
  d: "Delete",
  x: "Execute",
};

const RowLevelSecurityStatusTable = ({ policies }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Table Name</TableHead>
          <TableHead>Policy Name</TableHead>
          <TableHead>Permissive</TableHead>
          <TableHead>Command</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {policies.map((policy) => (
          <TableRow key={policy.policy_name}>
            <TableCell>{policy.table_name || "--"}</TableCell>
            <TableCell>{policy.policy_name || "--"}</TableCell>
            <TableCell>{policy.presmissive ? "Yes" : "No"}</TableCell>
            <TableCell>{CMD_MAP[policy.cmd] || "--"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RowLevelSecurityStatusTable;
