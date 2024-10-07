import CopyrightInfo from "@/components/atoms/CopyrightInfo";
import MainContainer from "@/components/atoms/mainContainer/MainContainer";
import DeliverySection from "@/components/molecules/DeliverySection";
import Header from "@/components/molecules/Header";
import MainCarousel from "@/components/molecules/MainCarousel";
import RichAndHealthy from "@/components/molecules/RichAndHealthy";
import SpecialMenu from "@/components/molecules/SpecialMenu";
import BigOfferSection from "@/components/templates/bigOfferSection/BigOfferSection";
import PopularDishesSection from "@/components/templates/popularDishesSection/PopularDishesSection";

const slides = Array.from({ length: 5 }, (item, index) => ({
  id: index,
  image: "/images/image1.png",
  dishname: "Burger",
  price: "10.89",
  link: "/",
  socialMedia: [
    { icon: "icons/instagram.svg", href: "/" },
    { icon: "icons/facebook.svg", href: "/" },
    { icon: "icons/twitter.svg", href: "/" },
    { icon: "icons/linkedin.svg", href: "/" },
  ],
}));

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
          <MainCarousel slides={slides} />
          <PopularDishesSection />
          <RichAndHealthy />
          <BigOfferSection />
          <SpecialMenu meals={meals} />
          <DeliverySection />
        </MainContainer>
      </div>
      <CopyrightInfo text={"\u00A9 2024 My Website. All rights reserved"} />
    </>
  );
}
