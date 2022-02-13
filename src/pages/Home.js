import React, {useState, useEffect} from 'react';
import './Home.css';
import {Link} from "react-router-dom";

// import all images
import first from "../benji_images/first_buzz.jpg";
import angry from "../benji_images/angry_benji.jpg";
import beg from "../benji_images/beg_benji.jpg";
import bug from "../benji_images/bug_benji.jpg";
import bug2 from "../benji_images/bug_benji2.jpg";
import close from "../benji_images/close_benji.jpg";
import corner from "../benji_images/corner_benji.jpg";
import dark from "../benji_images/dark_benji.jpg";
import happy from "../benji_images/happy_benji.jpg";
import huh from "../benji_images/huh_benji.jpg";
import moving from "../benji_images/moving_benji.jpg";
import park from "../benji_images/park_benji.jpg";
import present from "../benji_images/present_benji.jpg";
import reallyclose from "../benji_images/reallyclose_benji.jpg";
import side from "../benji_images/side_benji.jpg";
import sit from "../benji_images/sit_benji.jpg";
import weird from "../benji_images/weird_benji.jpg";

/* 
// ORIGINAL non-working one 
function get_random_image() {
// get a random index
let random_index = Math.floor(Math.random()*image_array.length);
  
// get an image at the random index
let selected_image = image_array[random_index];

console.log(selected_image);
  
//display image
document.getElementById('image_shower').src = selected_image;
}*/

const image_array = [
  first,
  angry,
  beg,
  bug, 
  bug2,
  close, 
  corner, 
  dark,
  happy,
  huh, 
  moving,
  park,
  present, 
  reallyclose,
  side,
  sit,
  weird
];

function get_random_number(number) {
  return Math.floor(Math.random()*image_array.length);
  /*
  if you want to traverse through image array in order 
  if (number + 1 == image_array.length) {
    return 0;
  } else {
    return number + 1;
  }
  */
}

function Home() {
  
  const [index, setIndex] = useState(0);

  return (
    <div className = "home">
      <div className="description_container">
          <h1>
              When life gets you down, buzz a Benji to pick you back up!
          </h1>
      </div>
      <div className="image_container">
          <img className="image_shower" src={image_array[index]}/>
      </div>
      <button 
        onClick = {() => setIndex(get_random_number(index))}
        className="buzz_button">
          <h2>Buzz Here!</h2>
        </button>
    </div>
  )
}

export default Home;

// fix the randomizer
