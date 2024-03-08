import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import RegisterUser from './component/RegisterUser';
import Home from './component/home';
import Admin from './component/admin';
import Viewattendance from './component/viewattendance';
import Home2 from './component/home2';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/registerUser' element={<RegisterUser/>}></Route>
          <Route path='/home/:username' element={<Home/>}></Route>
          <Route path='/admin/:username' element={<Admin/>}></Route>
          <Route path='/viewattendance/:username' element={<Viewattendance/>}></Route>
          <Route path='/home2' element={<Home2/>}></Route>
      </Routes>

    </>
  );
}

export default App;
