export interface DAOStats {
  totalTokensStaked: number;
  activeVoters: number;
  proposalsCreated: number;
  treasuryValue: string;
}

export interface StatCardData {
  id: string;
  icon: string;
  label: string;
  title: string;
  description: string;
}

export interface StatCard extends StatCardData {
  value: string;
}

export interface Proposal {
  id: string;
  status: string;
  proposalId: string;
  title: string;
  description: string;
  author: string;
  endTime: string;
  votePercentage: number;
}

export interface ProcessStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface ParticipationMethod {
  icon: string;
  title: string;
  description: string;
}
