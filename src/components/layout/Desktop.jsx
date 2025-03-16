import React from 'react'
import {ShoppingCart} from "lucide-react";
import MenuItem from '../shared/MenuItem';

const Desktop = ({menuItems}) => {
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

                     {/* Carrito */}
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