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
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2a435d",
        padding: "20px 0",
        marginTop: "50px",
      }}
    >
      <MainContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1", padding: "10px" }}>
            <h3 style={{ color: "red", padding: "10px 0px" }}>Contact Us</h3>
            <p style={{ color: "white" }}>Email: info@mywebsite.com</p>
            <p style={{ color: "white" }}>Phone: +123 456 789</p>
            <p style={{ color: "white" }}>
              Address: 1234 Main St, Anytown, USA
            </p>
          </div>

          <div style={{ flex: "1", padding: "10px" }}>
            <h3 style={{ color: "red", padding: "10px 0px" }}>Quick Links</h3>
            <ul>
              <li style={{ color: "white" }}>About Us</li>
              <li style={{ color: "white" }}>Our Menu</li>
              <li style={{ color: "white" }}>Special Offers</li>
              <li style={{ color: "white" }}>Contact</li>
            </ul>
          </div>

          <div style={{ flex: "1", padding: "10px" }}>
            <h3 style={{ color: "red", padding: "10px 0px" }}>Follow Us</h3>
            <ul style={{ display: "flex", gap: "10px" }}>
              <li>
                <a href="https://instagram.com">
                  <img src="/icons/instagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <img src="/icons/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <img src="/icons/twitter.svg" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <CopyrightInfo text={"© 2024 My Website. All rights reserved"} />
        </div>
      </MainContainer>
    </footer>
  );
}
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
      <Footer />
    </>
  );
}
