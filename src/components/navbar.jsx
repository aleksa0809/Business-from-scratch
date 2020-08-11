import React from 'react';
import BasketCount from './basket-count'
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="https://www.instagram.com/aleksandra787877/?hl=sv">Instagram</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="mailto:admin@anna-veronica.com">Contact</a>
                  </li>
              </ul>
          </div>
          <div className="mx-auto order-0">
              <a className="navbar-brand mx-auto" href="#">Anna Veronica lingerie store</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                  <span className="navbar-toggler-icon"></span>
              </button>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <BasketCount />
          </div>
      </nav>
  )
}
