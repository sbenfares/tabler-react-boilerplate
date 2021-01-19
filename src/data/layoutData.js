import packageJson from "../../package.json";

const headerItems = {
  name: "John Smith",
  role: "Lead dev",
  avatarImage: "/avatars/000m.jpg",
  links: [
    {
      text: "Test",
      url: "/test",
    },
    {
      text: "Test2",
      url: "/test2",
    },
    {
      divider: true,
    },
    {
      text: "Test3",
      url: "/test3",
    },
    {
      text: "Test3",
      url: "/test3",
    },
  ],
};

const menuItems = [
  {
    icon: "",
    text: "Test",
    url: "/test",
  },
  {
    icon: "",
    text: "Test",
    url: "/test",
  },
];

const footerItems = {
  copyright: "Copyright © 2021 Tabler for React - All rights reserved",
  version: `version ${packageJson.version}`,
  links: [
    {
      text: "TestLink",
      url: "/test",
    },
    {
      text: "TestLink2",
      url: "/test2",
    },
  ],
};

export { footerItems, headerItems, menuItems };
