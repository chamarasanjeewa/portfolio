import React, { useContext, useEffect } from "react";
import { CvConext, IContextProps } from "../context/cv.context";
import { CareerInfoType } from "../types";
import db from "./../firebase.config.js";
import { CompanyExperience } from "./company.experience";

export const CareerInfoView = () => {
  const careerInfo = useContext<IContextProps>(CvConext);

  useEffect(() => {
    fetchCvData();
  }, []);

  const fetchCvData = async () => {
    const response = db.collection("careerInfo");
    const data = await response.get();
    let careerInfoList: CareerInfoType[] = [];

    data.docs.forEach(item => {
      let careerInfo: CareerInfoType = item.data() as CareerInfoType;
      careerInfoList = [...careerInfoList, careerInfo];
    });
    careerInfo.setCareerInfo(careerInfoList);
  };

  let careerInfoList = careerInfo.careerInfo?.map(x => {
    return (
      <div key={x.time} className="career-experience-grid">
        <CompanyExperience
          title={x.title}
          time={x.time}
          companyName={x.companyName}
          client={x.client}
          experience={x.experience}
        />
      </div>
    );
  });
  return <>{careerInfoList}</>;
};
