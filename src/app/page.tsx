import CopyrightInfo from "@/components/atoms/CopyrightInfo";
import MainContainer from "@/components/atoms/mainContainer/MainContainer";
import DeliverySection from "@/components/molecules/DeliverySection";
import Header from "@/components/molecules/Header";
import RichAndHealthy from "@/components/molecules/RichAndHealthy";
import SpecialMenu from "@/components/molecules/SpecialMenu";

export default function Home() {
  const meals = Array.from({ length: 10 }, (a, index) => ({
    id: index,
    image: "/images/image_richHealthy_2.png",
    title: "Hot Dogs",
  }));
  return (
    <>
      <Header />
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <MainContainer>
          <DeliverySection />
          <SpecialMenu meals={meals} />
          <RichAndHealthy />
        </MainContainer>
      </div>
      <CopyrightInfo text={"\u00A9 2024 My Website. All rights reserved"} />
    </>
  );
}
