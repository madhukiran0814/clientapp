/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect} from "react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import foodimg from './WhatsApp Image 2022-10-16 at 6.24.47 PM.jpeg'
import { Ip } from './../constants/Ip';
import './Card.css'
const { Header, Content, Footer, Sider } = Layout;
 

export default function Show(){

  var navigate=useNavigate();

  const token =   localStorage.getItem('USER')



  const [pin,setpin]=useState("");
  const [Data,setData]=useState([])

useEffect(()=>{

get();

},[pin])



 
const get=()=>{


const res=fetch(Ip+"/getposts",{
method:"POST",
headers: {
 'Content-Type': 'application/json'
},
body:JSON.stringify({
"Pin":pin
})


}).then(res=>res.json())
.then(async (data)=>{

setData(data)
console.log(data);


})

}


const  logout =()=>{
  localStorage.removeItem("USER") 
   navigate('/',{replace:true})

  // return (<Login/>);
 
}


if(token){
return(
    

  <Content
  style={{
    margin: '24px 16px 0',
    height:"100vh",
    overflow:"scroll"
  }}

>
  <div
    className="site-layout-background"
    style={{
      padding: 24,
      minHeight: 585,
    }}
  >

<div className='logout'>
    <button onClick={logout}>Logout</button></div>
  
  All Postings Till Now
  <p></p>
  
  
<div class="input-group-overlay d-none d-lg-flex mx-4">
<input class="form-control appended-form-control" type="text" placeholder="Search through Pin code" value={pin} onChange={(e)=>setpin(e.target.value)}></input>
<div class="input-group-append-overlay"><span class="input-group-text"><i class="fa fa-search"></i></span></div>
</div>

    <>
    
    {Data.map((data)=>(
      <div class="wrapper">
      <div class="product-img">
        <img src={foodimg} height="350" width="350"></img>
      </div>
      <div class="product-info">
        <div class="product-text">
          <br></br>
          <h2><b>Name:</b>          {data.Name}</h2>
          <h2><b>PhoneNumber :</b>   {data.PhoneNumber}</h2>
          <h2><b>Food Name :</b>     {data.Fname}</h2>
          <h2><b>Quantity : </b>     {data.Quantity}</h2>
          <h2><b>Address : </b>      {data.City}</h2>
          <h2><b>Pincode : </b>      {data.Pin}</h2>
          <h2><b>Date Posted :</b>   {data.date.slice(0,10)}</h2>
          <h2><b>Status  :</b>   {data.stat}</h2>
        </div>
      </div>
  
      
    </div>
    
             
    ))

    }

    
    </>




</div>
  


  
</Content>

)
  }
  else{

          alert('Please Login first..');
          //navigate('/',{replace:true});
        return (<Login/>);
         }

}