import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {

    return (
        <div className='home-main'>
            <Header />

            <section className='home-body'>
                <div className='home-hero' />

                <div className='home-info'>
                    <h2>Welcome to the React Pizzaria!</h2>
                    <p>The links in the header will take you to our different franchise pages.</p>
                    <p>
                        If you are a new franchise owner, follow
                        <Link to='/admin' className='home-link'>this link</Link>
                        to create your new franchise.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;