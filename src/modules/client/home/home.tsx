import CategoryNavigationBar from "../home/components/CategoryNavigationBar";
import BannerCarousel from "../home/components/BannerCarousel";
import DailyEssentialProduct from "@/modules/client/home/components/DailyEssentialProduct";
import FlashSaleSection from "@/modules/client/home/components/FlashSaleSection";
import TopCategories from "@/modules/client/home/components/TopCategories";
import TopBrands from "@/modules/client/home/components/TopBrands";
import DailyEssentials from "@/modules/client/home/components/DailyEssentials";
import AboutUS from "../home/components/AboutUS";
import ShoppingCategory from "../home/components/ShoppingCategory";
import JoinDao from "@/modules/client/home/components/JoinDao";

const Home = () => {
  return (
    <>
      <CategoryNavigationBar />
      <BannerCarousel />
      <DailyEssentialProduct />
      <FlashSaleSection />
      <TopCategories />
      <TopBrands />
      <DailyEssentials />
      <AboutUS />
      <ShoppingCategory />
      <JoinDao />
    </>
  );
};

export default Home;
