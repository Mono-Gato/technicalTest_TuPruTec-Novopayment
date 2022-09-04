import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Styles "/*Mobile First Layout*/"
import '../styles/global.scss'
//Components
import { Layout } from '../containers/Layout';
import { Info } from '../containers/Info';

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Info />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default App;