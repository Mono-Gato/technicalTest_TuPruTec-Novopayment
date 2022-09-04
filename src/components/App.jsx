import React from 'react';
//Styles "/*Mobile First Layout*/"
import '../styles/global.scss'
//Components
import { Footer } from './Footer';
import { Layout } from '../containers/Layout';

function App() {
    return(
        <Layout>
            <Footer />
        </Layout>
    )
};

export default App;