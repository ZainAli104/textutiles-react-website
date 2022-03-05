import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //For Dark Mode
  const toogleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#002142';
      showAlert('Dark Mode has been enabled', 'success');
      // document.title= 'TextUtiles -Dark'; // This line is for change the title of Home page to dark
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      // document.title= 'TextUtiles -Light';
    }
  }
  //For Purple Mode
  const toogleModeP = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#5c3e8a';
      showAlert('Purple Mode has been enabled', 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success')
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="Alpha" aboutText="About us" mode={mode} toogleMode={toogleMode} toogleModeP={toogleModeP}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route exact path="/about">  */}
          {/* we use exact keyWord Before the path bcz we don't want to partial matching or error */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter Text Here Below" mode={mode}/>
          {/* </Route> */}
      {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;