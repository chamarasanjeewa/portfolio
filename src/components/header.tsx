import React from 'react';
import  "./../styles/header.scss";

export function Header() {
  return (
    <div className="container" >
     
      <div className="row align-items-center">
        <div className="col">
      <h2 className="section-title">
					Hey, I'm a <br/> <span><span>react</span></span> Developer.
				</h2>
      </div>
      <div className="col-md-5 text-center d-none d-md-block">
      <img src="https://api.wpmet.com/auth/wp-content/uploads/2020/12/pp_banner_image.png" title="" alt=""></img>
      </div>
      </div>
      
     
      </div>
  );
}
