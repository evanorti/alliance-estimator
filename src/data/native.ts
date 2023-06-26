import { currencyFormat } from "./helpers";

export interface NativeInputValues {
  columnName: string;
  denom: string;
  inflationRate: number;
  lsdAnnualEstimate: number;
  totalTokenSupply: number;
  assetPrice: number;
  allianceRewardWeight: number;
  assetStakedInAlliance: number;
}

export interface NativeCalculatedValues {
  rewardPoolOnNativeChain: number;
  rewardPoolPercentage: number;
  rewardPoolMakeup: number;
  valueOfDenomInRewardPoolExcludingLSD: number;
  valueOfDenomInRewardPoolIncludingLSD: number;
  percentageMakeupOfRewardPoolValue: number;
  poolTotalValue: number;
  principalStakeExcludingRewards: number;
  principalStakeIncludingLSD: number;
  stakingRewardValue: number;
  stakingEstimatedPercentage: number;
}

export type NativeFieldKey =
  | keyof NativeInputValues
  | keyof NativeCalculatedValues;

export interface NativeField {
  name: NativeFieldKey;
  label: string;
  secondaryLabel?: string;
  input: boolean;
  group: string;
  advanced?: boolean;
  format?: (value: number) => string;
  inputPrefix?: string;
  inputSuffix?: string;
}

export type NativeFieldMap = {
  [key: string]: NativeField[];
};

export const nativeFields: NativeField[] = [
  {
    group: "Chain Data",
    name: "inflationRate",
    label: "Inflation Rate",
    input: true,
    inputSuffix: "%",
  },
  {
    group: "Chain Data",
    name: "lsdAnnualEstimate",
    label: "Annual Estimated LSD Growth Rate",
    secondaryLabel: "Set to 0 if not an LSD",
    input: true,
    inputSuffix: "%",
  },
  {
    group: "Chain Data",
    name: "totalTokenSupply",
    label: "Total Token Supply",
    input: true,
  },
  {
    group: "Chain Data",
    name: "rewardPoolOnNativeChain",
    label: "Reward Pool on Chain",
    input: false,
  },
  {
    group: "Chain Data",
    name: "assetPrice",
    label: "Asset Price",
    input: true,
    inputPrefix: "$",
  },
  {
    group: "Native Staking Parameters",
    label: "Native Reward Weight",
    secondaryLabel: "Native assets have a [weight](https://docs.alliance.terra.money/alliance#how-are-rewards-determined) of 1",
    input: true,
    name: "allianceRewardWeight",
  },
  {
    group: "Native Staking Parameters",
    label: "Reward Weight Percentage",
    secondaryLabel: "% of [reward pool distributed](https://docs.alliance.terra.money/alliance#how-are-rewards-determined) to native stakers",
    input: false,
    name: "rewardPoolPercentage",
    format: (value) => (value * 100).toFixed(4) + " %",
  },
  {
    group: "Reward Pool",
    name: "assetStakedInAlliance",
    label: "Asset Amount Staked in Alliance",
    input: true,
  },
  {
    group: "Reward Pool",
    name: "rewardPoolMakeup",
    label: "Reward Pool Makeup after 1 year",
    secondaryLabel: "Take rate included",
    input: false,
    advanced: true,
  },
  {
    group: "Reward Pool",
    name: "valueOfDenomInRewardPoolExcludingLSD",
    label: "Value of denom in reward pool",
    secondaryLabel: "Excluding LSD yield",
    input: false,
    advanced: true,
    format: (value) => currencyFormat(value),
  },
  {
    group: "Reward Pool",
    name: "valueOfDenomInRewardPoolIncludingLSD",
    label: "Value of denom in reward pool",
    secondaryLabel: "After 1 year LSD yield",
    input: false,
    advanced: true,
    format: (value) => currencyFormat(value),
  },
  {
    group: "Reward Pool",
    name: "percentageMakeupOfRewardPoolValue",
    label: "% makeup of reward pool value",
    input: false,
    advanced: true,
    format: (value) => (value * 100).toFixed(4) + " %",
  },
  {
    group: "Reward Pool Total Value",
    name: "poolTotalValue",
    label: "Total",
    secondaryLabel: "Including Native assets, [Alliance assets](https://docs.alliance.terra.money/alliance#the-take-rate), and LSD appreciation after 1 year",
    input: false,
    advanced: true,
  },
  {
    group: "Principal",
    name: "principalStakeIncludingLSD",
    label: "Principal stake value after 1 year take rate",
    secondaryLabel: "Including LSD yield",
    input: false,
    advanced: true,
    format: (value) => currencyFormat(value),
  },
  {
    group: "Yield",
    name: "stakingRewardValue",
    label: "Estimated rewards for native stakers",
    secondaryLabel: "Value of rewards including Native assets, Alliance assets, [and LSD appreciation](https://docs.alliance.terra.money/alliance#liquid-staking-derivatives)",
    input: false,
    format: (value) => currencyFormat(value),
  },
  {
    group: "Yield",
    name: "stakingEstimatedPercentage",
    label: "Estimated percentage change over 1 year",
    secondaryLabel: "Reward change including Native assets, [Alliance assets](https://docs.alliance.terra.money/alliance#the-take-rate), and LSD appreciation",
    input: false,
    format: (value) => (value * 100).toFixed(4) + " %",
  },
  {
    group: "Pool Total Value",
    name: "poolTotalValue",
    label: "(including LSD appreciation)",
    input: false,
    format: (value) => currencyFormat(value),
  },
];

// convert the fields to a map keyed by group for rendering
export const nativeFieldMap: NativeFieldMap = {};

nativeFields.forEach((field) => {
  if (!nativeFieldMap[field.group]) {
    nativeFieldMap[field.group] = [];
  }
  nativeFieldMap[field.group].push(field);
});
