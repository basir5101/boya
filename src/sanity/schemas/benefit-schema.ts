import { Any } from "next-sanity";

const benefits = {
  name: "benefitSection",
  title: "Benefit Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Title for the benefit section",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "text",
    },
    {
      name: "btnText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "title",
              type: "string",
              validation: (Rule: Any) =>
                Rule.required().min(5).error("Title is required"),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule: Any) =>
                Rule.required().min(5).error("Description is required"),
            },
          ],
        },
      ],
    },
  ],
};

export default benefits;
