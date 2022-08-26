import './App.css';
import { Home } from './component/Home';
import { Routes, Route} from 'react-router-dom'
import { About } from './component/About';
// import { Profile } from './component/Profile';
import { Products } from './component/Products';
import { Navbar } from './component/Navbar';
import { AuthProvider } from './component/auth';
import { Login } from './component/Login';
import  Require  from './component/Require';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='profile' element={<Require><Profile/></Require>} />
            <Route path="products" element={<Products />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </AuthProvider>      
    </div>
  );
}

export default App;
