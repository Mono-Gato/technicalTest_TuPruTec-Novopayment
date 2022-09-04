import React from 'react'
//styles "/*Mobile First Layout*/"
import '../styles/components/Header.scss'
//assets
import brandLogo from '../assets/brand/Tu-PruTec.svg'
import iconArrowDown from '../assets/icons/Arrow-Down.svg'

function Header () {
    return(
        <header className='header'>
            <div className='header__logo'>
                <img src={brandLogo} alt="logo Tu PruTec" />
            </div>
            <div className='header__user'>
                <p>
                    user name
                    <img src={iconArrowDown} alt="Icon Arrow Down" />
                </p>
            </div>
        </header>
    )
}

export { Header }