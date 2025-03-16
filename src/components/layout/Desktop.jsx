import React from 'react'
import { useThemeContext } from '../../contexts/ThemeContext';
import {ShoppingCart, Sun, Moon } from "lucide-react";
// import { menuItems } from '../../data/navigations';
import MenuItem from '../shared/MenuItem';

const Desktop = ({menuItems}) => {
    const {theme, toggleTheme} = useThemeContext();
    return (
        <div className='hidden md:flex items-center space-x-6'>

                    {
                        menuItems.map((item, index ) =>(
                            <MenuItem
                                key={index}
                                title={item.title}
                                href={item.href}
                                isNew={item.isNew}
                            />
                        ))
                    }

                    {/* Button Theme */}
                    <button onClick={toggleTheme} className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 cursor-pointer'>
                        {theme === "dark" ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-900" />}
                    </button>

                     {/* Ícono del carrito */}
                    <button className="relative p-2">
                        <ShoppingCart size={24} className="text-gray-700  dark:text-white" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
                            3
                        </span>
                    </button>
                </div>
    )
}

export default Desktop