import { Any } from "next-sanity";

const marketing = {
  name: "marketingSection",
  title: "Marketing Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Title for the marketing section",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "btnText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
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
              name: "icons",
              title: "Icons",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "icon",
                      title: "Social Icon",
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
        },
      ],
    },
  ],
};

export default marketing;
