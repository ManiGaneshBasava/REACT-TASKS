import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useSelector } from 'react-redux';
import { AuthProvider } from './components/auth';
import { LoggedInRoute, PrivateRoutes } from './components/protectedRoute';
import NotMatch from './components/NotMatch';


function App() {
  const state = useSelector(state => state)
  return (
    <div className="App">
      {console.log(state)}
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/home' element={<Home />} />
          </Route>
          <Route element={<LoggedInRoute />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotMatch />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
