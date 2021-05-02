import * as React from "react";
import { Component, useContext } from "react";
import {CvConext} from './../context/cv.context'
const Education = () => {
let cvVal=useContext(CvConext)
  return (
    <div>
      <h1>EDUCATION </h1>
      <ul>
        <li>
          <div>
            Master of Business Administration University of Colombo 2012-2014
          </div>
        </li>
        <li>
          <div>
            Master of Business Administration University of Colombo 2012-2014
          </div>
        </li>
        <li>
          <div>
            Master of Business Administration University of Colombo 2012-2014
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
