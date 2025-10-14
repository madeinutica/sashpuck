import { Data } from "@measured/puck";
import fs from "fs";
import path from "path";

// Replace with call to your database
export const getPage = (p: string) => {
  const dbPath = path.join(process.cwd(), "database.json");

  const allData: Record<string, Data> | null = fs.existsSync(dbPath)
    ? JSON.parse(fs.readFileSync(dbPath, "utf-8"))
    : null;

  return allData ? allData[p] : null;
};
