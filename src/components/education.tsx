import * as React from "react";
import { useContext } from "react";
import { cvContext } from "./../context/cv.context";
import "./../styles/education.scss";

const Education = () => {
let cvVal = useContext(cvContext);
const x = process.env.REACT_APP_TEST;
console.log(x);

return (
  <div className="container mt-5">
    <h1 className="header">Education {x} </h1>
    <div className="row justify-content-left align-items-center">
      {cvVal?.education.map((x, i) => {
        return (
          <div className="col me-2 ">
            <div className="card text-center align-items-left pt-3">
              <h3 className="header">{x.title}</h3>
              <p>{x.institute}</p>
              <p>{x.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default Education;
