let navbar = document.querySelector("#nav-js");
let timer;

window.addEventListener("scroll", () => {
  navbar.style.opacity = "0"; // fade out instead of removing
  navbar.style.transition = "opacity 0.3s ease";

  clearTimeout(timer);
  timer = setTimeout(() => {
    navbar.style.opacity = "1"; // fade back in
  }, 400); // show after scroll stops
});




const deluxe = document.getElementById("deluxe");

deluxe.addEventListener("click", () => {
  window.open("DeluxeRoom.html", "_blank");
});



const royal=document.getElementById("royal")

royal.addEventListener("click", () =>{
  window.open("Royal.html", "_blank")
});





const navBar =`
   <div class="container-fluid fixed-top nav-j-main d-lg-block d-sm-none d-md-none" id="nav-js">
    <div class="row">
      <div class="col-lg-12 blur-navbar">
        <header>
          <!-- Header Top -->
          <div class="header-top p-3 d-lg-block d-none">
            <div class="inner-box d-flex justify-content-between">
              <!-- Top Left -->
              <div class="top-left">
                <div class="social-icon-header d-flex gap-4">
                  <nav>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  </nav>
                  <nav>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  </nav>
                  <nav>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  </nav>
                  <nav>
                    <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                  </nav>
                </div>
              </div>

              <!-- Top Right -->
              <div class="top-right gap-4 d-flex">
                <div>
                  <i class="fa-solid fa-envelope"></i>
                  <span>pointmansarovar16@gmail.com</span>
                </div>

                <div>
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Navathe Nagar, Amravati, Maharashtra 444602</span>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-light pe-0 ps-0 me-0 ms-0"></div>

          <!-- bootstrap nav header lover main -->
          <div class="header-lower">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid gx-0" style="height: 84px;">
                <div class="logo-main">
                  <a class="navbar-brand ms-3" href="#"><img src="assets/images/logo-main/mansarovar logo main.png"
                      alt="logo main" style="height: 40px; width: 150px ; object-fit: cover;" /></a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Collapse navbar -->
                <div class="collapse navbar-collapse gap-5" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0 gap-4">
                    <li class="nav-item">
                      <a class="nav-link active text-white" aria-current="page" href="#">HOME</a>
                    </li>

                    <!-- Dropdown for ROOMS & SUITES -->
                    <li class="nav-item dropdown dropdown-center">
                      <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        ROOMS & SUITES
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="Royal.html"> Royal Rooms</a></li>
                        <li>
                          <a class="dropdown-item" href="DeluxeRoom.html">Deluxe Room</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="Detailroom.html">Room Details</a>
                        </li>
                      </ul>
                    </li>

                    <!-- Centered Dropdown for PAGES -->
                    <li class="nav-item dropdown dropdown-center">
                      <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        PAGES
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#about">About</a></li>
                        <li><a class="dropdown-item" href="#events">Event</a></li>
                        <li><a class="dropdown-item" href="#gallery">Gallery</a></li>
                        
                        <li>
                          <a class="dropdown-item" href="aminities.html">Amenities</a>
                        </li>
                        
                      </ul>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link text-white" href="co">CONTACT</a>
                    </li>
                  </ul>

                  <!-- Book Now Button -->
                  <button type="button" class="btn btn-lg bg-transparent text-white rounded-0 mt-3 mb-5 book-now-btn">
                    Book Now
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  </div>`

  document.getElementById("nav-js").innerHTML=navBar;