import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'

 import Login from './components/Login'

 import Registration from './components/Registration'
 import New from './components/New'
import RegistrationForm from './components/RegistrationForm';
import Form from './components/Form'
import FormDemo from './components/FormDemo';
import Home from './components/Home'
import Log from './components/Log'
import Reg from './components/Reg'
import Userportal from './components/Userportal'
import Adminlogin from './components/Adminlogin'
import Adminportal from './components/Adminportal'
import Catportal from './components/Catportal'

export default function App(){

   return (    
   <div>
<h1 style={{color:'navyblue',height:'50px',textAlign:'center'}}> Welcome </h1>
<BrowserRouter>
<div className="col-sm" >
<ul className="nav bg-dark justify-content">
<nav className="nav-item " >
   <Link className="nav-link" to="/Home" ><h2 style={{color:'white'}}>Home</h2></Link>
 </nav>
<nav className="nav-item " >
   <Link className="nav-link" to="/Adminlogin" ><h2 style={{color:'white'}}>Login</h2></Link>
 </nav>

 </ul>
 <p style={{color:'red'}}><marquee></marquee></p>

       <Switch>
           <Route path="/Adminlogin">
           <Adminlogin/>
           </Route>
           <Route path="/Home">
           <Home/>
           </Route>
           <Route path="/Adminportal">
           <Adminportal/>
           </Route>
           
       </Switch>
     </div>
     </BrowserRouter>
    </div>
     
    /* <div>
<h1 style={{color:'navyblue',height:'50px',textAlign:'center'}}> Welcome </h1>
<BrowserRouter>
<div className="col-sm" >
<ul className="nav bg-dark justify-content">
<nav className="nav-item " >
   <Link className="nav-link" to="/Home" ><h2 style={{color:'white'}}>Home</h2></Link>
 </nav>
<nav className="nav-item" >
<Link className="nav-link" to="/Reg"><h2 style={{color:'white'}}>Registration</h2></Link></nav>
<nav className="nav-item " >
   <Link className="nav-link" to="/Log" ><h2 style={{color:'white'}}>Login</h2></Link>
 </nav>

 </ul>
 <p style={{color:'red'}}><marquee>/* please register to resolve an issue </marquee></p>

       <Switch>
         <Route path="/Reg">
           <Reg/>
           </Route>
           <Route path="/Log">
           <Log/>
           </Route>
           <Route path="/Home">
           <Home/>
           </Route>
           <Route path="/Userportal">
           <Userportal/>
           </Route>
           <Route path="/Catportal">
           <Catportal/>
           </Route>
           
       </Switch>
     </div>
     </BrowserRouter>
      </div>*/
      
    )

}
 
