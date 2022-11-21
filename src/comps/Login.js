/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState ,useEffect} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Ip } from './../constants/Ip';
import { Helmet } from 'react-helmet';
import e from 'cors';



export default function Login() {

 

    let navigate = useNavigate();

  const detectLogin= async ()=>{
    const token =   localStorage.getItem('USER')
    
        if(token){
          navigate('/Dashboard');
        }
        else{
          setScreen(0);
        }
        
        
  }
  useEffect(()=>{
  
    detectLogin();
},[])



const [email,setEmail] = useState('');
const [password,setPassword]=useState('')
const [Name,setname] =useState('');
const [PhoneNumber,setphno] =useState('');
const [addr,setaddr] =useState('');
const [pin,setpin] =useState('');

const login = async (props)=>{
fetch(Ip+"/UserSignin",{
  method:"POST",
  headers: {
   'Content-Type': 'application/json'
 },
 body:JSON.stringify({
   "email":email,
   "password":password
 })
})
.then(res=>res.json())
.then(async (data)=>{


       try {
        if(data.token=="Not Found"){
          alert("please register first");
          setScreen(1);
        }else{
          localStorage.setItem('USER',data.token)
          console.log(data.token)
          console.log(data.user);
          localStorage.setItem('name',data.user.Name);
          localStorage.setItem('email',data.user.email);
          localStorage.setItem('phno',data.user.PhoneNumber);
          localStorage.setItem('addr',data.user.Address);
          localStorage.setItem('pin',data.user.Pin);

          console.log("loged")
          if(data.token!=="Not Found"){
            navigate('/Dashboard');
          }
          else{
            alert("You Don't have an account")
          }}
       } catch (e) {
         console.log("error hai",e)
          
       }
})
}


const signup = async (props)=>{
  fetch(Ip+"/UserSignup",{
    method:"POST",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
     "email":email,
     "Password":password,
     "Name":Name,
     "PhoneNumber":PhoneNumber,
     "Address":addr,
     "Pin":pin
   })
  })
  .then(res=>res.json())
  .then(async (data)=>{
    try {

if(data.token=="already exist"){
  alert("User already Exist");
  setScreen(0);
}else{

      localStorage.setItem('USER',data.token)
      console.log(data.token)
      console.log(data.user);
      localStorage.setItem('name',Name);
      localStorage.setItem('email',email);
      localStorage.setItem('phno',PhoneNumber);
      localStorage.setItem('addr',addr);
      localStorage.setItem('pin',pin);

      console.log("loged")
      if(data.token!=="Not Found"){
        navigate('/Dashboard');
      }
      else{
        alert("You Don't have an account")
      }}
   } catch (e) {
     console.log("error hai",e)
      
   }
  })
  }
 
const [Screen,setScreen] = useState(0);
 
  



  return(

    <div className="logindiv2">
       {Screen===0?
        




<section class="vh-100">

<div class="container-fluid h-custom">
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-md-9 col-lg-6 col-xl-5">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        class="img-fluid" alt="Sample image"></img>
    </div>
    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <form>
        <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
          <p class="lead fw-normal mb-0 me-3">Sign in with</p>
          <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fa fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-linkedin-in"></i>
          </button>
        </div>

        <div class="divider d-flex align-items-center my-4">
          <p class="text-center fw-bold mx-3 mb-0">Or</p>
        </div>

        <div class="form-outline mb-4">
          <input type="email" id="form3Example3" class="form-control form-control-lg" value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="Enter a valid email address" />
       
          <label class="form-label" for="form3Example3">Email address</label>
        </div>

        <div class="form-outline mb-3">
          <input type="password" id="form3Example4" class="form-control form-control-lg" value={password} onChange={e=>setPassword(e.target.value)}
            placeholder="Enter password" />
          <label class="form-label" for="form3Example4">Password</label>
        </div>

        <div class="d-flex justify-content-between align-items-center">

          <a href="#!" class="text-body">Forgot password?</a>
        </div>

        <div class="text-center text-lg-start mt-4 pt-2">
          <button type="button" class="btn btn-primary btn-lg"
            style={{paddingLeft: '2.5rem',paddingRight: '2.5rem'}} onClick={login}>Login</button>
          <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? </p>
          <button class="btn btn-primary" type="submit" onClick={()=>setScreen(1)}>Register</button>
        </div>

      </form>
    </div>
  </div>
</div>
<div
  class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

  <div class="text-white mb-3 mb-md-0">
    Copyright © 2020. All rights reserved.
  </div>

  <div>
    <a href="#!" class="text-white me-4">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="#!" class="text-white me-4">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#!" class="text-white me-4">
      <i class="fab fa-google"></i>
    </a>
    <a href="#!" class="text-white">
      <i class="fab fa-linkedin-in"></i>
    </a>
  </div>

</div>
</section>
                  :


<>
<Helmet>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
</Helmet>
               
<div class="container-fluid register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>Thank You for showing Humanity  ! You are a Worthable Person  To live on Earth</p>
                        <p></p>
                        <input type="submit" name="" value="Login" onClick={()=>setScreen(0)}/><br/>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Registration Form</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="User Name *" value={Name} onChange={e=>setname(e.target.value)} />
                                        </div>

                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value={password} onChange={e=>setPassword(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Confirm Password *" value={password} onChange={e=>setPassword(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <input type="number" class="form-control"  placeholder="Pincode **"  value={pin} onChange={e=>setpin(e.target.value)} />
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Your Email *" value={email} onChange={e=>setEmail(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <input type="number" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value={PhoneNumber} onChange={e=>setphno(e.target.value)} />
                                        </div>
                                        
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Enter Your Address *" value={addr} onChange={e=>setaddr(e.target.value)} />
                                        </div>
                                        <input type="submit" class="btnRegister" onClick={signup} value="Register"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

	</>


       }
        
  
</div>
  )
} 
