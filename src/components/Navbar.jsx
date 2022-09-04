import React, { useState } from 'react'
//Styles
import '../styles/components/Navbar.scss'
//data
import defaultDATA from '../data/servicio.json'
import { NavbarItem } from './NavbarItem';

function Navbar() {
    const [navbarInfoMenu, setNavbarInfoMenu] = React.useState(defaultDATA.lista[0]);
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                {/*
                Structure
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
                </li>*/}
                {
                    Object.entries(navbarInfoMenu).map(([name, value]) => {
                        return (
                            <NavbarItem
                                key={name}
                                text={name}
                            />
                        )
                    })
                }
                {
                    Object.entries(navbarInfoMenu).map(([entry, value]) => {
                        console.log('level 1', entry, value)
                        if (value.length > 0) {
                            Object.entries(value[0]).map(([key2]) => {
                                console.log('level2', key2)
                            });
                        }
                    })
                }
            </ul>
        </nav>
    )
}

export { Navbar }