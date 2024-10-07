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
        }`,
    {},
    { cache: "no-cache" }
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
    { slug },
    { cache: "no-cache" }
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
        }[0]`,
    {},
    { cache: "no-cache" }
  );
}

export async function getServicesSection() {
  return client.fetch(
    groq`*[_type == "servicesSection"]{
      title,
      summary,
      services[] {
        title,
        description,
        "imageUrl": image.asset->url
      }
    }[0]`,
    {},
    { cache: "no-cache" }
  );
}

export async function getClientSection() {
  return client.fetch(
    groq`*[_type == "clientSection"]{
      title,
      subTitle,
      clients[] {
        name,
        role,
        restaurant,
        testimonial,
        "imageUrl": image.asset->url
      }
    }[0]`,
    {},
    { cache: "no-cache" }
  );
}

export async function getBenefitSection() {
  return client.fetch(
    groq`*[_type == "benefitSection"]{
      title,
      subTitle,
      btnText,
      benefits[] {
        title,
        description,
      }
    }[0]`,
    {},
    { cache: "no-cache" }
  );
}
