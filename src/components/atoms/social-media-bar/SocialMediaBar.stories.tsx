import SocialMediaBar from "./SocialMediaBar";

export const Default = {
  args: {
    socialMedias: [
      { icon: "icons/instagram.svg", href: "/" },
      { icon: "icons/facebook.svg", href: "/" },
      { icon: "icons/twitter.svg", href: "/" },
      { icon: "icons/linkedin.svg", href: "/" },
    ],
    size: "medium",
  },
};

export const Small = {
  args: {
    socialMedias: [
      { icon: "icons/instagram.svg", href: "https://www.instagram.com" },
      { icon: "icons/facebook.svg", href: "/" },
      { icon: "icons/twitter.svg", href: "/" },
      { icon: "icons/linkedin.svg", href: "/" },
    ],
    size: "small",
  },
};

export const Medium = {
  args: {
    socialMedias: [
      { icon: "icons/instagram.svg", href: "/" },
      { icon: "icons/facebook.svg", href: "/" },
      { icon: "icons/twitter.svg", href: "/" },
      { icon: "icons/linkedin.svg", href: "/" },
    ],
    size: "medium",
  },
};

export const Large = {
  args: {
    socialMedias: [
      { icon: "icons/instagram.svg", href: "/" },
      { icon: "icons/facebook.svg", href: "/" },
      { icon: "icons/twitter.svg", href: "/" },
      { icon: "icons/linkedin.svg", href: "/" },
    ],
    size: "large",
  },
};

const socialMediaBarConfig = {
  title: "Atoms/SocialMediaBar",
  component: SocialMediaBar,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default socialMediaBarConfig;
