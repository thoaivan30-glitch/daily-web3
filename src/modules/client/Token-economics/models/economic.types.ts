export interface TokenMetric {
  label: string;
  value: string;
  description: string;
  valueColor?: string;
}

export interface TokenOverviewData {
  title: string;
  subtitle: string;
  metrics: TokenMetric[];
}

export interface AllocationItem {
  name: string;
  percentage: number;
  description: string;
  color: string;
  borderColor: string;
}

export interface TokenAllocationData {
  title: string;
  subtitle: string;
  allocations: AllocationItem[];
}

export interface BenefitItem {
  icon: string;
  title: string;
  features: string;
  benefits: string;
  bgColor: string;
  iconColor: string;
}

export interface TokenBenefitsData {
  benefits: BenefitItem[];
}
