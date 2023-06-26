import { currencyFormat } from "./helpers";

export interface AllianceInputValues {
  lsdAnnualEstimate: number;
  assetPrice: number;
  allianceRewardWeight: number;
  annualizedTakeRate: number;
  assetStakedInAlliance: number;
}

export interface AllianceCalculatedValues {
  rewardPoolPercentage: number;
  rewardPoolMakeup: number;
  valueOfDenomInRewardPoolExcludingLSD: number;
  valueOfDenomInRewardPoolIncludingLSD: number;
  percentageMakeupOfRewardPoolValue: number;
  principalStakeExcludingRewards: number;
  principalStakeIncludingLSD: number;
  stakingRewardValue: number;
  stakingEstimatedPercentage: number;
  takeRateInterval: number;
  takeRate: number;
}

export type AllianceFieldKey =
  | keyof AllianceInputValues
  | keyof AllianceCalculatedValues;

export interface AllianceField {
  name: AllianceFieldKey;
  label: string;
  secondaryLabel?: string;
  input: boolean;
  group: string;
  advanced?: boolean;
  format?: (value: number) => string;
  inputPrefix?: string;
  inputSuffix?: string;
}

export type AllianceFieldMap = Record<string, AllianceField[]>;

export const allianceFields: AllianceField[] = [
  {
    group: "Chain Data",
    name: "lsdAnnualEstimate",
    label: "Annual Estimated LSD Growth Rate",
<<<<<<< Updated upstream
    secondaryLabel: "Set to 0 if not an LSD",
=======
    secondaryLabel: "The Yield of the [LSD](https://docs.alliance.terra.money/alliance#liquid-staking-derivatives). Set to 0 if not an LSD",
>>>>>>> Stashed changes
    input: true,
    inputSuffix: "%",
  },
  {
    group: "Chain Data",
    name: "assetPrice",
    label: "Asset Price",
    input: true,
    inputPrefix: "$",
  },
  {
<<<<<<< Updated upstream
    group: "Alliance Asset Parameters",
    label: "Alliance Reward Weight",
=======
    group: "Alliance Staking Parameters",
    label: "Asset Reward Weight",
    secondaryLabel: "[Weight of rewards](https://docs.alliance.terra.money/concepts/staking#reward-weight) given to stakers of this asset",
>>>>>>> Stashed changes
    input: true,
    name: "allianceRewardWeight",
  },
  {
<<<<<<< Updated upstream
    group: "Alliance Asset Parameters",
    label: "Reward Pool Percentage",
=======
    group: "Alliance Staking Parameters",
    label: "Reward Weight Percentage",
    secondaryLabel: "% of [reward pool distributed](https://docs.alliance.terra.money/concepts/rewards#rewards-distribution) to stakers of this asset",
>>>>>>> Stashed changes
    input: false,
    name: "rewardPoolPercentage",
    format: (value) => (value * 100).toFixed(4) + " %",
  },
  {
<<<<<<< Updated upstream
    group: "Alliance Asset Parameters",
    label: "Annualized Take Rate (for LSDs)",
=======
    group: "Alliance Staking Parameters",
    label: "Annualized Take Rate (Optional)",
    secondaryLabel: "% of this asset that will be [redistributed to the reward pool](https://docs.alliance.terra.money/alliance#the-take-rate) after 1 year",
>>>>>>> Stashed changes
    input: true,
    name: "annualizedTakeRate",
    inputSuffix: "%",
  },
  {
    group: "Alliance Asset Parameters",
    label: "Take Rate Interval",
    secondaryLabel: "Minutes",
    input: false,
    name: "takeRateInterval",
  },
  {
<<<<<<< Updated upstream
    group: "Alliance Asset Parameters",
    label: "Take Rate",
    secondaryLabel: "Module Parameter",
=======
    group: "Alliance Staking Parameters",
    label: "Take Rate Parameter",
    secondaryLabel: "Use when whitelisting this Alliance asset through [Governance](https://docs.alliance.terra.money/guides/create#create-an-alliance)",
>>>>>>> Stashed changes
    input: false,
    name: "takeRate",
    format: (value) => value.toPrecision(9),
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
<<<<<<< Updated upstream
    label: "Reward Pool Makeup after 1 year",
    secondaryLabel: "Take rate included",
=======
    label: "Amount in reward pool",
    secondaryLabel: "Amount of this asset redistributed to the reward pool after 1 year of the [take rate](https://docs.alliance.terra.money/alliance#the-take-rate)",
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    secondaryLabel: "After 1 year LSD yield",
=======
    secondaryLabel: "Value after 1 year, including LSD growth and [take rate](https://docs.alliance.terra.money/alliance#the-take-rate)",
>>>>>>> Stashed changes
    input: false,
    advanced: true,
    format: (value) => currencyFormat(value),
  },
  {
    group: "Reward Pool",
    name: "percentageMakeupOfRewardPoolValue",
<<<<<<< Updated upstream
    label: "% makeup of reward pool value",
=======
    label: "Percentage of reward pool value",
    secondaryLabel:"% of the [reward pool value](https://docs.alliance.terra.money/concepts/rewards#rewards-distribution) made up of this asset",
>>>>>>> Stashed changes
    input: false,
    advanced: true,
    format: (value) => (value * 100).toFixed(4) + " %",
  },
  {
    group: "Principal",
    name: "principalStakeExcludingRewards",
<<<<<<< Updated upstream
    label: "Principal stake amount after 1 year take rate",
    secondaryLabel: "Excluding rewards",
=======
    label: "Principal stake amount after 1 year",
    secondaryLabel: "The amount of original stake left after 1 year [take rate](https://docs.alliance.terra.money/alliance#the-take-rate)",
>>>>>>> Stashed changes
    input: false,
    advanced: true,
  },
  {
    group: "Principal",
    name: "principalStakeIncludingLSD",
<<<<<<< Updated upstream
    label: "Principal stake value after 1 year take rate",
    secondaryLabel: "Including LSD yield",
=======
    label: "Principal stake value after 1 year",
    secondaryLabel: "The value of original stake after 1 year take rate, including [LSD appreciation](https://docs.alliance.terra.money/alliance#liquid-staking-derivatives)",
>>>>>>> Stashed changes
    input: false,
    advanced: true,
    format: (value) => currencyFormat(value),
  },
  {
    group: "Yield",
    name: "stakingRewardValue",
<<<<<<< Updated upstream
    label: "Estimated staking reward value",
    secondaryLabel: "Including LSD yield",
=======
    label: "Estimated rewards for stakers of this asset",
    secondaryLabel: "Value of rewards including Native assets, Alliance assets, and [LSD appreciation](https://docs.alliance.terra.money/alliance#liquid-staking-derivatives)",
    input: false,
    format: (value) => currencyFormat(value),
  },
  {
    group: "Yield",
    name: "valueOfDenomInRewardPoolIncludingLSD",
    label: "Estimated tax for stakers of this asset",
    secondaryLabel: "Value of this asset redistributed to the reward pool after 1 year of the [take rate](https://docs.alliance.terra.money/alliance#the-take-rate) tax, including LSD appreciation",
>>>>>>> Stashed changes
    input: false,
    format: (value) => currencyFormat(value),
  },
  {
    group: "Yield",
    name: "stakingEstimatedPercentage",
    label: "Estimated percentage change over 1 year",
<<<<<<< Updated upstream
    secondaryLabel: "Including LSD appreciation and take rate",
=======
    secondaryLabel: "Reward change including Native assets, Alliance assets, take rate, and [LSD appreciation](https://docs.alliance.terra.money/alliance#liquid-staking-derivatives",
>>>>>>> Stashed changes
    input: false,
    format: (value) => (value * 100).toFixed(4) + " %",
  },
];

// convert the fields to a map keyed by group for rendering
export const allianceFieldMap: AllianceFieldMap = {};

allianceFields.forEach((field) => {
  if (!allianceFieldMap[field.group]) {
    allianceFieldMap[field.group] = [];
  }
  allianceFieldMap[field.group].push(field);
});
