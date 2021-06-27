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
              <div className="card text-center align-items-center">
                <a href={x.url}>
              <img className="card-img-top img"  src={ProjectImage(x.name)} alt=""></img>
              </a>
              <div className="card-body">
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
    <img alt={iconName} src={iconPath} width={"20px"} height={"20px"} className="me-2"></img>
  );
}

function ProjectImage(projectName:string){
  let imageName=""
  if(projectName==="millum-commerce"){
imageName="millum.JPG"
  }
  if(projectName==="baby journey"){
imageName="babyjourney.JPG"
  }
  else if(projectName=="sarala sinhala"){
imageName="sarala.webp"
  }else if(projectName=="You drink we drive"){
    imageName="youdrink.webp"
  }
  else if(projectName==="permitto"){
    imageName="permitto.JPG"
  }
  else if(projectName==="permitto mobile app"){
    imageName="permitto.webp"
  }
  else if(projectName=="blueTag"){
    imageName="bluetag.JPG"
  }
  else if(projectName==="lande kubura"){
    imageName="landekubura.JPG"
  }
  else if(projectName=="sarala sinhala"){
    imageName="sarala.webp"
  }
  return `./assets/icons/${imageName}`
}
