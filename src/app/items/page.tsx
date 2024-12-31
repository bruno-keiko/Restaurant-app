import ItemsPage from "@/components/pages/ItemsPage";
import React from "react";
import { mockData } from "./mockDate";
const Page = () => {
  return <ItemsPage items={mockData} />;
};

export default Page;
