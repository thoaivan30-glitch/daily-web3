import Banner from "@/modules/client/DAO-Governance/components/Banner";
import DAOStatsOverview from "@/modules/client/DAO-Governance/components/DAOStatsOverview";
import ProposalsSection from "./components/ProposalsSection";
import GovernanceProcess from "./components/GovernanceProcess";

const DAOGovernance = () => {
  return (
    <>
      <Banner />    
      <DAOStatsOverview />
      <ProposalsSection />
      <GovernanceProcess />
    </>
  );
};

export default DAOGovernance;