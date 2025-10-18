const footer=`
   <section class="border-top border-white" id="footer">
  <div class="container-fluid background-color-1 position-relative footer-hover">
    <div class="container">
      <div class="row">
        <!-- Footer Right Section -->
        <div class="col-lg-4 col-12 mt-5 footer-left-sec">
          <!-- Logo -->
          <div class="d-flex gap-2">
            <img src="assets/images/footer/mansarova logo footer.png" alt="" class="img-fluid w-25">
            <!-- <h3 style="color: goldenrod;font-family: cursive;margin-top: 22px;">point <br> mansarovar</h3> -->
          </div>

          <!-- Description -->
          <p class="text-secondary lh-lg">
            Feel free to reach out if you want to collaborate <br> with us or just
            chat.
          </p>

          <!-- Email Subscription Form -->
          <div class="input-group w-75">
            <input type="email" class="form-control shadow-none" placeholder="Enter your email" required />
            <button class="btn btn-warning border-0 text-dark fw-bold">
              <i class="fa-solid fa-envelope fs-3"></i>
            </button>
          </div>

          <!-- Follow Us -->
          <h3 class="lh-lg fs-5 text-white mt-4">Follow us</h3>
          <div class="d-flex gap-3 flex-row social-icon">
            <a href="#"><i class="fa-brands fa-twitter fs-4"></i></a>
            <a href="#"><i class="fa-brands fa-facebook fs-4"></i></a>
            <a href="#"><i class="fa-brands fa-instagram fs-4"></i></a>
            <a href="#"><i class="fa-brands fa-youtube fs-4"></i></a>
          </div>
        </div>

        <!-- Footer Left Section -->
        <!-- Service -->
        <div class="col-lg-2 col-md-6 col-sm-6 mt-5 text-secondary justify-content-end">
          <h2 class="text-white footer-main-heading lh-lg">Service</h2>
          <p>Store Directory</p>
          <p>Top Hotels</p>
          <p>Quick Links</p>
          <p>Important Links</p>
        </div>

        <!-- Company -->
        <div class="col-lg-2 col-md-6 col-sm-6 mt-5 text-secondary ">
          <h2 class="text-white footer-main-heading lh-lg">Company</h2>
          <p>Store Directory</p>
          <p>Top Hotels</p>
          <p>Quick Links</p>
          <p>Important Links</p>
        </div>

        <!-- Address -->
        <div class="col-lg-2 col-md-6 col-sm-6 mt-5 text-secondary">
          <h2 class="text-white footer-main-heading lh-lg">Address</h2>
          <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
        </div>
        <!-- Venue -->
        <div class="col-lg-2 col-md-6 col-sm-6 text-secondary venue-text-hover">
          <h2 class="text-white mt-5 lh-lg footer-main-heading">Venue</h2>
          <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
          <p>(229) 555-0109 info@yourwebsite.com</p>
        </div>
        <hr class="text-light mt-5">
        <h6 class="text-white text-center mt-2">hotelmansarovar@gmail.com</h6>
      </div>
    </div>
    <div class="footer-img position-absolute bottom-0 end-0 z-1">
      <img src="assets/images/footer/footer_bg.png" alt="" class="img-fluid">
    </div>
  </div>
  </section>
`

document.getElementById("footer-last").innerHTML=footer;

