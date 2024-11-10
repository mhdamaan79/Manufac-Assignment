export type CropData = {
  year: number;
  crop: string;
  production: number;
  yield: number;
  area: number;
};

export interface MaxMinProductionPerYear {
  year: number;
  maxProduction: string;
  minProduction: string;
}

export interface AverageYieldAndAreaPerCrop {
  crop: string;
  averageYield: number;
  averageArea: number;
}
