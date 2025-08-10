import React from 'react'
import "../style/preloader.css";
import logo from "/logomeain1.png"
const Preloader = () => {
  return (
<div id="preloader">
  <div class="chakra">
    <div class="mandala"></div>
    <img src={logo} alt="Jeevan Chakra" class="logo" />
    <div class="chakra-text">Om Jeevan Chakra</div>
  </div>
</div>

  )
}

export default Preloader