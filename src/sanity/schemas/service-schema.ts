import { Any } from "next-sanity";

const services = {
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Title for the services section",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Service Title",
              type: "string",
              validation: (Rule: Any) =>
                Rule.required().min(5).error("Title is required"),
            },
            {
              name: "description",
              title: "Service Description",
              type: "text",
              validation: (Rule: Any) =>
                Rule.required().min(10).error("Description is required"),
            },
            {
              name: "image",
              title: "Service Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule: Any) =>
                Rule.required().error("Image is required"),
            },
          ],
        },
      ],
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
  ],
};

export default services;
