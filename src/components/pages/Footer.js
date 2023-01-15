import React from 'react'

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
    <div id='footer'>
      <footer class="page-footer light-blue  darken-2">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Thank you for visiting..</h5>
                <p class="grey-text text-lighten-4">If you have any queries please let me know.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Connect with me</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/MubarakMbu">Git Hub</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/mubarak-h/">Linkedin</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/mubarak_mbu/">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © Copyright {year} Mubarak, inc
            <a class="grey-text text-lighten-4 right" href="#!">All Rights Reserved</a>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
