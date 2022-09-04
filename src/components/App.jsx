import React from 'react';
//Styles "/*Mobile First Layout*/"
import '../styles/global.scss'
//Components
import { Footer } from './Footer';
import { Layout } from '../containers/Layout';
import { Header } from './Header';
import { Info } from '../containers/Info';

function App() {
    return(
        <Layout>
            <Header />
            <Info />
            <Footer />
        </Layout>
    )
};

export default App;