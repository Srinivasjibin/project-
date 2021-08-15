
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Viewissuecat from './Viewissuecat'
import Logout from './Logout'
import Listissuecat from './Listissuescat'
function Category()
{
return(<div>
    <h1 className="text-center text-info">WELCOME </h1>
    <BrowserRouter>
    <div className="col-sm" >
    <ul className="nav bg-light justify-content">
    <nav className="nav-item " >
       <Link className="nav-link" to="/Viewissuecat" ><h3 style={{color:'black'}}>View issues</h3></Link>
     </nav>
     <nav className="nav-item " >
       <Link className="nav-link" to="/Logout" ><h3 style={{color:'black'}}>Logout</h3></Link>
     </nav>
     </ul>
     <Switch>
         <Route path="/Viewissuecat">
           <Viewissuecat/>
           </Route>
           <Route path="/Logout">
           <Logout/>
           </Route>
           <Route path="/Listissuecat">
           <Listissuecat/>
           </Route>
           </Switch>
           </div>
           </BrowserRouter>
           </div>
)
}
export default Category;
