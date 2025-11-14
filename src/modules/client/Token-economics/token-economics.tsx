import Banner from "@/modules/client/Token-economics/components/Banner";
import TokenOverview from "@/modules/client/Token-economics/components/TokenOverview";
import TokenAllocation from "@/modules/client/Token-economics/components/TokenAllocation";
import TokenBenefits from "@/modules/client/Token-economics/components/TokenBenefits";
import TokenPriceChartCard from "./components/TokenPriceChartCard";
const TokenEconomics = () => {
  return (
    <>
      <Banner />
      <TokenOverview />
      <TokenAllocation />
      <TokenBenefits /> 
      <TokenPriceChartCard />
    </>
  );
};

export default TokenEconomics;