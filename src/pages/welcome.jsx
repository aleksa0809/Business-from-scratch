import React from 'react';
import Carousel from "../components/carousel"
import './page.css'

export default function Welcome() {
  return (
     <div className="av-page">
         <h1>Welcome to our lingerie store</h1> 
         <Carousel />
     </div>
  );
}


