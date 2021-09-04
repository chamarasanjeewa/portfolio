
import React,{useContext,useState} from 'react';
import { cvContext } from '../context/cv.context';
import "./../styles/experience.scss";


import { CareerInfoType } from "./../types";

  //const careerInfoResult= useContext(cvContext)
  //const careerInfoResult= useContext(cvContext)
export const careerInfoResult=()=>{
  return (
    <div className="container  mb-2 mt-2">
      <h3 className="header">Contact me</h3>
    </div>
  );
}