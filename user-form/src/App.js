import { Routes,Route } from 'react-router-dom'
import './App.css';
import Display from './component/Display';
import Edit from './component/Edit';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='edit' element={<Edit/>}></Route>
        <Route path='details' element={<Display/>}/>
      </Routes>
    </div>
  );
}

export default App;
