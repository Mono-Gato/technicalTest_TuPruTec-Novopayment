import React from 'react'
//styles
import '../styles/containers/Info.scss'

function NavbarItem({text, index}) {
    return(
        <li key={index} className='navbar__item'>
            <a className='item__anchor'>{text}</a>
        </li>
    )
}

export { NavbarItem }