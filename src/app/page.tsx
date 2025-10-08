import MainContainer from "@/components/atoms/mainContainer/MainContainer";
import DeliverySection from "@/components/molecules/DeliverySection";
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
  const meals = [
    { id: 1, image: "/images/image_specialManu_1.png", title: "Burger" },
    { id: 2, image: "/images/image_specialManu_2.png", title: "Fried chicken" },
    {
      id: 3,
      image: "/images/image_specialManu_3.png",
      title: "Donner with Grilled Chicken",
    },
    { id: 4, image: "/images/image_specialManu_4.png", title: "Pizza" },
    { id: 5, image: "/images/image_specialManu_5.png", title: "Hot Dogs" },
    {
      id: 6,
      image: "/images/image_specialManu_6.png",
      title: "Chicken Sewers",
    },
    { id: 7, image: "/images/image_specialManu_7.png", title: "Greek Salad" },
    { id: 8, image: "/images/image_specialManu_8.png", title: "Dahi Puri" },
    {
      id: 9,
      image: "/images/image_specialManu_9.png",
      title: "Ice Cream with Chocolate",
    },
    {
      id: 10,
      image: "/images/image_specialManu_10.png",
      title: "Coctail Glasses",
    },
  ];

  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <MainContainer>
        <div>
          <MainCarousel slides={slides} />
        </div>
        <PopularDishesSection />
        <RichAndHealthy />
        <BigOfferSection />
        <SpecialMenu meals={meals} />
        <DeliverySection />
      </MainContainer>
    </div>
  );
}
