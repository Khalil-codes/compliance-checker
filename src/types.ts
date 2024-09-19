export type RowLevelSecurityPolicy = {
  table_name: string;
  policy_name: string;
  presmissive: boolean;
  cmd: string;
};
