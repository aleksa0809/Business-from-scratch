import React from 'react';
import './page.css'

export default function Showcase(props) {
  const {basket} = props  
  const header = basket && 'Your basket' || 'Our showcase'  
  return (
     <div className="av-page">
         <h1>{header}</h1>
     </div>
  )
}


