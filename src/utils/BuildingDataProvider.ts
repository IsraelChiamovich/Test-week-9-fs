// src/utils/BuildingDataProvider.ts

import { useState, useEffect } from 'react';
import buildingDataFile from '../data/building.json';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    setBuildingData(buildingDataFile);
  }, []);

  const getFloorByIndex = (floorIndex:number): Floor |undefined => buildingData[floorIndex];

  const getListOfActivities = ():string[] => buildingData.map((floor: Floor) => floor.activity);

  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
