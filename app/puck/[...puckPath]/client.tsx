"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "../../../puck.config";
import { supabase } from "../../../lib/supabase";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  // Save to Supabase pages table
  const onPublish = async (newData: Data) => {
    const { error } = await supabase
      .from("pages")
      .upsert([{ path, data: newData }], { onConflict: "path" });
    if (error) {
      alert("Failed to save data: " + error.message);
    } else {
      alert("Page data saved to Supabase!");
    }
  };

  return (
    <Puck
      config={config}
      data={data}
      onPublish={onPublish}
    />
  );
}
