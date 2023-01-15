import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          A Software developer with 1.5 years experience in software development life cycle. 
          Highly Organized and Motivated to work in team and environments.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Email:</strong> memubarak99@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 815 103 8316
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Languages:</strong> English, Kannada, Hindi
              </p>
              <p>
                <strong>Address:</strong> Shimoga, Karnataka-577428, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
