import type { Collection } from "tinacms";

export const organizationCollection: Collection = {
  label: "Organizations",
  name: "organization",
  path: "content/organizations",
  format: "yaml",
  fields: [
    {
      type: "string",
      name: "slug",
      label: "Slug",
      required: true,
    },
    {
      type: "string",
      name: "name",
      label: "Short Name",
      required: true,
    },
    {
      type: "string",
      name: "long_name",
      label: "Long Name",
      required: true,
    },
    {
      type: "image",
      name: "logo",
      label: "Logo Image",
      required: true,
    },
    {
      type: "object",
      name: "about",
      label: "About Section",
      required: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Organization Image",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text Content",
        },
      ],
    },
    {
      type: "object",
      name: "mission",
      label: "Mission Section",
      required: true,
      fields: [
        {
          type: "rich-text",
          name: "mission",
          label: "Text Content",
        },
      ],
    },
    {
      type: "object",
      name: "faculty",
      label: "Faculty Section",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Faculty Image",
        },
        {
          type: "rich-text",
          name: "text",
          label: "Text Content",
        },
      ],
    },
    {
      type: "object",
      name: "contact",
      label: "Contact",
      fields: [
        { type: "string", name: "address", label: "Address" },
        { type: "string", name: "email", label: "Email" },
        { type: "string", name: "instagram", label: "Instagram" },
        { type: "string", name: "facebook", label: "Facebook" },
      ],
    },
    {
      type: "object",
      name: "team",
      label: "Team",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name || "Team member" }),
      },
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "name",
          label: "Full Name",
        },
        {
          type: "string",
          name: "position",
          label: "Position",
        },
        {
          type: "object",
          name: "contact",
          label: "Contact",
          fields: [
            { type: "string", name: "email", label: "Email" },
            { type: "string", name: "instagram", label: "Instagram" },
            { type: "string", name: "linkedin", label: "LinkedIn" },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "ombudsman",
      label: "Ombudsman",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "name",
          label: "Full Name",
        },
        {
          type: "rich-text",
          name: "description",
          label: "Description",
        },
        {
          type: "object",
          name: "contact",
          label: "Contact",
          fields: [
            { type: "string", name: "email", label: "Email" },
            { type: "string", name: "instagram", label: "Instagram" },
            { type: "string", name: "linkedin", label: "LinkedIn" },
          ],
        },
      ],
    },
  ],
};
