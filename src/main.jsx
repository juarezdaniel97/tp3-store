import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { ProductsProvider } from './contexts/ProductsContext.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
            <ThemeProvider>
              <ProductsProvider>
                <CarritoProvider>
                  <App />
                </CarritoProvider>

              </ProductsProvider>
            </ThemeProvider>
  </StrictMode>,
)
