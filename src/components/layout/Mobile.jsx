import React from 'react'
import {ShoppingCart, Sun, Moon } from "lucide-react";
import { useThemeContext } from '../../contexts/ThemeContext';

import MenuItem from '../shared/MenuItem';


const Mobile = ({menuItems}) => {

    const {theme, toggleTheme} = useThemeContext();

    return (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
                    
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

                    {/*Button Theme */}
                    <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
                        {theme === "dark" ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-800" />}
                    </button>

                    {/* Ícono del carrito */}
                    <button className="relative p-2">
                        <ShoppingCart size={24} className="text-gray-700 dark:text-white" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
                        3
                        </span>
                    </button>
                </div>
    )
}

export default Mobile