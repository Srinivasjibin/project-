
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Viewissuecat from './Viewissuecat'
import Logout from './Logout'
import { useHistory } from "react-router-dom";
import Listissuescat from './Listissuescat'

function Category()
{
  let history=useHistory();
  const handlesubmit1=()=>{
    history.push("/Viewissuecat")
    }
    const handlesubmit2=()=>{
      history.push("/Logout")
        
  
      }
return(<div>
 

    <div className="col-sm" >
   
 
       <button  style={{marginLeft:30,color:"red",}} type="submit" onClick={handlesubmit1}>View issues</button>
       <button style={{marginLeft:1000}} type="submit" onClick={handlesubmit2}>Logout</button>
      </div>
       <BrowserRouter>
     <Switch>
         <Route path="/Viewissuecat">
           <Viewissuecat/>
           </Route>
           <Route path="/Logout">
           <Logout/>
           </Route>
           <Route path="/Listissuescat">
           <Listissuescat/>
           </Route>
           </Switch>
          
           </BrowserRouter>
           </div>
)
}
export default Category;
