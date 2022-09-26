
import React , { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
   msg:message,
   type:type})
   setTimeout(() => {
    setAlert(null);
    },1500);
  }
  const [mode, setMode] = useState('light');
  const toggleMode= ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#330080'
      showAlert("Dark mode Enabled","success");
      document.title="Textutils-Dark Mode";
      // setInterval(() => {
      //   document.title="Textutils Dark is Enabled"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Textutils initials"
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor=' #e0ccff'
      showAlert("Light mode Enabled","success");
      document.title="Textutils-Light Mode";
    }
    }
 return(
    <>
   {/* <Router>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Route>
          <Route path="/" element={<TextForm heading = "Enter your text to analyse" mode ={mode} showAlert = {showAlert}/>} />
          <Route path="about" element={<About />} />
        </Route>
      </div>
      </Router> */}
      <BrowserRouter>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About />} />
          
          < Route path="/"
            element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>
          </div>
          </BrowserRouter>
          
  </>
 )
}

export default App;
