import React, { useState } from 'react'
import { Menu,Sun, Moon, ShoppingCart } from "lucide-react";
import Desktop from './Desktop';
import Mobile from './Mobile';
import { menuItems } from '../../data/navigations';
import Button from '../shared/Button';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useCarritoContext } from '../../contexts/CarritoContext';

const Header = () => {

const [isOpenMenu, setIsOpenMenu] = useState(false)
const { theme, toggleTheme } = useThemeContext();
const { getCountPrducts } = useCarritoContext()

    return (
        <nav className='bg-slate-100 text-black dark:bg-gray-900 shadow-md p-4'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                
                    {/* Logo */}
                    <div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-6 bg-gray-600 dark:bg-white rounded-sm" />
                            <div className="w-1 h-6 bg-indigo-600 rounded-sm" />
                            <span className="text-dark dark:text-white text-xl font-semibold">Store</span>
                        </div>
                    </div>

                    {/* Desktop */}
                    <Desktop
                        menuItems={menuItems}
                    />

                    {/* Card and Theme for Desktop */}
                    <div className='hidden md:block space-x-10'>
                        
                        {/* Carrito */}
                        <button className="relative p-2">
                            <ShoppingCart size={24} className="text-gray-700 dark:text-white" />
                            {
                                getCountPrducts()>0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
                                        {getCountPrducts()}
                                    </span>
                                )
                            }
                        </button>

                        {/* Button Theme */}
                        <Button
                            style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 cursor-pointer'}
                            action={toggleTheme}
                            name={theme === "dark" ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-900" />}
                        /> 
                    </div>


                    {/*Card and Theme for Mobile */}
                    <div className='md:hidden space-x-4'>

                        {/* Carrito */}
                        <button className="relative p-2">
                            <ShoppingCart size={24} className="text-gray-700 dark:text-white" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
                                3
                            </span>
                        </button>

                        {/* Button Theme */}
                        <Button
                            style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 cursor-pointer'}
                                    action={toggleTheme}
                            name={theme === "dark" ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-900" />}
                        /> 
                                
                        {/* Menú Burger */}
                        <Button
                        style={'p-2 cursor-pointer'}
                                    action={setIsOpenMenu}
                            name={<Menu size={28} className="text-gray-700 dark:text-white" />}
                        />
                    </div>
            </div>

            {/* Mobile */}
                {isOpenMenu && (
                    <Mobile
                        menuItems={menuItems}
                    />
                )}
        </nav>
    )
}

export default Header