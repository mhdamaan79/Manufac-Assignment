import React, { useEffect, useState } from "react";
import data from "./data/Manufac _ India Agro Dataset.json";
import { Title } from "@mantine/core";
import {
  AverageYieldAndAreaPerCrop,
  MaxMinProductionPerYear,
} from "./utils/types";
import {
  mapJsonToCropData,
  getMaxMinProductionPerYear,
  getAverageYieldAndAreaPerCrop,
} from "./utils/dataAggregation";
import MaxMinProductionTable from "./components/MaxMinProductionTable";
import CropAverageTable from "./components/CropAverageTable";

const App: React.FC = () => {
  const [maxMinProduction, setMaxMinProduction] = useState<
    MaxMinProductionPerYear[]
  >([]);
  const [averageYieldArea, setAverageYieldArea] = useState<
    AverageYieldAndAreaPerCrop[]
  >([]);

  useEffect(() => {
    // Convert raw JSON data to CropData format
    const processedData = mapJsonToCropData(data);

    // Set maximum and minimum production data
    const maxMinData = getMaxMinProductionPerYear(processedData);
    setMaxMinProduction(maxMinData);

    // Set average yield and area data
    const avgYieldAreaData = getAverageYieldAndAreaPerCrop(processedData);
    setAverageYieldArea(avgYieldAreaData);
  }, []);

  return (
    <div className="container">
      <Title order={1}>Indian Agriculture Data Analysis</Title>
      <MaxMinProductionTable data={maxMinProduction} />
      <CropAverageTable data={averageYieldArea} />
    </div>
  );
};

export default App;
