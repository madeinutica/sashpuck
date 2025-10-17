"use client";
import { Render } from "@measured/puck";
import puckConfig from "../puck.config";

export default function PuckCMS({ data }) {
  if (!puckConfig || !puckConfig.components || Object.values(puckConfig.components).some(c => !c)) {
    throw new Error("Invalid puckConfig: missing components or undefined component entries");
  }
  if (!data || !Array.isArray(data.content)) {
    throw new Error("Invalid data: missing or malformed content array");
  }
  console.log("Render config:", puckConfig);
  console.log("Render data:", data);
  return <Render config={puckConfig} data={data} />;
}
