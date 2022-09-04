import React from 'react';
//Styles "/*Mobile First Layout*/"
import '../styles/global.scss'
//Components
import { Footer } from './Footer';
import { Layout } from '../containers/Layout';
import { Header } from './Header';

function App() {
    return(
        <Layout>
            <Header />
            <Footer />
        </Layout>
    )
};

export default App;