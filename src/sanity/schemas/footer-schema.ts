import { Any } from "next-sanity";

const footer = {
  name: "footerSection",
  title: "Footer Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Title for the footer section",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "subtitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "btnText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule: Any) =>
                Rule.required().min(3).error("Title is required"),
            },
            {
              name: "route",
              title: "Route",
              type: "string",
              validation: (Rule: Any) =>
                Rule.required().min(5).error("Description is required"),
            },
          ],
        },
      ],
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
  ],
};

export default footer;
