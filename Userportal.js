
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import {useParams} from 'react-router-dom'

//import Log from './components/Log'
//import Reg from './components/Reg'
//import Viewissue from './Viewissue'
import Viewissue from'./Viewissue'
import Help from './Help'
import RaiseIssue from './RaiseIssue'
function Profile(){
  let url=useParams();
    console.log(url);
return(
<div>
<h1 className="text-center text-info">WELCOME , {url.firstname}</h1>
<BrowserRouter>
<div className="col-sm" >
<ul className="nav bg-light justify-content">
<nav className="nav-item " >
   <Link className="nav-link" to="/RaiseIssue" ><h3 style={{color:'black'}}>Raise Issue</h3></Link>
 </nav>
<nav className="nav-item" >
<Link className="nav-link" to="/Viewissue"><h3 style={{color:'black'}}>View History</h3></Link></nav>
<nav className="nav-item " >
   <Link className="nav-link" to="/Help" ><h3 style={{color:'black'}}>Help</h3></Link>
 </nav>
 

 </ul>
 <p style={{color:'red'}}><marquee>/* welcome */</marquee></p>

       <Switch>
         <Route path="/RaiseIssue">
           <RaiseIssue/>
           </Route>
           <Route path="/Viewissue">
           <Viewissue/>
           </Route>
           <Route path="/Help">
           <Help/>
           </Route>
          
          
           
       </Switch>
     </div>
     </BrowserRouter>
     
</div>
)
}
export default Profile;