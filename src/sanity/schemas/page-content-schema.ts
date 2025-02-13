const pageContent = {
  name: "pageContent",
  title: "Page Content",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Title for the navbar section",
    },
    {
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", title: "Text", type: "string" },
            { name: "route", title: "Route", type: "string" },
          ],
        },
      ],
    },
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Hero Title",
          type: "string",
        },
        {
          name: "title_extra",
          title: "Extra Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Hero Subtitle",
          type: "string",
        },
        {
          name: "btnText",
          title: "Button Text",
          type: "string",
        },
        {
          name: "content",
          title: "Hero Content",
          type: "text",
        },
      ],
    },
  ],
};

export default pageContent;
