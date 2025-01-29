import useScreenSize from "../../../hooks/useScreenSize";
import HeroSection from "../../organisms/heroSection/heroSection";
import MenuDesktop from "../../organisms/menu/menuDesktop";
import MenuMobile from "../../organisms/menu/menuMobile";

const DefaultTemplate = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className="flex flex-col md:p-10 text-center lg:mx-56">
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
      <section>
        <HeroSection />
      </section>
    </div>
  );
};
export default DefaultTemplate;
