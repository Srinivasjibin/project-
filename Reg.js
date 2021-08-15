import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
import {React} from 'react';
function Register() {
let {register,formState:{errors}}=useForm();
const [user,setUser]=useState({
    "firstname":"",
    "lastname":"",
    "dob":"",
    "gender":"",
   "contactnumber":"",
    "email":"",
    "category":"",
    "userid":"",
   "password":"",
});
let history=useHistory();
const handleSubmit=e=>{
    e.preventDefault();
    console.log(user);
    if(user.category=="User"){
    fetch('http://localhost:8080/insert',{
        method:'POST',
        body:JSON.stringify(user),
        headers:{'content-Type':'application/json'},
    })
    .then(res=>res.json())
    .then(json=>setUser(json.user))
    .then(res=>
        alert("new user is added")
        );
        history.push("Log")
    }
    else{
        fetch('http://localhost:8080/insertcat',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{'content-Type':'application/json'},
        })
        .then(res=>res.json())
        .then(json=>setUser(json.user))
        .then(res=>
            alert("new user is added")
            );
            history.push("Log")
    }
}
return(

 
<div>
<h1 align="center"style={{color:'red'}} >REGISTER<br/></h1>
<div align="center">
<img src="register.png"  alt="" height="100px" width="100px"/>
</div>
<div align="center">
<form className="form" onSubmit={handleSubmit} style={{border:'5px solid silver',"padding":3,"width":700,"padding":30,fontFamily:'sans-serif',color:'black'}} >

<label htmlFor="fname">First Name</label>  <input type="text" id="firstname" className="form-control"
onChange={(e)=>setUser({...user,firstname:e.target.value}) }  required/><br/>
{errors.firstname?.type==='required' && <p className="text-danger" style={{color:'red'}}>*FirstName is required</p>}

 
<label htmlFor="lname">Last Name</label>  <input type="text" id="lastname" className="form-control"
onChange={(e)=>setUser({...user,lastname:e.target.value}) }  required/><br/>
{errors.lastname?.type==='required' && <p className="text-danger" style={{color:'red'}}>*LastName is required</p>}

 
<label htmlFor="dob">DOB</label>  <input type="date" id="dob" className="form-control"
onChange={(e)=>setUser({...user,dob:e.target.value}) } required/><br/>
{errors.dob?.type==='required' && <p className="text-danger" style={{color:'red'}}>*DOB is required</p>}


<label htmlFor="gender">Gender</label><br/> 
<label><input type="radio" value="Male"onChange={(e)=>setUser({...user,gender:e.target.value}) }/>Male</label>
<label><input type="radio" value="Female" onChange={(e)=>setUser({...user,gender:e.target.value}) }/>Female</label><br/><br/>
{errors.firstname?.type==='required' && <p className="text-danger" style={{color:'red'}}>*FirstName is required</p>}


<label htmlFor="contact">Contact Number</label><input type="number" id="contactnumber" className="form-control"
onChange={(e)=>setUser({...user,contactnumber:e.target.value}) } required/><br/>
{errors.contact?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Contact_Number is required</p>}

 
<label htmlFor="email">Email</label><input type="email" id="email" className="form-control"
onChange={(e)=>setUser({...user,email:e.target.value}) } required/><br/>
{errors.email?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Email is required</p>}

<label htmlFor="category">Category</label> 
<select  onChange={(e)=>setUser({...user,category:e.target.value})} required>
<option value="User">User</option>
<option value="Category Rep">Category Rep</option>
</select><br/><br/>
{errors.usercategory?.type==='required' && <p className="text-danger" style={{color:'red'}}>*usercategory is required</p>}

<div className="log">
<label>Userid</label><input type="number" id="userid" className="form-control" onChange={(e)=>setUser({...user,userid:e.target.value}) }
 required /><br/>
{errors.ad?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Userid is required</p>}
 
<label htmlFor="pw">Password</label><input type="password" id="password" className="form-control"
onChange={(e)=>setUser({...user,password:e.target.value}) }  required/><br/>
{errors.pw?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Password_ is required</p>}
</div>
<button type="submit" className="btn btn-success" style={{backgroundColor:'green',borderRadius:'30px',paddingLeft:'30px'}} >Sign Up</button><br/>
</form><br/>
</div>
</div>
)
}
export default Register;