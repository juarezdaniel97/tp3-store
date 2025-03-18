import React, { useState } from 'react'
import { Menu, Sun, Moon, ShoppingCart, X } from "lucide-react";
import Desktop from './Desktop';
import Mobile from './Mobile';
import Card from '../ui/Card';
import Button from '../shared/Button';
import { menuItems } from '../../data/navigations';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useCarritoContext } from '../../contexts/CarritoContext';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const { theme, toggleTheme } = useThemeContext();
    const { getCountPrducts } = useCarritoContext();


    return (
        <nav className='fixed w-full bg-slate-100 text-black dark:bg-gray-900 shadow-md p-3 z-20'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                {/* Logo */}
                <div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-6 bg-gray-600 dark:bg-white rounded-sm" />
                        <div className="w-1 h-6 bg-indigo-600 rounded-sm" />
                        <span className="text-dark dark:text-white text-xl font-semibold">Store</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <Desktop menuItems={menuItems} />

                {/* Card and Theme for Desktop */}
                <div className='hidden md:flex items-center space-x-4'>
                    
                    {/* Carrito */}
                    <div className="relative">
                        
                        <Button
                            style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'}
                            action={setIsCardOpen}
                            name={
                                <>
                                    <ShoppingCart size={24} className="text-gray-700 dark:text-white"/>
                                        {
                                            
                                            getCountPrducts() > 0 && (
                                                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[1.25rem] text-center'>
                                                    {getCountPrducts()}
                                                </span>
                                            )
                                        
                                        }
                                </>
                            }
                        />

                        {/* Cart dropdown */}
                        {isCardOpen && (
                            <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-30">
                                <Card />
                            </div>
                        )}
                    </div>

                    {/* Button Theme */}
                    <Button
                        style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'}
                        action={toggleTheme}
                        name={theme === "dark" 
                            ? <Sun size={20} className="text-yellow-500" /> 
                            : <Moon size={20} className="text-blue-900" />
                        }
                    /> 
                </div>

                {/* Card and Theme for Mobile */}
                <div className='md:hidden flex items-center space-x-2'>
                    {/* Carrito */}
                    <div className="relative">
                        <Button
                                style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'}
                                action={setIsCardOpen}
                                name={
                                    <>
                                        <ShoppingCart size={24} className="text-gray-700 dark:text-white"/>
                                            {
                                                
                                                getCountPrducts() > 0 && (
                                                    <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[1.25rem] text-center'>
                                                        {getCountPrducts()}
                                                    </span>
                                                )
                                            
                                            }
                                    </>
                                }
                            />
                        
                        {/* Cart dropdown for mobile - positioned correctly */}
                        {isCardOpen && (
                            <div className="fixed inset-0 bg-gray-800 z-50 overflow-y-auto pt-5">
                                <div className="p-4">
                                    <button 
                                        onClick={() => setIsCardOpen(false)}
                                        ///onClick={setIsCardOpen}
                                        className="absolute top-14 right-10 text-black hover:text-gray-500 dark:text-white dark:hover:text-slate-100 cursor-pointer"
                                    >
                                        <X size={24} />
                                    </button>
                                    <Card />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Button Theme */}
                    <Button
                        style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'}
                        action={toggleTheme}
                        name={theme === "dark" 
                            ? <Sun size={20} className="text-yellow-500" /> 
                            : <Moon size={20} className="text-blue-900" />
                        }
                    /> 
                            
                    {/* Menú Burger */}
                    <Button
                        style={'p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'}
                        action={() => setIsOpenMenu(prev => !prev)}
                        name={<Menu size={20} className="text-gray-700 dark:text-white" />}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpenMenu && (
                <div className="mt-2">
                    <Mobile menuItems={menuItems} />
                </div>
            )}
        </nav>
    )
}

export default Header