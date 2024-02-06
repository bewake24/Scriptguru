import React from 'react'

function Slider() {
  return (
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/739ed527dbf977fe.jpg?q=20" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8296c622899df7e0.jpg?q=20" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  )
}

export default Slider