import * as React from "react";
import { useContext } from "react";
import { cvContext } from "./../context/cv.context";
import "./../styles/education.scss";

const Education = () => {
let cvVal = useContext(cvContext);

  return (
    <div className="container mt-5">
      <h1 className="header">Education </h1>
      <div className="row justify-content-center align-items-center">
       {cvVal?.education.map(x=>{
        return  <div className="col-sm-3 me-2 " >
          <div className="card text-center align-items-center pt-3"  >
            <h3 className="header">{x.title}</h3>
            <p>{x.institute}</p>
            <p>{x.time}</p>

          </div></div>
       })}
    </div>

    </div>
  );
};

export default Education;
