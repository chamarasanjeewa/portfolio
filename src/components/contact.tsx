
import React,{useContext,useState} from 'react';
import { cvContext } from '../context/cv.context';
import "./../styles/experience.scss";


import { CareerInfoType } from "./../types";

export function CompanyExperience({
  title,
  time,
  experience,
  client,
  companyName
}: CareerInfoType) {

  const [showIndex,setShowIndex]=useState<{index:number}[]>([]);

  const careerInfoResult= useContext(cvContext)
  return (
    <div className="container  mb-2 mt-2">
      <h3 className="header">Company experience</h3>
      {careerInfoResult?.careerInfo!.map((x,i)=>{return(
    <div key={i} >
     <div className="card">
       <div >
        <h4>{x.title}</h4>
      <div >{x.companyName}</div>
        <div className="d-flex justify-content-between align-items-center">
      <div >{x.time}</div>
      <div >Project:{x.client}</div>
      </div>
      <div  onClick={(e)=>{
        e.preventDefault();
       const isThere= showIndex.some (x=>x.index===i)
       if(isThere){
     setShowIndex(   showIndex.filter(x=>x.index!==i))
        }
       else{
          setShowIndex([...showIndex,{index:i}])
        }
          
      }}>click here</div>
     {showIndex.find(x=>x.index===i) && <div >
        <ul className="experience">
          {x.experience?.map(x => (
            <li>{x}</li>
            ))}
        </ul>
        <ul className="list-group list-group-horizontal d-flex justify-content-center align-items-center">
          {x.technologies?.map(x => (
            <li className="list-group-item me-2  btn btn-sm btn-success border-radius-2">{x}</li>
            ))}
        </ul>
      </div>}
      </div></div></div>)
          })}
    </div>
  );
}
