import { Toaster } from "react-hot-toast";
import Home from "./page/Home";



function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-black dark:bg-gray-800 dark:text-white">  
        <Home/>
        <Toaster
          position="bottom-right"
        />
      </div>
    </>
  )
}

export default App
