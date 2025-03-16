import React, { useState } from 'react'
import { Menu, ShoppingCart, Sun, Moon } from "lucide-react";
import { useThemeContext } from '../../contexts/ThemeContext';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { menuItems } from '../../data/navigations';

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

                {/* Menú hamburguesa en móviles */}
                <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <Menu size={28} className="text-gray-700 dark:text-white" />
                    </button>
            </div>

            {/* Menú desplegable en móviles */}
            {isOpenMenu && (
                <Mobile
                    menuItems={menuItems}
                />
            )}
        </nav>
    )
}

export default Header