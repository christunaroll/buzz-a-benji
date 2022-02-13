import './About_Benji.css';
import {Link} from "react-router-dom";
import React from 'react'
import birthday from "../images/birthday_benji.png";

function About_Benji() {
  return (
    <div className = "largest_container">
      <div className = "main_container"> 
        <div className='picture_container'>
          <img id = "profile_pic" src={birthday}/>
        </div>
        <div className = "description">
            <h3>Benji, also known as Sir Benjamin XVII or Banjo, is a 4 year old shih-poo mix 
              who loves eating Costco's rotisserie chicken and lamb samosas! On his free time, Benji likes to nap, organize his toys,
              and steal his human's socks. He hopes this page makes your day brighter like it does when he recieves chicken 
              ("chimpkin", as he calls it)!</h3>
        </div>
      </div>
    </div>
  )
}

export default About_Benji
