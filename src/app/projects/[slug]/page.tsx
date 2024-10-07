import { getProject } from "@/sanity/sanity-utills";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = await getProject(slug);

  console.log("project", project);
  return <div>page</div>;
}
