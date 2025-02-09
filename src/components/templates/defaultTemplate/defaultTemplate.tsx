import useScreenSize from "../../../hooks/useScreenSize";
import Footer from "../../organisms/footer/footer";
import Form from "../../molecules/form/form";
import GetStarted from "../../molecules/getStarted/getStarted";
import UrlsList from "../../molecules/urlsList/urlList";
import HeroSection from "../../organisms/heroSection/heroSection";
import MenuDesktop from "../../organisms/menu/menuDesktop";
import MenuMobile from "../../organisms/menu/menuMobile";
import Statistics from "../../organisms/statistics/statistics";

const DefaultTemplate = () => {
  const { isWeb } = useScreenSize();
  return (
    <div>
      <div className="flex flex-col mx-4 lg:mx-28 lg-desktop:mx-56 font-poppins">
        {isWeb ? <MenuDesktop /> : <MenuMobile />}
        <HeroSection />
        <Form />
        <UrlsList />
        <Statistics />
      </div>
      <GetStarted />
      <Footer />
    </div>
  );
};
export default DefaultTemplate;
