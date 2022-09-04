import React from 'react'
//Styles
import '../styles/components/Navbar.scss'

function Navbar() {
    return(
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <a className='item__anchor'>Lista de tarjetas</a>
                    
                </li>
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
                <li className='navbar__item'>
                    <a className='item__anchor'>Atencion al cliente</a>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }