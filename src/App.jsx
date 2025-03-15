import Home from './page/Home';
import {useProducts} from './hooks/useProducts';

function App() {
  
  const products = useProducts()

  console.log('products-->', products);
  

  return (
    <>
      <Home/>
    </>
  )
}

export default App
