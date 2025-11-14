import Banner from "@/modules/client/privacy-policy/components/Banner";
import ContactPrivacyTeam from "@/modules/client/privacy-policy/components/ContactPrivacyTeam";
import PrivacyDataOverviewCard from "@/modules/client/privacy-policy/components/PrivacyDataOverviewCard";
import Web3PrivacyCore from "@/modules/client/privacy-policy/components/Web3PrivacyCore";

const PrivacyPolicy = () => {
  return (
    <>
      <Banner />
      <Web3PrivacyCore />
      <PrivacyDataOverviewCard />
      <ContactPrivacyTeam />
    </>
  );
};

export default PrivacyPolicy;