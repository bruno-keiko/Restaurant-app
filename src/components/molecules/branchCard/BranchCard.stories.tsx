import BranchCard from "./BranchCard";

export const Default = {
  args: {
    name: "Robert Food",
    address: "1986 Hilltop DriveBorger, TX 79007",
    time: "7.30 AM - 9.30 PM",
    tel: "+880 1630 225 015",
    location: "#",
  },
};

const branchCard = {
  title: "Molecules/BranchCard",
  component: BranchCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default branchCard;
