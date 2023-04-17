import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkbox from './Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='' element={ <Checkbox/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
