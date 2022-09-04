import React from 'react'
//styles
import '../styles/containers/Info.scss'

function Info({ children }) {
    return(
        <main className='info'>
            {children}
        </main>
    )
}

export { Info }