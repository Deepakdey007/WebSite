import './App.css';
import Header from './component/Header';
// import Sidebar from './component/Sidebar';
import Main from './component/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Modal from './component/Modal';

import SignUp from './component/SignUp';
import './Contact.css'; 
// import './component/Sidebar.css';
import Footer from './component/Footer';
import Login from './component/Login';
import Contact from './component/Contact';
import Home from './component/Home';
import './component/firebaseConfig';

function App() {
  return (
    <>
    <Header />
    <div className='row'>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Main" element={<Main />}/>
      </Routes>
    </BrowserRouter>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
