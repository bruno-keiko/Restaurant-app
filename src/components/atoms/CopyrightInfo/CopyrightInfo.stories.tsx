import CopyrightInfo from "./CopyrightInfo";

export const Default = {
  args: {
    text: "�� 2024 My Website. All rights reserved",
  },
};

const copyrightInfoConfig = {
  title: "Atoms/CopyrightInfo",
  component: CopyrightInfo,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default copyrightInfoConfig;
