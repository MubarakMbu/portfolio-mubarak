import React from 'react';

export default function Education() {
  return (
    <div id='education'>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>Education</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl3 l3 m3 s12">
              <p className="teal year_exp white-text">
                Batch : <strong> 2021</strong> 
              </p>
            </div>
            <div className="col xl9 l9 m9 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom">
                  <strong>Bachelor of Engineering (BE)</strong>
                </h5>
                <h8 className="no-pad mt-bottom">
                  <strong>BMS College of Engineering, Bangaluru</strong>
                </h8>
                <p>
                  Mechanical Engineering.
                </p>
                <p>
                <strong>CGPA:-</strong> 8.85
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
