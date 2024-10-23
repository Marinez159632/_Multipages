import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout/Layout'
import Home from './pages/Home/Home'
import Calculator from './pages/Calculator/Calculator'
import Components from './pages/components/components'
import Todo from './pages/Todo/Todo'
import Products from './pages/Products/Products'
import Carts from './pages/Carts/Carts'
import Login from './pages/Login/Login'
import Animation from './pages/Animation/Animation'

import { fetchProducts } from "./data/products";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'



//HashRouter , BrowserRouter, MemoryRouter
// localhost:5173/#/<paths>   //HashRouter *old compatable\ 
// localhost:5173/<paths>     //BrowserRouter *production
// localhost:5173             //MemoryRouter

// App -> Layout -> Navbar (buttons)
// tab -> (props)

const intTab = 'home'

function App() {
  const [tab, setTab] = useState('')
  useEffect(() => {
    setTab(intTab)
  }, []) //first load

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => setProducts(fetchProducts()), [])
  useEffect(() => console.log(products), [products])


  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  if (token === '') {
    return (<Login  setToken={setToken} setRole={setRole}/>)
  } else {

    return (
      <>
        <div className='App-container'>
          <HashRouter>
            <Routes>
              <Route element={<Layout tab={tab} setTab={setTab} products={products} carts={carts} 
              setToken={setToken}/>}>
                <Route path={"/"} element={<Home />} />
                <Route path={"/home"} element={<Home />} />
                <Route path={"/Animation"} element={<Animation />} />
                <Route path={"/todo"} element={<Todo />} />
                <Route path={"/calculator"} element={<Calculator />} />
                <Route path={"/Components"} element={<Components />} />
                <Route path={"/Products"} element={<Products products={products}
                  carts={carts} setCarts={setCarts} />} />
                <Route path={"/Carts"} element={<Carts carts={carts}
                  setCarts={setCarts} />} />
              </Route>
            </Routes>
          </HashRouter>
        </div>
      </>
    )

  }
}

export default App
