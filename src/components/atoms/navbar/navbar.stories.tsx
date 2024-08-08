import Navbar from "./navbar";

export const Default = {
  args: {
    navItems: [
      { title: "Home", href: "/" },
      { title: "About", href: "/" },
      { title: "Items", href: "/" },
      { title: "Pages", href: "/" },
      { title: "Contact", href: "/" },
    ],
    size: "medium",
  },
};
export const Small = {
  args: {
    navItems: [
      { title: "Home", href: "/" },
      { title: "About", href: "/" },
      { title: "Items", href: "/" },
      { title: "Pages", href: "/" },
      { title: "Contact", href: "/" },
    ],
    size: "small",
  },
};
export const Medium = {
  args: {
    navItems: [
      { title: "Home", href: "/" },
      { title: "About", href: "/" },
      { title: "Items", href: "/" },
      { title: "Pages", href: "/" },
      { title: "Contact", href: "/" },
    ],
    size: "medium",
  },
};

export const Large = {
  args: {
    navItems: [
      { title: "Home", href: "/" },
      { title: "About", href: "/" },
      { title: "Items", href: "/" },
      { title: "Pages", href: "/" },
      { title: "Contact", href: "/" },
    ],
    size: "large",
  },
};

const navbarConfig = {
  title: "Atoms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default navbarConfig;
