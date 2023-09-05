import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React,{ useState }  from 'react'; 
import Alert from './components/Alert';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom/dist';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode= ()=>{
      if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#282c34'
        document.body.style.Color='white'
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white'
        document.body.style.Color='black'
      }
  }

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (
  <>
    
    {/* <About alert={alert} mode={mode} /> */}
    {/* <TextForm mode={mode} showAlert={showAlert} /> */}
    <Router>
    <Navbar toggleMode={toggleMode} mode={mode} />
    <Alert alert={alert} />
    <div className={`container mt-3 text-${mode ==='dark' ?'light':'dark' }`} >
      <Routes>
          <Route path='/'element={<Home/>} />
          <Route path='/home'element={<Home/>} />
          <Route exact path='/TextForm' element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route exact path='/About' element={ <About alert={alert} mode={mode} />} />
          <Route path='/*' element={ <ErrorPage /> } />
      </Routes>
      </div>
    </Router>
    
    
  </>
      
  );
}

export default App;
