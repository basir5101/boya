import { Any } from "next-sanity";

const clients = {
  name: "clientSection",
  title: "Clients Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Title for the client section",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "clients",
      title: "Clients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule: Any) =>
                Rule.required().min(5).error("Name is required"),
            },
            {
              name: "role",
              title: "Role",
              type: "string",
              validation: (Rule: Any) =>
                Rule.required().min(5).error("Name is required"),
            },
            {
              name: "restaurant",
              title: "Restaurant",
              type: "string",
              validation: (Rule: Any) =>
                Rule.required().min(5).error("Name is required"),
            },
            {
              name: "testimonial",
              title: "Client Testimonial",
              type: "text",
              validation: (Rule: Any) =>
                Rule.required().min(10).error("Testimonial is required"),
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
  ],
};

export default clients;
