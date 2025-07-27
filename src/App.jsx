import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/UI/Pages/Home'
import Layout from './components/Parsial/Layout'
import ProductDetail from './components/UI/Pages/ProductDetail'
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}
export default App