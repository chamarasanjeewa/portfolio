import React, { createContext, useContext, useState } from "react";
import { CareerInfoType } from "../types";

export interface IContextProps {
  careerInfo: CareerInfoType[];
  setCareerInfo: React.Dispatch<React.SetStateAction<CareerInfoType[]>>;
}

const CvConext = createContext<IContextProps>({} as IContextProps);

const Provider = (props: any) => {
  const [careerInfo, setCareerInfo] = useState<CareerInfoType[]>([]);

  const contextValues: IContextProps = {
    careerInfo: [],
    setCareerInfo: setCareerInfo
  };

  return (
    <CvConext.Provider value={contextValues}>
      {props.children}
    </CvConext.Provider>
  );
};

export { CvConext, Provider };
