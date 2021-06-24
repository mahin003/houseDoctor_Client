import { faFacebook, faLinkedin, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div >
           
<footer class="text-center text-lg-start bg-light text-muted" >

  <section
    class="d-flex justify-content-center justify-content-lg-between p-2 "
  >

  </section>
  

  
  <section class="">
    <div class="container text-center text-md-start mt-3">
     
      <div class="row mt-3">
      
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>House Doctors
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

      
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links  
          </h6>
          <p>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </p>
          <p>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </p>
          <p>
          <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
          </p>
          <p>
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </p>
        </div>
       

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i>Bangladesh, Syl 10012</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            AkumBakum@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
       
      </div>
    
    </div>
  </section>
  

  
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="">@MahinQureshi</a>
  </div>
  
</footer>

        </div>
    );
};

export default Footer;