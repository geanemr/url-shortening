import useScreenSize from "../../../hooks/useScreenSize";
import MenuDesktop from "../../organisms/menu/menuDesktop";
import MenuMobile from "../../organisms/menu/menuMobile";

const DefaultTemplate = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className="flex flex-col p-10 text-center">
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
    </div>
  );
};
export default DefaultTemplate;
