import React, { createContext,useEffect, useState } from "react";
import { CareerInfoResult, CareerInfoType,Education, Technologies,Projects } from "../types";
import db from "../firebase.config.js";
import {results,Workedprojects} from './../data/experience.json'


const cvContext = createContext<CareerInfoResult|null>(null);

const CvProvider = (props: any) => {
  const [careerInfo, setCareerInfo] = useState<CareerInfoType[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [technologies, setTechnologies] = useState<Technologies[]>([]);
  const [projects, setProjects] = useState<Projects[]>([]);

  const [loading,setLoading]=useState(false);

  const insertProjects=async ()=>{
    debugger;
    let writeBatch = db.batch();
    Workedprojects.forEach((x,index)=>{
      const documentRef=db.collection('projects').doc(index.toString());
      writeBatch.set(documentRef, x,{merge:true});
    })
  writeBatch.commit().then(() => {
  console.log('Successfully executed batch.');
  });
  
  }

  const insertData=async ()=>{
    debugger;
    let writeBatch = db.batch();
    results.forEach((x,index)=>{
      const documentRef=db.collection('careerInfo').doc(index.toString());
      writeBatch.set(documentRef, x);
    })
writeBatch.commit().then(() => {
  console.log('Successfully executed batch.');
});

}

  useEffect(() => {
    const getCvData=async ()=>{
      setLoading(true);
    // await  insertProjects();
      const response = db.collection("careerInfo");
      const data = await response.get();
      let careerInfoList: CareerInfoType[]=  data.docs.map(x=>x.data() as CareerInfoType) ;
      setCareerInfo(careerInfoList);

      const educationData=await db.collection("education").get();
      let edu: Education[]=  educationData.docs.map(x=>x.data() as Education) ;
      setEducation(edu);

      const technologyData=await db.collection("technologies").get();
      let tech: Technologies[]=  technologyData.docs.map(x=>x.data() as Technologies) ;
      setTechnologies(tech);

      const projectData=await db.collection("projects").get();
      let proj: Projects[]=  projectData.docs.map(x=>x.data() as Projects) ;
      setProjects(proj);

      setLoading(false);

    }
    getCvData();
    
  }, []);

  const value:CareerInfoResult={
    careerInfo,loading,education,technologies,projects
  }

  return <cvContext.Provider value={value}>{props.children}</cvContext.Provider>;
};

export { cvContext, CvProvider as Provider };
