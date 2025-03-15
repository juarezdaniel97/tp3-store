import { useEffect, useState } from "react";

export const useCarrito = ()=>{

    const [carrito, setCarrito] = useState( ()=>{
            const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []
            return carritoLocalStorage;
        })
    
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])


    const addToCard = (product) => {

        const findProduct = getProduct(product.id)

        console.log('findProduct -->', findProduct );
        
        if (!findProduct) {
            const updateCard = [...carrito, product]
            setCarrito(updateCard)
            console.log('cargado.. ');
            
        }else{
            console.log('El producto ya existe.. ');
        }
    }

    const deleteFromCard = (id) =>{
        const updateCard = carrito.filter((product=> product.id !== id ))
        setCarrito(updateCard)
    }

    const getProduct = (id) => {
        
        const foundProduct = carrito.find(element => element.id === id) 

        return foundProduct
    }

    return {carrito, addToCard, getProduct}
}