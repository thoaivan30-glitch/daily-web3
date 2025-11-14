import { TokenOverviewData, TokenAllocationData, TokenBenefitsData } from '../models/economic.types';
import economicsData from '../mocks/economics.mocks.json';

export const getTokenOverview = (): TokenOverviewData => {
  return economicsData.tokenOverview as TokenOverviewData;
};

export const getTokenAllocation = (): TokenAllocationData => {
  return economicsData.tokenAllocation as TokenAllocationData;
};

export const getTokenBenefits = (): TokenBenefitsData => {
  return economicsData.tokenBenefits as TokenBenefitsData;
};
