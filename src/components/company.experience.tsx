
import React,{useContext,useState} from 'react';
import { cvContext } from '../context/cv.context';
import "./../styles/experience.scss";
import { AiOutlineCheck } from 'react-icons/ai';

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
  // return (
  //   <div className="container  mb-2 mt-2">
  //     <h3 className="header">Company experience</h3>
  //     {careerInfoResult?.careerInfo!.map((x,i)=>{return(
  //   <div key={i} >
  //    <div className="card">
  //      <div >
  //       <h4>{x.title}</h4>
  //     <div >{x.companyName}</div>
  //       <div className="d-flex justify-content-between align-items-center">
  //     <div >{x.time}</div>
  //     <div >Project:{x.client}</div>
  //     </div>
  //     <div  onClick={(e)=>{
  //       e.preventDefault();
  //      const isThere= showIndex.some (x=>x.index===i)
  //      if(isThere){
  //    setShowIndex(   showIndex.filter(x=>x.index!==i))
  //       }
  //      else{
  //         setShowIndex([...showIndex,{index:i}])
  //       }
          
  //     }}>click here</div>
  //    {showIndex.find(x=>x.index===i) && <div >
  //       <ul className="experience">
  //         {x.experience?.map(x => (
  //           <li>{x}</li>
  //           ))}
  //       </ul>
  //       <ul className="list-group list-group-horizontal d-flex justify-content-center align-items-center">
  //         {x.technologies?.map(x => (
  //           <li className="list-group-item me-2  btn btn-sm btn-success border-radius-2">{x}</li>
  //           ))}
  //       </ul>
  //     </div>}
  //     </div></div></div>)
  //         })}
  //   </div>
  // );
  return (<div className="container">
    <h3 className="header">Company experience</h3>
  <div className="row">
      <div className="col-md-12">
          <div className="card">
              <div className="card-body">
                  {/* <h6 className="card-title">Timeline</h6> */}
                  <div id="content">
                      <ul className="timeline">
                      {careerInfoResult?.careerInfo!.map((x,i)=>
                         <li className="event" data-date={x.time}>
                           <div >
       <h4>{x.title}</h4>
     <div >{x.companyName}</div>
       <div className="d-flex justify-content-between align-items-center">
     <div >Project:{x.client}</div>
     </div> 
     <a href="null"  onClick={(e)=>{
        e.preventDefault();
       const isThere= showIndex.some (x=>x.index===i)
       if(isThere){
     setShowIndex(   showIndex.filter(x=>x.index!==i))
        }
       else{
          setShowIndex([...showIndex,{index:i}])
        }
          
      }}>more...</a>
     {showIndex.find(x=>x.index===i) && <div >
        <ul className="experience">
          {x.experience?.map(x => (
            <li><span className="me-2"><AiOutlineCheck style={{ color: "green", fontSize: "0.5em" }} /></span>{x}</li>
            ))}
        </ul>
        <div className="d-flex">
          {x.technologies?.map(x => (
            <div className=" border-radius-3 btn btn-primary btn-small d-flex justify-content-left me-2 mt-3 py-0 align-items-center" style={{fontSize:'0.75rem'}}>{x}</div>
            ))}
        </div>
      </div>}
     </div>
                     </li>
                      )}
                         
                          {/* <li className="event" data-date="2:30 - 4:00pm">
                              <h3>Opening Ceremony</h3>
                              <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP &amp; Busta Rhymes as an opening show.</p>
                          </li>
                          <li className="event" data-date="5:00 - 8:00pm">
                              <h3>Main Event</h3>
                              <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!</p>
                          </li>
                          <li className="event" data-date="8:30 - 9:30pm">
                              <h3>Closing Ceremony</h3>
                              <p>See how is the victor and who are the losers. The big stage is where the winners bask in their own glory.</p>
                          </li> */}
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>)
}
