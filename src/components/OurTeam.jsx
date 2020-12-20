import React from 'react'

const text = "Our team is comprised of web developers, data scientists, server side experts, machine learning engineers and artificial intelligence experts. All of our members have several years of experience perfecting their craft. These members are voracious continuous learners and quick to adapt to newer technologies."
function OurTeam() {
    return (
        <div className='container'>
            <h1>Our Senior Technical Team</h1>
            <p>{text}</p>
            <br/>
            <hr/>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
               <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
             </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="front" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>James Quick</h5>
                    <p>Immaculate Designer with a flair of inventing new vistas of CSS and SCSS.</p>
               </div>
                </div>
                <div class="carousel-item">
                  <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="full" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Curtis Smith</h5>
                    <p>Full Stack Developer with expertise in Hooks, Api and Redux.</p>
                 </div>
               </div>
                <div class="carousel-item">
                 <img src="https://images.pexels.com/photos/1266193/pexels-photo-1266193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="data" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Clarissa Ward</h5>
                    <p>Python expert programming data analytics at a higher level.</p>
                  </div>
               </div>
                <div class="carousel-item">
                 <img src="https://images.unsplash.com/photo-1590649849991-e9af438ea77d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="style" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Julie Page</h5>
                    <p>Photo shop and adobe expertise enhancing web design and styling.</p>
                  </div>
               </div>
                <div class="carousel-item">
                 <img src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=l&w=500" class="d-block w-100" alt="AI" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Andrew Gillam</h5>
                    <p>Specialist Artificial Intelligent expert opening automation and routine operations.</p>
                  </div>
               </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
             </a>
              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
            </div>
          </div>
          )
        }

export default OurTeam;
