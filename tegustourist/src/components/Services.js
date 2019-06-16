import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';


export default class Services extends Component {

    state={
        sevices:[
            {
                icon: <FaCocktail/>,
                title: "Coctéles Gratis",
                info: 'Te ofrecemos tu cocteles favoritos gratis, acompañados de los mejores platillos y un amplio menú'
            },
            {
                icon: <FaHiking/>,
                title: "Guias Turisticos",
                info: 'Guías turisticos te acompañaran a visitar los mejores destinos'
            },
            {
                icon: <FaShuttleVan/>,
                title: "Transporte Gratis",
                info: 'Te ofrecemos transporte gratis a los destinos seleccionados dentro del paquete'
            },
            {
                icon: <FaBeer/>,
                title: "Bebidas de Costesía",
                info: 'Bebidas a tu gusto de cortesía'
            }
        ]
    }


    render() {
        return (
            <section className="services">
                <Title title="Servicios" />
                <div className="services-center">
                    {this.state.sevices.map((item,index) =>{
                        return( <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>);
                    })}
                </div>
            </section>
        )
    }
}
