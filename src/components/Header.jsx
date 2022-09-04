import React from 'react'
//styles "/*Mobile First Layout*/"
import '../styles/components/Header.scss'

function Header () {
    return(
        <header className='header'>
            <div className='header__logo'>
                <img src="" alt="logo Tu PruTec" />
            </div>
            <div className='header__user'>
                <p>
                    user name
                    <img src="" alt="Icon Arrow Down" />
                </p>
            </div>
        </header>
    )
}

export { Header }