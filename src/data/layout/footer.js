import packageJson from "../../../package.json";

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

export { footerItems };
