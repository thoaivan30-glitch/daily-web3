import CategoryNavigationBar from "../home/components/CategoryNavigationBar";
import BannerCarousel from "../home/components/BannerCarousel";
import DailyEssentialProduct from "@/modules/client/home/components/DailyEssentialProduct";
import FlashSaleSection from "@/modules/client/home/components/FlashSaleSection";
import TopCategories from "@/modules/client/home/components/TopCategories";
import TopBrands from "@/modules/client/home/components/TopBrands";
import DailyEssentials from "@/modules/client/home/components/DailyEssentials";

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
    </>
  );
};

export default Home;
