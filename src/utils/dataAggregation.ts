import {
  CropData,
  MaxMinProductionPerYear,
  AverageYieldAndAreaPerCrop,
} from "./types";

export function mapJsonToCropData(rawData: any[]): CropData[] {
  return rawData.map((item) => ({
    year: parseInt(item["Year"].split(",")[1].trim()),
    crop: item["Crop Name"],
    production: parseFloat(item["Crop Production (UOM:t(Tonnes))"]),
    yield: parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]),
    area: parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"]),
  }));
}

// Function to get max and min production per year
export const getMaxMinProductionPerYear = (
  data: CropData[]
): MaxMinProductionPerYear[] => {
  const result: MaxMinProductionPerYear[] = [];
  const yearMap: { [key: string]: CropData[] } = {};

  // Group by year
  data.forEach((item) => {
    if (!yearMap[item.year]) {
      yearMap[item.year] = [];
    }
    yearMap[item.year].push(item);
  });

  // Calculate max and min production for each year
  for (const year in yearMap) {
    const crops = yearMap[year];

    // Find the crop with the maximum production
    const maxCrop = crops.reduce((prev, current) =>
      (current.production || 0) > (prev.production || 0) ? current : prev
    );

    // Find the crop with the minimum production
    const minCrop = crops.reduce((prev, current) =>
      (current.production || 0) < (prev.production || 0) ? current : prev
    );

    result.push({
      year: parseInt(year),
      maxProduction: maxCrop.crop,
      minProduction: minCrop.crop,
    });
  }

  return result;
};

// Function to get average yield and area per crop
export const getAverageYieldAndAreaPerCrop = (
  data: CropData[]
): AverageYieldAndAreaPerCrop[] => {
  const result: AverageYieldAndAreaPerCrop[] = [];
  const cropMap: { [key: string]: CropData[] } = {};

  // Group by crop
  data.forEach((item) => {
    const crop = item.crop;
    if (!cropMap[crop]) {
      cropMap[crop] = [];
    }
    cropMap[crop].push(item);
  });

  // Calculate average yield and area
  for (const crop in cropMap) {
    const crops = cropMap[crop];
    const totalYield = crops.reduce((sum, item) => sum + (item.yield || 0), 0);
    const totalArea = crops.reduce((sum, item) => sum + (item.area || 0), 0);
    result.push({
      crop,
      averageYield: parseFloat((totalYield / crops.length).toFixed(3)),
      averageArea: parseFloat((totalArea / crops.length).toFixed(3)),
    });
  }

  return result;
};
