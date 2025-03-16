import { useProductsContext } from "./contexts/ProductsContext"
import { useThemeContext } from "./contexts/ThemeContext"
import Home from "./page/Home";



function App() {
  const {theme, toggleTheme} = useThemeContext();
  const products  = useProductsContext();

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-black dark:bg-gray-800 dark:text-white">  
        <Home/>
      </div>
    </>
  )
}

export default App
