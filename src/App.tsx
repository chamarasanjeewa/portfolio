import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CompanyExperience } from "./components/company.experience";
import Education from "./components/education";
import { Header } from "./components/header";
import { Summary } from "./components/summary";
import CareerInfo from "./data/experience.json";
import {CareerInfoType} from './types'

function App() {
  const [careerInfo, setCareerInfo] = useState<CareerInfoType[]>([] );
  //console.log(CareerInfo.results[0].experience);

  useEffect(() => {
    //@ts-ignore
    setCareerInfo(CareerInfo.results );
    console.log(careerInfo);
    
  }, [careerInfo]);
  
  return (
    <div className="container">
      <div className="main-grid-item main-grid-heading">
        <Header></Header>
      </div>
      <div className="main-grid-item main-grid-summary">
        <Summary />
      </div>

      <div className="main-grid-item  main-grid-career">
        {/* <!--career experience grid--> */}
      
          {careerInfo.map(x => {
           return  <div className="career-experience-grid"> <CompanyExperience title={x.title} time={x.time} companyName={x.companyName} client={x.client} experience={x.experience} /> </div>;
          })}
        
      </div>
      <div className="main-grid-item">
        <Education />
      </div>
    </div>
  );
}

export default App;
