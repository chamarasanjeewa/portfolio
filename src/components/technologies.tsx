import { useContext } from "react";
import { cvContext } from "../context/cv.context";
import { loadLogoByName } from "../utils/utils";
import "./../styles/technologies.scss";

export function Technologies() {
    return (<div className="container mt-5">
      <div>
  <h1 className="header">Technologies/ Libraries</h1>
  
    <ul className="technology list-group list-group-horizontal d-flex  align-items-center mt-2">
   < Technology iconName="angular"/>
   < Technology iconName="react"/>
   < Technology iconName="typescript"/>
   < Technology iconName="javascript"/>
   < Technology iconName="oracle"/>
   < Technology iconName="unity"/>
   < Technology iconName="mongo"/>
   < Technology iconName="firebase"/> 
   < Technology iconName="mysql"/>
   < Technology iconName="github"/>
   < Technology iconName="bootstrap"/>
   < Technology iconName="croppicker"/>
   < Technology iconName="dropzone"/>
   < Technology iconName="transistor"/>
   < Technology iconName="aggrid"/>
   < Technology iconName="antdesign"/>
   < Technology iconName="hookforms"/>
   < Technology iconName="reactquery"/>

    </ul>
    </div>
    <div className="mt-5">
    <h1 className="header">Tools</h1>
  
    <ul className="technology list-group list-group-horizontal d-flex justify-content-start align-items-center">
   < Technology iconName="git"/>
   < Technology iconName="bitbucket"/>
   < Technology iconName="trello"/>
   < Technology iconName="favro"/>
   < Technology iconName="github"/>
    </ul>
    </div>
    </div>);
}

function Technology({iconName}:{iconName:string}){
  const iconPath = loadLogoByName(iconName);

return (<li className="me-2"><img alt={iconName} src={iconPath} width={'55px'} height={'55px'}></img></li>)
}