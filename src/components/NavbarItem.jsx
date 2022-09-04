import React from 'react'
//styles
import '../styles/containers/Info.scss'

function NavbarItem(props) {
    return(
        <li key={props.key} className='navbar__item'>
            <a className='item__anchor'>{props.text}</a>
        </li>
    )
}

export { NavbarItem }