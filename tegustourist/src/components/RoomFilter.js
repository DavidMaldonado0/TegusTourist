import React from 'react';
import {useContext} from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";


//get all unique values

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
}


export default function RoomFilter({rooms}) {

    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;

    // get unique types
    let types = getUnique(rooms, 'type');

    // add all
    types = ['all',...types];

    //map to jsx
    types = types.map((item,index) =>{
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms,'capacity');

    people = people.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Buscar Habitaciones" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                <label htmlFor="type">Tipo de Habitacion</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types}
                </select>
                </div>
                {/* end select type */}

                {/* guest type */}
                <div className="form-group">
                <label htmlFor="capacity">Capacidad</label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                    {people}
                </select>
                </div>
                {/* end guest type */}

                {/* room price */}
                <div className="form-group">
                <label htmlFor="price">Precio de Habitacion ${price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/* end room price */}

                {/* size */}
                <div className="form-group">
                <label htmlFor="size">Tamaño de la Habitacion</label>
                <div className="size-inputs">
                <input type="number" name="minSize" value={minSize} onChange={handleChange} className="size-input" />
                <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
                </div>
                </div>
                {/* end of size */}

                {/* extras */}
                <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                    <label htmlFor="breakfast">Desayuno</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                    <label htmlFor="pets">Mascotas</label>
                </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
 