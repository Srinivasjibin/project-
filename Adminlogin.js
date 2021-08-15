import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
export default function AdminLogin() {
const [user,setUser]=useState({})
let history=useHistory();
const [val,setVal]=useState({
"userid":"",
"password":""
})
const handleSubmit=(e)=>{
    
e.preventDefault();
console.log("data for validation",val);
fetch("http://localhost:8080/getadmin/"+val.userid)
.then((response) => response.json())
.then((res) => {
console.log(res);
setUser(res);
if((val.userid != res.userid) )
{
    console.log(res.userid)
    alert("User ID not present");
}
else if( (val.password !== res.password)){
    alert("Password not matching");
} 
else if((val.id == res.id) && (val.password === res.password) )
{
       alert("Login successfull")
       history.push("Adminportal")
    
}

else{
alert("Login not successfull");
}
});

}

return (
    
<div align="center">
<h1 style={{color:'navyblue',height:'50px',textAlign:'center'}}> Welcome Admin </h1>
<img src="logo.png" alt="" height="100px" width="100px"/>
<form onSubmit={handleSubmit} style={{border:'5px solid silver',padding:"30px",width:"500px"}} >
<div className="mb-3">
<label htmlFor="id" className="form-label">ID</label>
<input type="number" className="form-control" id="userid"
name="userid"onChange={(e)=>{setVal({...val,userid:e.target.value})}} required/>

</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1"aria-describedby="password1" name="password"
onChange={(e)=>{setVal({...val,password:e.target.value})}} required />
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
)
}