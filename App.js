import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Log from './components/Log'
import Reg from './components/Reg'
import Userportal from './components/Userportal'
import Adminlogin from './components/Adminlogin'
import Adminportal from './components/Adminportal'
import Catportal from './components/Catportal'
import Catreg from './components/Catreg'
import Catlogin from './components/Catlogin'
import Viewissuecat from './components/Viewissuecat'
import Logout from './components/Logout'
import Listissuescat from './components/Listissuescat'

export default function App(){

   return (    
  /* <div>
<BrowserRouter>
<div className="" style={{} }>
  <div className="navbar-inner bg-dark" style={{height:35}} >
  <div className="clearfix">
    <div className="nav-collapse nav collapse_">
 <ul className="nav sf-menu clearfix">
<li><a  style={{textDecoration:"none"}} href="/Home"><h3 style={{color:"white"}}>Home</h3></a></li>

<li style={{marginLeft:1000}}><a style={{textDecoration:"none"}} href="/Adminlogin"><h3 style={{color:"white"}}>Login</h3></a></li>
</ul>
</div>
</div></div>
<h1 align="center" style={{color:"red",align:"center"}}>Admin</h1>


 <p style={{color:'red'}}><marquee></marquee></p>
   <Switch>
       <Route path="/Adminlogin">
           <Adminlogin/>
           </Route>
           <Route path="/Adminportal">
           <Adminportal/>
           </Route>
         <Route path="/Reg">
           <Reg/>
           </Route>
           <Route path="/Catreg">
           <Catreg/>
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
     
      </div>  
    )

}*/
      
       
 /*    
  <div>
<BrowserRouter>
<div className="" style={{} }>
  <div className="navbar-inner bg-dark"  style={{height:35}}>
  <div className="clearfix">
    <div className="nav-collapse nav collapse_">
 <ul className="nav sf-menu clearfix">
<li><a  style={{textDecoration:"none"}} href="/Home"><h3 style={{color:"white"}}>Home</h3></a></li>

<li style={{marginLeft:30}}><a style={{textDecoration:"none"}} href="/Reg"><h3 style={{color:"white"}}>Registration</h3></a></li>
<li style={{marginLeft:900}}><a style={{textDecoration:"none"}} href="/Log"><h3 style={{color:"white"}}>Login</h3></a></li>
</ul>
</div>
</div></div>
<h1 align="center" style={{color:"red"}}>User</h1>
   <Switch>
       <Route path="/Adminlogin">
           <Adminlogin/>
           </Route>
           <Route path="/Adminportal">
           <Adminportal/>
           </Route>
         <Route path="/Reg">
           <Reg/>
           </Route>
           <Route path="/Catreg">
           <Catreg/>
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
     
      </div>  
    )

}*/

<div >
<BrowserRouter>
<div className="" >

  <div className="navbar-inner bg-dark" style={{height:35}} >
  <div className="clearfix">
    <div className="nav-collapse nav collapse_">
 <ul className="nav sf-menu clearfix">
<li><a  style={{textDecoration:"none"}} href="/Home"><h3 style={{color:"white"}}>Home</h3></a></li>

<li style={{marginLeft:30}}><a style={{textDecoration:"none"}} href="/Catreg"><h3 style={{color:"white"}}>Registration</h3></a></li>
<li style={{marginLeft:900}}><a style={{textDecoration:"none"}} href="/Catlogin"><h3 style={{color:"white"}}>Login</h3></a></li>
</ul>
</div>
</div></div>
<h1 align="center"  style={{color:"red",align:"center"}}>Category Rep</h1>


 
       <Switch>
       <Route path="/Adminlogin">
           <Adminlogin/>
           </Route>
           <Route path="/Adminportal">
           <Adminportal/>
           </Route>
         <Route path="/Reg">
           <Reg/>
           </Route>
           <Route path="/Catreg">
           <Catreg/>
           </Route>
           <Route path="/Catlogin">
           <Catlogin/>
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
           <Route path="/Viewissuecat">
           <Viewissuecat/>
           </Route>
           <Route path="/Logout">
           <Logout/>
           <Route path="/Listissuescat">
           <Listissuescat/>
           </Route>
           </Route>     
       </Switch>
       </div>
     </BrowserRouter>
     
      </div>  
    )

}
 
