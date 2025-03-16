import React, { useState } from 'react'
import { Menu,Sun, Moon, ShoppingCart } from "lucide-react";
import Desktop from './Desktop';
import Mobile from './Mobile';
import { menuItems } from '../../data/navigations';
import Button from '../shared/Button';
import { useThemeContext } from '../../contexts/ThemeContext';

const Header = () => {

const [isOpenMenu, setIsOpenMenu] = useState(false)
const {theme, toggleTheme} = useThemeContext();
    return (
        <nav className='bg-slate-100 text-black dark:bg-gray-900 shadow-md p-4'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                {/* Logo */}
                <h1 className='text-2xl font-bold text-gray-800  dark:text-white'>Stored</h1>
            
                {/* Desktop */}
                    <Desktop
                        menuItems={menuItems}
                    />

                    {/* Carrito */}
                        <button className="md:hidden relative p-2">
                            <ShoppingCart size={24} className="text-gray-700 dark:text-white" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
                            3
                            </span>
                        </button>

                        {/* Mobile */}
                        <div>
                             {/* Button Theme */}
                                <Button
                                    style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 cursor-pointer'}
                                    action={toggleTheme}
                                    name={theme === "dark" ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-900" />}
                                /> 
                            {/* Menú Burger */}
                                <Button
                                    style={'md:hidden p-2 cursor-pointer'}
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