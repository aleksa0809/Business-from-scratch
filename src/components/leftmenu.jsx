import React from 'react';
import "./leftmenu.css"

export default function LeftMenu() {
    return (
        <div className="list-group av-left-side-menu">
          <a href="#/api/showcase" className="list-group-item">Showcase</a>
          <a href="#/api/basket" className="list-group-item">Basket</a>
        </div>
    )
}
