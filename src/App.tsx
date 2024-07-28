import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Outlet } from "react-router-dom";

const App= ()=> {


  return (
    <>
     <div className="flex h-screen">
       <Sidebar /> 
      
      <div className="flex flex-col flex-1">
         <Header /> 
        <Outlet></Outlet>
      </div>
    </div>
    </>
  )
}

export default App
