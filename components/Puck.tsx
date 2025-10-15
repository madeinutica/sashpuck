
import { Puck } from "@measured/puck";
import puckConfig from "../puck.config";
import fs from "fs";
import path from "path";

export default function PuckCMS() {
  // Load win page data from JSON file
  const dataPath = path.join(process.cwd(), "data", "win.json");
  let blocks = [];
  try {
    const file = fs.readFileSync(dataPath, "utf8");
    blocks = JSON.parse(file).blocks || [];
  } catch (e) {
    // fallback to empty blocks
  }
  // Puck expects { content: [...] }
  const data = { content: blocks };
  return <Puck config={puckConfig} data={data} />;
}
