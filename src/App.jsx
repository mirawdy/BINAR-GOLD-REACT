import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import CarDetail from './pages/CarDetail.jsx'
import CarList from './pages/CarList.jsx'
import CarSearch from './pages/CarSearch.jsx'
import Nav from './components/Nav'

function App() {return(
  <BrowserRouter>
  <Routes>
    <Route element={<Home/>} path="/"/>
    <Route element={<CarDetail/>} path="/cars/:id"/>
    <Route element={<CarList/>} path="/cars"/>
    <Route element={<CarSearch/>} path="/cars/search"/>
  </Routes>
  </BrowserRouter>
)
}

export default App;
