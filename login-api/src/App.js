import { Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration/>}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
