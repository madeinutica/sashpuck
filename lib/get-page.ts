import { Data } from "@measured/puck";
import { supabase } from "./supabase";

// Replace with call to your database
export const getPage = async (path: string): Promise<Data | null> => {
  const { data, error } = await supabase
    .from("pages")
    .select("data")
    .eq("path", path)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // PGRST116: "The result contains 0 rows" - this is not an error for us
      return null;
    }
    console.error(error);
    return null;
  }

  return data.data;
};
