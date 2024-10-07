import { Project } from "@/types/project";
import { groq } from "next-sanity";
import { client } from "./config/sanity";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url, 
        content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type=="project" && slug.current == $slug]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url, 
        content
        }`,
    { slug }
  );
}

export async function getPageContent() {
  return client.fetch(
    groq`*[_type == "pageContent"]{
        navItems[]{text, route},
         hero {
                title,
                subtitle,
                btnText,
                content
            }
        }[0]`
  );
}
