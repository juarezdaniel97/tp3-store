import { ShoppingCart } from "lucide-react";
import { useCarrito } from "../hooks/useCarrito";

const Navbar = () => {
    const { getCountPrducts } = useCarrito();

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <h1 className="text-xl font-bold">Stored</h1>
        <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            {getCountPrducts() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {getCountPrducts()}
            </span>
            )}
        </div>
        </nav>
    );
};

export default Navbar;
