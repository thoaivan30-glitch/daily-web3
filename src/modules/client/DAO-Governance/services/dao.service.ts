import { DAOStats, StatCard, Proposal, ProcessStep, ParticipationMethod } from '../models/dao.types';
import daoMocksData from '../mocks/dao.mocks.json';

export const getDAOStats = (): DAOStats => {
  return daoMocksData.daoStats;
};

export const getStatCards = (): StatCard[] => {
  const stats = getDAOStats();
  const cardTemplates = daoMocksData.statCards;
  
  return cardTemplates.map((card) => {
    let value = '';
    
    switch (card.id) {
      case 'staked':
        value = stats.totalTokensStaked.toLocaleString();
        break;
      case 'voters':
        value = stats.activeVoters.toLocaleString();
        break;
      case 'proposals':
        value = stats.proposalsCreated.toString();
        break;
      case 'treasury':
        value = stats.treasuryValue;
        break;
    }
    
    return {
      ...card,
      value
    };
  });
};

export const getProposals = (): Proposal[] => {
  return daoMocksData.proposals as Proposal[];
};

export const getProcessSteps = (): ProcessStep[] => {
  return daoMocksData.processSteps as ProcessStep[];
};

export const getParticipationMethods = (): ParticipationMethod[] => {
  return daoMocksData.participationMethods as ParticipationMethod[];
};
