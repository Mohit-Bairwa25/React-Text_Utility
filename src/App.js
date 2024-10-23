import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React,{ useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert(" Dark Mode is Enabled", "Success ");
      document.title = 'Text Util - Dark';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert(" Light Mode is Enabled", "Success ");
      document.title = 'Text Util - Light';

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TEXT UTILS 2.0" aboutCompany="Text Form" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-5">
        <Alert alert={alert} mode={mode} toggleMode={toggleMode}/>
            <Routes>
              <Route path="/Homepage" element={<Homepage />} />
              <Route path="/TextForm" 
              element={<TextForm showAlert={showAlert} heading="Write Your Analyzing Text" mode={mode} toggleMode={toggleMode}/>} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
