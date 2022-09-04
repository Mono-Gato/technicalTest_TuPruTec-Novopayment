import React, { useState } from 'react'
//Styles
import '../styles/components/Navbar.scss'
//data
 import defaultDATA from '../data/servicio.json'
import { NavbarItem } from './NavbarItem';

function Navbar() {
    const [ navbarInfoMenu, setNavbarInfoMenu ] = React.useState(defaultDATA.lista[0]);
    console.log(Object.keys(navbarInfoMenu))

    return(
        <nav className='navbar'>
            <ul className='navbar__list'>
            <li className='navbar__item'>
                    <a className='item__anchor'>Transferencias y pagos</a>
                    <ul className='item__dropdown'>
                        <li className='dropdown__item'>
                            <a className='item__anchor'>Entre tarjetas </a>
                        </li>
                        <li className='dropdown__item'>
                            <a className='item__anchor'>Cuenta bancaria </a>
                        </li>
                        <li className='dropdown__item'>
                            <a className='item__anchor'>Tarjetas de credito </a>
                        </li>
                    </ul>
                </li>
                {
                   Object.keys(navbarInfoMenu).map((name, index) =>{
                    return (
                        <NavbarItem
                            key={index}
                            text={name}
                        />
                    )
                   })
                }
               
                
            </ul>
        </nav>
    )
}

export { Navbar }