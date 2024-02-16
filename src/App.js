
import './App.css';
import Home from './Components/pages/Home';
import Navbar from './Components/Navbar/navbar';
import Blog from './Components/pages/Blog';
import { Routes, Route} from 'react-router-dom'
import Page from './Components/pages/Page'
import Property from './Components/pages/Property'
import AddProperty from './Components/pages/AddProperty'
import JoinUs from './Components/pages/joinUs'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/page' element={<Page/>} />
        <Route path='/property' element={<Property/>} />
        <Route path='/joinUs' element={<JoinUs/>} />
        <Route path='/addProperty' element={<AddProperty/>} />

      </Routes>

      
    </div>
  );
}

export default App;
