import "./website/css/repontsite.css"
import { Routes,Route ,BrowserRouter  } from 'react-router-dom';
import './App.css';
import ChangingText from './website/Text';
import Logo from './website/logo';
import Navbar from './website/navbar';
import Home from "./website/home";
import Footder from "./website/footder";
import Donghonam from "./website/donghonam";
import Admin from "./website/admin";
function App() {
  return (
    <div className="App">
      <ChangingText/>
      <Logo/>
      <Navbar/> 
      <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route index element={<Home />} />
          <Route path="/donghonambanchay/:id" element={<Donghonam/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
       
      </Routes>
      </div>
     
  );
}

export default App;
