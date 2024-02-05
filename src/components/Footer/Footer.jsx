import React from 'react';
import "./Footer.css"
import FooterBottom from './FooterBottom';

function Footer() {
  return (
<footer class="bg-body-tertiary text-start text-lg-start">
  <div class="container p-4">

    <div class="row">

      <div class="col-lg-2 col-md-4 mb-md-0">
        <h5 class="text-uppercase">About</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-body">Contact Us</a>
          </li>
          <li>
            <a href="#!" class="text-body">About us</a>
          </li>
          <li>
            <a href="#!" class="text-body">Careers</a>
          </li>
          <li>
            <a href="#!" class="text-body">Flipkart Stories</a>
          </li>
          <li>
            <a href="#!" class="text-body">Contact Us</a>
          </li>
          <li>
            <a href="#!" class="text-body">About us</a>
          </li>
          <li>
            <a href="#!" class="text-body">Careers</a>
          </li>
          <li>
            <a href="#!" class="text-body">Flipkart Stories</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Help</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="text-body">Payments</a>
          </li>
          <li>
            <a href="#!" class="text-body">Shipping</a>
          </li>
          <li>
            <a href="#!" class="text-body">Cancellation & Returns</a>
          </li>
          <li>
            <a href="#!" class="text-body">FAQ</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-4 mb-md-0">
        <h5 class="text-uppercase">Consumer Policy</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <a href="#!" class="text-body">Cancellation & Returns</a>
          </li>
          <li>
            <a href="#!" class="text-body">Term of Use</a>
          </li>
          <li>
            <a href="#!" class="text-body">Security</a>
          </li>
          <li>
            <a href="#!" class="text-body">Privacy</a>
          </li>
          <li>
            <a href="#!" class="text-body">Term of Use</a>
          </li>
          <li>
            <a href="#!" class="text-body">Security</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Social</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="text-body">Facebook</a>
          </li>
          <li>
            <a href="#!" class="text-body">Twitter</a>
          </li>
          <li>
            <a href="#!" class="text-body">Youtube</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Mail Us</h5>

       <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link.</p>
      </div>

      <div class="col-lg-2 col-md-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Registered Office</h5>

        <ul class="list-unstyled">
          <p>Add captions to your slides easily with the .carousel-caption element within any .carousel-item. They can be easily hidden on smaller viewports, as shown below, with optional display utilities. We hide them initially with .d-none and bring them back on medium-sized devices with .d-md-block</p>
        </ul>
      </div>

    </div>

  </div>
    <hr />
  <FooterBottom />

</footer>
  )
}

export default Footer