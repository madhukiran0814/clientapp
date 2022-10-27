import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import logo from '../4041.png'
 
import { Ip } from './../constants/Ip';
const { Header, Content, Footer, Sider } = Layout;





export default function Post_food(){
  var navigate = useNavigate();
  const token =   localStorage.getItem('USER')


const [name,setname]=useState('');
const [food,setfood]=useState('');
const [quantity,setquant]=useState('');
const [addr,setaddr]=useState('');
const [pin,setpin]=useState('');
const [phone,setphone]=useState('');

function notify(Pin){
console.log('in the notify',Pin);


  fetch(Ip+"/getphs",{

  method:'POST',
  headers:{'Content-Type': 'application/json'},
  body:JSON.stringify({
    'Pin':Pin
  })

  }).then(res=>res.json())
  .then(result=>{

    console.log(result);
  console.log(result.x);
var t='';
  for (let i in result.x){

    t+=result.x[i]+","


  }

  console.log(t);

  SendOrderToMsg(t);

  })
 

}
 


  function post(){

   // const val = new Date().toISOString().split('T')[0]

   const val=new Date();

   fetch(Ip+"/post-food",{

    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({

      "Name":name,
      "Fname":food,
      "Quantity":quantity,
      "City":addr,
      "Pin":pin,
      "PhoneNumber":phone,
      "date":val,
      "stat":"Active"
    })


    }).then((response) => response.json())
    .then((result) => {
      

     
     if (result.status===0){
      alert("Something went wrong");
      
      //navigate('/Dashboard/post-food',{replace:true});
      
    }
    else{
      alert("success");
    
      notify(pin);

      alert('successfully notified to all ');
      navigate('/dashboard',{replace:true});

    }


  });
  setaddr('');
  setphone('');
  setpin('');
  setfood('');
  setname('');
  setquant('');


    
}

  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/',{replace:true})

    // return (<Login/>);
   
 }





 const SendOrderToMsg=(x)=>{


var msg=food+" available at your location please contact "+phone;



  fetch(Ip+'/sendOrderAsSms?msg='+msg+"&numbers="+x,{
    headers:new Headers({
      Authorization:"Bearer " 
    })
    }).then(res=>res.json())
    
    .then(data=>{ 
    
      console.log("done");
     
    }
    )

}

 if(token){
    return(
      <div>


    
        

<form className='post-food' >

<h1>Post Food</h1>
<br/>
<label>Enter Your Name</label>
<br/>
<input type="text" onChange={e=>setname(e.target.value)}></input>
<br/>
<label>Enter Food Name</label>
<br/>
<input type="text" onChange={e=>setfood(e.target.value)}></input>
<br/>
<label>Enter Quantity</label>
<br/>
<input type="number" onChange={e=>setquant(e.target.value)}></input>
<br/>
<label>Enter City</label>
<br/>
<input type="text" onChange={e=>setaddr(e.target.value)}></input>
<br/>
<label>Enter Pincode</label>
<br/>
<input type="number" onChange={e=>setpin(e.target.value)}></input>
<br/>
<label>Enter Phone Number</label>
<br/>
<input type="number" onChange={e=>setphone(e.target.value)}></input>
<br/>
<br/>


</form>

<button type='submit' id='btn' onClick={post}>Post</button>

  <div className='logout'>
    <button onClick={logout}>Logout</button></div>
   </div>




    )
 }
 else{

  alert('Please Login first..');
  navigate('/',{replace:true});
//return (<Login/>);
 }
}