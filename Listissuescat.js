import { useHistory } from "react-router-dom";
import React,{useState,useEffect} from "react"
export default function UserList(){
    const[list,setList]=useState([])
    

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
                    <th>Issue</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Worklog</th>   
                </tr>
            </thead>
            <tbody>
                {
                    list.map((val,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{val.requestId}</td>
                                <td>{val.issue}</td>
                                <td>{val.description}</td>
                                <td>{val.date}</td>
                                <td><button type="submit">{val.status}</button></td>
                                <td>{val.worklog}</td>
                            </tr>

                        )
                    })
                }
            </tbody>
            
        </table>

        </div>

    )
}
