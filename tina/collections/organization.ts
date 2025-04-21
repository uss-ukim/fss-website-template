import { z } from "zod";
import type { Collection } from "tinacms";

export const organizationSchema = z.object({
  slug: z.string(),
  lang: z.string(),
  name: z.string(),
  long_name: z.string(),
  logo: z.string(),

  about: z.object({
    image: z.string().optional(),
    text: z.string(),
  }),

  mission: z.object({
    mission: z.string(),
  }),

  faculty: z
    .object({
      image: z.string().optional(),
      text: z.string(),
      website_url: z.string(),
      google_maps_name: z.string().optional(),
    })
    .optional(),

  contact: z.object({
    email: z.string().optional(),
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    linkedin: z.string().optional(),
    additional: z.array(
      z.object({
        type: z.enum(["email", "phone_number", "website"]),
        value: z.string(),
        label: z.string().optional(),
      }),
    ),
  }),

  team: z
    .array(
      z.object({
        image: z.string().optional(),
        name: z.string(),
        position: z.string(),
        contact: z.object({
          email: z.string().optional(),
          instagram: z.string().optional(),
          linkedin: z.string().optional(),
        }),
      }),
    )
    .optional(),

  ombudsman: z
    .object({
      image: z.string().optional(),
      name: z.string(),
      description: z.string(),
      contact: z.object({
        email: z.string().optional(),
        instagram: z.string().optional(),
        linkedin: z.string().optional(),
      }),
    })
    .optional(),
});

export const OrganizationCollection: Collection = {
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
      name: "lang",
      label: "Language Code",
      description: "Example: mk, en",
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
      label: "Faculty Information",
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
        {
          type: "string",
          name: "website_url",
          label: "Website Link",
          ui: {
            validate(value = "") {
              if (value && !value.endsWith(".ukim.mk")) {
                return "Website URL must end with .ukim.mk";
              }
            },
          },
        },
        {
          type: "string",
          name: "google_maps_name",
          label: "Google Maps Name",
          description: "Name of the faculty in Google Maps",
        },
      ],
    },
    {
      type: "object",
      name: "contact",
      label: "Contact",
      fields: [
        { type: "string", name: "email", label: "Email" },
        { type: "string", name: "instagram", label: "Instagram" },
        { type: "string", name: "facebook", label: "Facebook" },
        { type: "string", name: "linkedin", label: "LinkedIn" },
        {
          type: "object",
          name: "additional",
          label: "Additional Contacts",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.value ? `${item.value} (${item.label})` : "Contact",
            }),
          },
          fields: [
            {
              type: "string",
              name: "type",
              label: "Type",
              options: [
                { label: "Email", value: "email" },
                { label: "Phone Number", value: "phone_number" },
                { label: "Website", value: "website" },
              ],
            },
            { type: "string", name: "value", label: "Value", description: "e.g. +389 12345678" },
            { type: "string", name: "label", label: "Label" },
          ],
        },
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
