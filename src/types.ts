export type RowLevelSecurityPolicy = {
  table_name: string;
  policy_name: string;
  presmissive: boolean;
  cmd: string;
};

export type PITRStatus = {
  id: string;
  project_name: string;
  pitr_enabled: boolean;
};
