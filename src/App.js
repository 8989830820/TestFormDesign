import './Components/Signup';
import './Components/Loginup';
import './App.css';
import Signup from './Components/Signup';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import  "../node_modules/bootstrap/dist/js/bootstrap.bundle" 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Loginup from './Components/Loginup';
import FormDesigner from './Components/FormDesigner';
import { Routes,BrowserRouter,Route } from 'react-router-dom';

// import FormDEs from './Components/FormDEs';
// import FormDesigner from './Components/FormDesigner';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
     <Route exact path='/Signup'  element = {<Signup/>}/>

     <Route exact path='/login'  element = {<Loginup/>}/>

     <Route exact path='/'  element = {<FormDesigner/>}/>
     </Routes>
     
     </BrowserRouter>
   
   
    </div>
  );
}

export default App;
