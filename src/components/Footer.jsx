import React from 'react'
//styles "/*Mobile First Layout*/"
import '../styles/components/Footer.scss'
//assets
import brandIsotipo from '../assets/brand/Isotipo.svg'
function Footer() {
    return(
        <footer className='footer'>
            <div className='footer__isotipo'>
                <img src={brandIsotipo} alt="isotipo" />
            </div>
            <div className='footer__copyright'>
                <h6>
                    ⓒ 2022 Novopayment Inc. All rights reserved.
                </h6>
            </div>
            <div className='footer__isotipo'>
                <img src={brandIsotipo} alt="isotipo" />
            </div>
        </footer>
    )
}

export { Footer }