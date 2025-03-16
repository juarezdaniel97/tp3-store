import React from 'react'
import Body from '../components/layout/Body'
//import { ProductsProvider } from '../contexts/ProductsContext'
import Header from '../components/layout/Header';
import Navbar from '../components/Navbar';
//import { useCarrito } from '../hooks/useCarrito';

const Home = () => {

    //const {getTotalPrice, getCountPrducts} = useCarrito()

    //console.log('getCountProuct -->', getCountPrducts);
    //console.log('getTotalPrice -->', getTotalPrice);
    
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