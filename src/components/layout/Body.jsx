import React from 'react'
import { useProductsContext } from '../../contexts/ProductsContext'

const Body = () => {

    const products = useProductsContext()

    console.log('products -->', products);
    
    return (
        <main>
            <main className="container mx-auto px-6 py-8">
            
            <h1 className="text-3xl font-bold text-white mb-8">Productos destacados</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))} */}

                {
                    products.map(product => product.name)
                }
            </div>
        </main>
        </main>
    )
}

export default Body