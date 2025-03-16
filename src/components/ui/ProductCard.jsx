import React from 'react'
import { Plus, ShoppingCart } from 'lucide-react';
import Button from '../shared/Button';
import { useCarritoContext } from '../../contexts/CarritoContext';

const ProductCard = ({product}) => {
    
    const { addToCard } = useCarritoContext();

    return (
        <div className='dark:bg-gray-700  bg-sky-100  rounded-lg overflow-hidden'>
            
            <div className='h-48 flex items-center justify-center bg-sky-50  dark:bg-gray-600 shadow-lg'>
                    {
                        product.image ? 
                            (<img src={product.image} alt={product.name} className='h-full w-full object-cover'/>) : 
                            ( <div className="text-gray-500">No image</div>)
                    }
            </div>

            <div className='p-4'>
                <h3 className="dark:text-whitetext-gray-700 font-medium">{product.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                    
                    <span className="text-indigo-400 font-medium">${product.price.toFixed(2)}</span>
                    
                    
                    <Button
                        style={'flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg transition-colors cursor-pointer'}
                        action={addToCard}
                        param={product}
                        name={
                            <>
                            {/* <ShoppingCart size={16} className="text-amber-300 mr-1"/> */}
                            <span>Añadir </span>
                            <Plus className="ml-1 w-5 h-5" />
                            </>
                        }
                    />
                </div>
            </div>
            
        </div>
    )
}

export default ProductCard