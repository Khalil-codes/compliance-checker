"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PITRStatus } from "@/types";

type Props = {
  projects: PITRStatus[];
};

const PITRStatusTable = ({ projects }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>PITR Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell width={10} className="truncate">
              {project.id}
            </TableCell>
            <TableCell>{project.project_name}</TableCell>
            <TableCell>
              {project.pitr_enabled ? "Enabled" : "Disabled"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PITRStatusTable;
