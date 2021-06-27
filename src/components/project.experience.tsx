import React, { useContext } from "react";
import { cvContext } from "../context/cv.context";
import { loadLogoByName } from "../utils/utils";
import "./../styles/experience.scss";

export const ProjectExperience = () => {
  const CareerInfoResult = useContext(cvContext);

  return (
    <div className="container mt-3">
      <h3 className="header">Project experience</h3>
      <div className="row justify-content-center align-items-center">
        {CareerInfoResult?.projects.map(x => {
          return (
            <div className="col-sm-3 me-2 mb-5 ">
              <div className="card text-center align-items-center pt-3">
                <h3 className="header">{x.name}</h3>
                <p><span>for:</span>{x.client} <span>({x.clientOrigin})</span></p>
                 <div className="d-flex justify-content-center mb-2">
                  {x.technologies?.map(
                    y =>
                      y && (
                          <TechnologyIcon iconName={y}  />
                      )
                  )}
                </div>
            </div>
              </div>
             
          );
        })}
      </div>
    </div>
  );
};

function TechnologyIcon( {iconName}:{iconName:string}) {
  const iconPath = loadLogoByName(iconName);
  return (
    <img alt={iconName} src={iconPath} width={"15px"} height={"15px"} className="me-2"></img>
  );
}
