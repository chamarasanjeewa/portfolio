
import { useContext } from "react";
import "./../styles/experience.css";
import { CareerInfoType } from "./../types";

export function CompanyExperience({
  title,
  time,
  experience,
  client,
  companyName
}: CareerInfoType) {

 
  return (
    <>
      <div>{title}</div>
      <div className="grid-company-title">{companyName}</div>
      <div>{time}</div>
      <div className="grid-client-title">Client:{client}</div>
      <div className=" grid-experience">
        <ul>
          {experience.map(x => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
