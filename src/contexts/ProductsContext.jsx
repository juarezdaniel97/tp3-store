import { createContext, useContext } from "react";
import { getProductsAPI } from "../hooks/useProducts";

// 1. Creamos el contexto
const ProductsContext = createContext();

// 2. Creamos el Proveedor
export function ProductsProvider({children}) {
    const productsValue = getProductsAPI();

    return (
        <ProductsContext.Provider value={productsValue}>
            {children}
        </ProductsContext.Provider>
    )
}

// 3. Crear y consumir el Coustum Hook
export function useProductsContext() {
    const context = useContext(ProductsContext);

    if (context === undefined) {
        throw new Error("useProductsContext, debe ser utilizado dentro de un ProductsProvider");
    }

    return context;
}