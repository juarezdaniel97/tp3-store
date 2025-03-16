import { useEffect, useState } from "react";

export const useCarrito = ()=>{

    const [carrito, setCarrito] = useState( ()=>{
            const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []
            return carritoLocalStorage;
        })
    
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])


    //Añadir un producto
    const addToCart = (product) => {

        setCarrito((prev) => {
            
            const existingProduct = prev.find((item) => item.id === product.id);

            if (existingProduct) {

                return prev.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item);

            } else {

                return [...prev, { ...product, cantidad: 1 }];

            }
        });
    };


    //Decrementar Cantidad del Producto
    const decreaseQuantity = (id) => {
            setCarrito((prev) => prev.map((item) =>item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item)
                .filter((item) => item.cantidad > 0)
            );
    };
    
    //Eliminar Producto
    const deleteProduct = (id) =>{
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    }

    // Calcular el total del carrito
    const getTotalPrice = () => {
        return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
    };

    //Cantidad de Productos 
    const getCountPrducts = () =>{
        return carrito.reduce((contador, item) => contador + item.cantidad, 0)
    }

    /*
        const recuento = almacenamiento.reduce((contador, { estado }) => estado === '0' ? contador + 1 : contador, 0);
    console.log(recuento); // 6
    */

    return {
        carrito, 
        addToCart,
        decreaseQuantity,
        deleteProduct,
        getTotalPrice,
        getCountPrducts
    }
}