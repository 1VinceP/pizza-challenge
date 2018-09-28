import React, { Component } from 'react';
import './menu.css';

function Menu({ items, onSelect }) {

    const list = items.map( (item, i) => (
        <div key={i} className='menu-item' onClick={() => onSelect( item )}>{item.title}</div>
    ) )

    return (
        <div className='menu-main'>
            {list}
        </div>
    )
}

export default Menu;