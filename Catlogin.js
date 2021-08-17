import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
function UserLogin()
{
let {register,handleSubmit,formState:{errors}}=useForm();
const [id,setId]=useState('');
const [pw,setPw]=useState('');
const [category,setCategory]=useState('')
let history=useHistory();
let obj={id:id,pw:pw,category:category}
const onFormSubmit=()=>{
  console.log(obj.category)
  fetch("http://localhost:8080/catvalid/"+id+"/"+pw,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(obj)
})
.then(res=>{
console.log("response",res)
if(res.status==200){
  alert("Login successful")
  history.push("/Catportal")
  
}
else {
alert("invalid Credentials")
}
})


}
return(
<div align="center">
<img src="logo.png" alt="" height="100px" width="100px"/>
<form onSubmit={handleSubmit(onFormSubmit)} style={{border:'5px solid silver',padding:"30px",width:"500px"}}>

<label>Userid</label><input type="number" id="id" className="form-control" onChange={(e)=>setId(e.target.value)}
value={id} required /><br/>
{errors.ad?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Userid is required</p>}
<label>password</label><input type="password" id="pw" className="form-control"
onChange={(e)=>setPw(e.target.value)} value={pw} required/><br/>
{errors.ad?.type==='required' && <p className="text-danger" style={{color:'red'}}>*password is required</p>}
<button className="btn btn-primary" type="submit" >Login</button>
</form> 
</div>
)
}
export default UserLogin;