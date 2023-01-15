import React from "react";

export default function Portfolios() {
  return (
    <div id="portfolios" className="card">
      <div className="card-content">
        <h6>
          <strong>PORTFOLIOS</strong>
        </h6>
        <section className="white">
          <div class="carousel carousel-slider" data-indicators="true">
            <div class="carousel-item blue white-text waves-effect waves-block waves-light" href="#one!">
              <div class="container">
                <h2>Projects</h2>
                <p class="white-text">
                  Please slide to see the projects.<br></br><br></br>
                  Please click on any slide to know more details about project.<br></br><br></br>
                  Click on the "Live Demo" button to visit the live website.<br></br><br></br>
                  Click on the "Source Code" button to check the source code at github. 
                </p>
              </div>
            </div>
            <div class="card portfolio__proj porfolio__tindog carousel-item activator waves-effect waves-block waves-light" href="#two!">
              <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                  <div class="container">
                    <h2 className="grey-text text-darken-2">Tindog</h2>
                    <p class="grey-text">
                      A responsive website with attractive UI.
                    </p>
                    <p class="grey-text">
                      <strong>Technologies:-</strong>  HTML, CSS and BootStrap.
                    </p>

                <div className="row porfolio__buttons">
                  <div className="col m6 s6">
                    <a
                      class="btn waves-effect black with-text darken-text-2"
                      href="https://mubarakmbu.github.io/Tindog/"
                    >
                      Live Demo
                    </a>
                  </div>
                  <div className="col m6 s6">
                    <a
                      class="btn waves-effect white black-text darken-text-2"
                      href="https://github.com/MubarakMbu/Tindog.git"
                    >
                      Source Code
                    </a>
                  </div>
                  
                </div>
              </div>
              </div>
            </div>
            <div class="card portfolio__proj porfolio__messenger carousel-item activator waves-effect waves-block waves-light" href="#three!">
              <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                  <div class="container">
                    <h2 class="grey-text text-darken-2">Group Messenger</h2>
                    <p class="grey-text">
                      A Live and simple group chatting app. clone of facebook messenger web app.
                      Build the Front end using React and Material-UI libraries.
                      Both Backend as well as hosting done using Google Firebase.
                    </p>
                    <br></br>
                    <p class="grey-text">
                      <strong>Technologies:-</strong> React, Firestore, JavaScript, CSS and Material-UI.
                    </p>

                <div className="row porfolio__buttons">
                  <div className="col m6 s6">
                    <a
                      class="btn waves-effect black with-text darken-text-2"
                      href="https://facebook-messenger-clone-47337.web.app/"
                    >
                      Live Demo
                    </a>
                  </div>
                  <div className="col m6 s6">
                    <a
                      class="btn waves-effect white black-text darken-text-2"
                      href="https://github.com/MubarakMbu/facebook-messenger-clone.git"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
