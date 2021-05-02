import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { CompanyExperience } from "./components/company.experience";
import Education from "./components/education";
import { Header } from "./components/header";
import { Summary } from "./components/summary";
import CareerInfo from "./data/experience.json";
import {CareerInfoType} from './types'
import {useContext} from 'react'
import db from "./firebase.config.js";
import { CvConext, Provider } from './context/cv.context';
import { CareerInfoView } from './components/career.experience';

function App() {
  return (
    <Provider >
    <div className="container">
      <div className="main-grid-item main-grid-heading">
        <Header></Header>
      </div>
      <div className="main-grid-item main-grid-summary">
        <Summary />
      </div>

      <div className="main-grid-item  main-grid-career">
       <CareerInfoView></CareerInfoView>
      </div>
      <div className="main-grid-item">
        <Education />
      </div>
    </div>
   </Provider>
  );
}

export default App;
