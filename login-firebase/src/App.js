import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import AddContact from './components/AddContact';
import Edit from './components/Edit';
import { LoggedInRoute, PrivateRoutes } from './components/protectedRoute';




function App() {
  return (
    <div className="App">
      <Routes>

        <Route element={<LoggedInRoute/>}>
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        </Route>

        <Route element={<PrivateRoutes/>}>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/contact' element={<AddContact/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        </Route>

      </Routes>
    
    </div>
  );
}

export default App;
