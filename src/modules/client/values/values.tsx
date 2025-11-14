import BannerValues from "@/modules/client/values/components/BannerValues";
import ValuesSection from "@/modules/client/values/components/ValuesSection";
import BlockchainVerificationIntro from "@/modules/client/values/components/BlockchainVerificationIntro";

const Values = () => {
  return (
    <>
      <BannerValues />
      <ValuesSection />
      <BlockchainVerificationIntro /> 
    </>
  );
};

export default Values;