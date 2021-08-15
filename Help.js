import React,{useState} from 'react'
import {BrowserRouter as Router,NavLink, Switch, Route,useHistory} from 'react-router-dom'
export default function Help() {
const [data,setData]= useState({
"issue": "" ,
"description": "",
"date": ""
})
const handleSubmit=e=>
{
e.preventDefault();
console.log(data); 
fetch('http://localhost:8080/insertIssues',
{
method:'POST',
body:JSON.stringify(data),
headers:{'Content-Type':'application/json'},
})
.then(res=>res.json())
.then(json=>setData(json.data))
.then(res=>
    alert("issue raised"))
}
return (
<div align="center">
<form onSubmit={handleSubmit} style={{border:'5px solid silver',padding:"30px",width:"500px"}}>
Issue<input type="text" className="form-control" name="issue"
onChange={(e)=> setData({...data,issue:e.target.value})} required/>
<br/>
Description<input type="text" className="form-control" name="description"
onChange={(e)=> setData({...data,description:e.target.value})} required />
<br/>
Date<input type="date" className="form-control" name="date"
onChange={(e)=> setData({...data,date:e.target.value})} required/>
<br/>
<button className="btn btn-primary" type="submit" >Submit Issue</button>
</form>
</div>
) 
}