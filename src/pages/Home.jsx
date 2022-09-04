import React from 'react'
import { Navbar } from '../components/Navbar'
import { Info } from '../containers/Info'

function Home() {
    return(
        <React.Fragment>
            <Navbar />
            <Info>
                <p>
                    info
                </p>
            </Info>
        </React.Fragment>
    )
}

export { Home }