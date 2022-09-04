import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Styles "/*Mobile First Layout*/"
import '../styles/global.scss'
//Components
import { Layout } from '../containers/Layout';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default App;