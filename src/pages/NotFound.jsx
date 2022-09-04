import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import '../styles/pages/NotFound.scss'
//Assets
import imageNotFound from '../assets/images/notFound.svg'
//Components
import { Info } from '../containers/Info'

function NotFound() {
    return(
        <React.Fragment>
            <Info>
                <div className='notFound'>
                    <h2 className='notFound__title'>
                        Oops! Look like you're lost
                    </h2>
                    <p className='notFound__subtitle'>
                        Page not found
                    </p>
                    <img className='notFound__image' src={imageNotFound} alt="Not Found 404" />
                    <Link to='/' className='button--primary'>
                        Go to homepage »
                    </Link>
                </div>
            </Info>
        </React.Fragment>
    )
}

export { NotFound }