import Navbar from "./Navbar";

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

const navbarConfig = {
  title: "Atoms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default navbarConfig;
