import './App.css';
import Header from './component/Header';
// import Sidebar from './component/Sidebar';
import Main from './component/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import './component/Sidebar.css';
import Footer from './component/Footer';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Contact from './component/Contact';

function App() {
  return (
    <>
    <Header />
    <div className='row'>
      {/* <div className='col-2'>
      <Sidebar />
      </div> */}
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Contact" element={<Contact />}/>

      </Routes>
    </BrowserRouter>
      </div>
    </div>
    
    <Footer />
    </>
  );
}

export default App;
