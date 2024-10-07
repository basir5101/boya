import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "0jwvveeh",
  dataset: "production",
  title: "BOYA",
  apiVersion: "2024-10-07",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
