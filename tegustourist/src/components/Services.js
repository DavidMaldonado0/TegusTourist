import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';


export default class Services extends Component {

    state={
        sevices:[
            {
                icon: <FaCocktail/>,
                title: "Coctéles Gratis",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique, odio vitae maximus iaculis, odio diam pharetra dui, eget commodo lectus ligula in odio.'
            },
            {
                icon: <FaHiking/>,
                title: "Guias Turisticos",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique, odio vitae maximus iaculis, odio diam pharetra dui, eget commodo lectus ligula in odio.'
            },
            {
                icon: <FaShuttleVan/>,
                title: "Transporte Gratis",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique, odio vitae maximus iaculis, odio diam pharetra dui, eget commodo lectus ligula in odio.'
            },
            {
                icon: <FaBeer/>,
                title: "Bebidas de Costesía",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique, odio vitae maximus iaculis, odio diam pharetra dui, eget commodo lectus ligula in odio.'
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
