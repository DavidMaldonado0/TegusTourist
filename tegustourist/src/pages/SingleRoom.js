import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {

    constructor(props) {
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    } 

    //componentDidMount(){}

    static contextType = RoomContext;

    render() {

        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return (
                <div className="error">
                    <h3>No hay registro de la habitacion ingresada...</h3>
                    <Link to='/rooms' className="btn-primary">Volver a Habitaciones</Link>
                </div>
            );
        } 

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        

        const [mainImg, ...defaultImg] = images;

        return(
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name}`}>
                <Link to='/rooms' className="btn-primary">Volver a Habitaciones</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name}/>;
                    }) }
                </div>  
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Detalles</h3> 
                        <p>{description}</p>
                    </article> 
                    <article className="info">
                        <h3>Información</h3> 
                        <h6>precio : ${price}</h6>
                        <h6>tamaño : {size} MtC.</h6>
                        <h6>capacidad : {
                            capacity > 1 ? `${capacity} personas`: `${capacity} personas`
                        }
                        </h6>
                        <h6>{pets ? "Se permiten Mascotas" : "No se permiten mascotas"}</h6>
                        <h6>{breakfast && "Desayuno Gratis Incluido"}</h6>
                    </article> 
                </div>   
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index) =>{
                        return <li key={index}>-{item}</li>
                    })}
                </ul>
            </section>
            </>
        );
    };
}
