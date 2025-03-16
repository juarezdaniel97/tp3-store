import React from 'react';
//import { useThemeContext } from '../context/themeContext';
import { useThemeContext } from '../contexts/ThemeContext';

const ThemeShowcase = () => {
    const { theme, toggleThema } = useThemeContext();

    return (
        <div className="w-full max-w-4xl mx-auto p-6 transition-all duration-300 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Tema Actual: <span className="text-blue-600 dark:text-blue-400">{theme === 'dark' ? 'Oscuro' : 'Claro'}</span>
                </h2>
                
                <button
                    onClick={toggleThema}
                    className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white  cursor-pointer flex items-center gap-2 transition-colors duration-200"
                >
                            {theme === 'dark' ? (
                                <>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                                </svg>
                                Cambiar a Claro
                                </>
                            ) : (
                                <>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                    Cambiar a Oscuro
                    </>
                )}
                </button>
            </div>
        
            {/* Ejemplos de componentes con diferentes estilos según el tema */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card de película */}
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-colors duration-300">
                <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                    </svg>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Título de Película</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                    <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Acción, Aventura</span>
                    <button className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
                
                {/* Panel de información */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Información del tema</h3>
                <ul className="space-y-3">
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Transiciones suaves entre temas
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Persistencia en localStorage
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Compatible con preferencias del sistema
                    </li>
                </ul>
                <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm text-gray-800 dark:text-gray-200">
                    <code className="font-mono">
                    Tema actual: "{theme}"
                    </code>
                </div>
                </div>
                
                {/* Formulario */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Formulario de ejemplo</h3>
                <form>
                    <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Nombre</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Correo electrónico</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white" placeholder="ejemplo@correo.com" />
                    </div>
                    <div className="flex items-center">
                    <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Recordarme</label>
                    </div>
                    <button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                    Enviar
                    </button>
                </form>
                </div>
                
                {/* Paleta de colores */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Paleta de colores</h3>
                <div className="grid grid-cols-4 gap-2 mb-4">
                    <div className="flex flex-col items-center">
                    <div className="w-full h-10 bg-gray-100 dark:bg-gray-900 rounded"></div>
                    <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Fondo</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="w-full h-10 bg-white dark:bg-gray-800 rounded"></div>
                    <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Tarjeta</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="w-full h-10 bg-blue-500 rounded"></div>
                    <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Primario</span>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Borde</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-900 dark:text-white font-medium">Texto normal</p>
                    <p className="text-gray-700 dark:text-gray-300">Texto secundario</p>
                    <p className="text-gray-500 dark:text-gray-400">Texto terciario</p>
                    <p className="text-blue-600 dark:text-blue-400">Texto de acento</p>
                </div>
                </div>
            </div>
        
            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Este componente muestra varios elementos UI con estilizado adaptativo según el tema seleccionado.
                </p>
            </div>
        </div>
    );
};

export default ThemeShowcase;