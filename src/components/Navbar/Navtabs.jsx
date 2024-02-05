import React from 'react'
import RightLeft from '../snippets/RightLeft'
import LeftAligned from '../snippets/LeftAligned'

function Navtabs() {
  return (
    <ul class="nav nav-tabs">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Login
      </a>
      <div class="dropdown-menu">
        <div class="dropdown-item" href="#">
          <RightLeft />
        </div>
        <LeftAligned />
        <LeftAligned />
        <LeftAligned />
        <LeftAligned />
        
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#">
        cart
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        Become a seller
      </a>
    </li>
  </ul>
  )
}

export default Navtabs