import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import {Link} from 'react-router-dom';

 

export default function Home() {
    return(
        <>
        <Hero>
            <Banner title="Habitaciones de Lujo" subtitle="Habitaciones Deluxe desde $100"> 
                <Link to="/rooms" className="btn-primary">
                Nuestras Habitaciones</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        <footer className="homefooter">
	    <p>
		Created by
		<a target="_blank" href="https://github.com/DavidMaldonado0"> David Maldonado </a>
		- Get the code
		<a target="_blank" href="https://github.com/DavidMaldonado0"> here</a>.
	    </p>
        </footer>
        </>
    );
};

