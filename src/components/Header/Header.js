import React from 'react';
import { Link } from 'react-router-dom';
import franchises from '../../franchises.json';
import './header.css';

export default function Header() {

    const links = franchises.map( (franchise, i) => (
        <Link key={i} className='header-link' to={`/location/${franchise.location}`}>
            <p className='header-f-title'>{franchise.name}</p>
            <p className='header-f-loc'>{franchise.location}</p>
        </Link>
     ) )

    return (
        <div className='header-main'>
            <Link className='header-link' to='/'>
                <h1 className='header-title'>React Pizzaria</h1>
            </Link>

            <section className='header-nav'>
                {links}
            </section>
        </div>
    )
}