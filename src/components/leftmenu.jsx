import React from 'react';
import "./leftmenu.css"

export default function LeftMenu() {
    return (
        <div class="list-group av-left-side-menu">
          <a href="#/api/toplist" class="list-group-item">Top List</a>
          <a href="#/api/casual/regular" class="list-group-item">Casual regular</a>
          <a href="#/api/casual/large" class="list-group-item">Casual large</a>
          <a href="#/api/lux/regular" class="list-group-item">Lux reguar</a>
          <a href="#/api/lux/large" class="list-group-item">Lux large</a>
        </div>
    )
}
