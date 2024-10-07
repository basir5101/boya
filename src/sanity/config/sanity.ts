import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "0jwvveeh",
  dataset: "production",
  apiVersion: "2024-10-07",
  useCdn: false,
});
