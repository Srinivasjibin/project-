import { useHistory } from "react-router-dom";
import React,{useState,useEffect} from "react"
///import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
//import Listissuecat from './Listissuescat'
//import Logout from './Logout'
export default function UserList(){
    const[list,setList]=useState([])
    let history=useHistory();
    //const [user,setUser]=useState('')
    const handlesubmit=()=>{
    history.push("/Listissuescat")
      

    }

 useEffect(()=>{
        fetch("http://localhost:8080/getIssues")
        .then((response)=>response.json())
        .then((res)=>{
          console.log(res);
          setList(res);
        });
    },[])
    ;

    return(
        <div>
          <br></br>
    
        <br></br>

        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>    
                </tr>
            </thead>
            <tbody>
                {
                    list.map((val,ind)=>{
                        return(
                            <tr key={ind}>
                                <td><button type="submit" onClick={handlesubmit} >{val.requestId}</button></td>
                            </tr>


                        )
                    })
                }
            </tbody>
            
        </table>

      
        </div>
        

    )
}
