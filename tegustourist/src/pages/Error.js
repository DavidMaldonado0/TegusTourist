import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';


export default function Error() {
    return (
        <Hero>
        <Banner title="Error 404" subtitle="La página no ha sido encontrada"> 
                <Link to="/" className="btn-primary">
                Volver a Inicio</Link>
        </Banner>
        </Hero>
        )
}
