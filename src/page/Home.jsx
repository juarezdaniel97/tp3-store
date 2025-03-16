import React from 'react'
import Body from '../components/layout/Body'
//import { ProductsProvider } from '../contexts/ProductsContext'
import Header from '../components/layout/Header';

const Home = () => {
    return (
        <div>
            {/* Header */}
                <Header/>
            {/* Body */}
                <Body/>
            {/* Footer */}
        </div>
    )
}

export default Home