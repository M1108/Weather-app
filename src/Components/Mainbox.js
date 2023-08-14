import React from 'react'

export default function Mainbox() {
  return (
<>

<div className="background-blue">

  <div className="background-blue-image-blur">

<div className="heading-of-plus--and-celcius-and-farenheit">
  <div className="right-plus-sign"></div>
  <div className="left-most-celcius-and-ferenhiet">
    <div className="celcius">&deg; C</div>
    <div className="togglebar">

    <input type="checkbox" id="switch" /><label for="switch">Toggle</label>

    </div>
    <div className="farenheit"> &deg; F</div>

  </div>
</div>
<div className="left-side-country-name-and-date-time">

<div className="left-side-country-name-and-time">
  <div className="left-side-country">New York,USA</div>
  <div className="left-side-country">07:19</div>
</div>



<div className="left-side-country-name-and-time"> 

<div className="left-side-country-name-and-time">
  <div className="left-side-country" id='left-side-date-'>Today 12 Aug</div>
  <div className="left-side-country">19:19</div>
</div>


</div>



</div>


<div className="celcius-box">

  

  <div className="celcius-temperature">27&deg;</div>


  <div className="whether">
    <div className="whether-sunny">
    <div className="whether-icon"></div>  <span></span>
Sunny</div>
  </div>
  




</div>
</div>
</div>




</>

    )
}
