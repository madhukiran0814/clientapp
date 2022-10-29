import React, {useEffect } from "react";
import { useState } from "react";
import { Ip } from "../constants/Ip";
import { Helmet } from "react-helmet";
import ColumnChart from '../graphs/Column Chart';
import BarChart from "../graphs/BarChart";

const Dash=()=>{


  useEffect(()=>{
    get();
  }
  
  );
  
  
  
  
  
  const [idd,setidd]=useState("");
  
  const [p,setp]=useState(0);
  const [a,seta]=useState(0);
  const [e,sete]=useState(0);
  
  const upd_exp=()=>{

    fetch(Ip+"/updateexp",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
      },
      body:JSON.stringify({
  
        "ids":idd,
        "stat":"Expired"
  
  
  
      })
      
      
      })
  
  }
  
  
  
  const get=()=>{
  
  
    const res=fetch(Ip+"/getposts",{
    method:"POST",
    headers: {
     'Content-Type': 'application/json'
    },
    body:JSON.stringify({
    "Pin":""
    })
    
    
    }).then(res=>res.json())
    .then(async (data)=>{
    
    
    
      var  date=new Date();
        const previous = new Date();
         previous.setDate(date.getDate() - 1);
         var dates=Array(3);
         dates.push(previous.toISOString().split('T')[0]);
         dates.push(date.toISOString().split('T')[0]);
    
    var conf=new Array();
    var ids="";
  
  
    for (let i in data){
        if (dates.includes(data[i].date.slice(0,10)) && (data[i].stat==="Active")){
        }
        else if(data[i].stat==="Active"){
  
            ids+=data[i]._id+",";
  
        }
    }
    console.log(ids);
    setidd(ids);
    if(ids!==""){
    upd_exp();
    }
    
  
    var pp=0;
    var ee=0;
    var ss=0;
    
          for (let i in data){
            
            pp+=1;
    
            if (data[i].stat==="Expired"){
              ee+=1
            }
            else if(data[i].stat=="Picked"){
              ss+=1
            }
    
          }
    
    seta(ss);
    setp(pp);
    sete(ee);
  
  
    
    })
    
    }
  


return(
<>

<Helmet>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" />


</Helmet>
<div class="row col-md-12" >
  <div class="col-md-4">
    <div class="card first">
      <div class="card-body" >
        <h5 class="card-title">Total Number of Postings- {p}</h5>
        <p class="card-text">The total number of postings that were posted on this website till date.</p>
       </div>
    </div>
  </div>  


  <div class="col-md-4">
    <div class="card first">
      <div class="card-body" >
        <h5 class="card-title">Total Number of Success Picks- {a}</h5>
        <p class="card-text">The total number of posts that were successfully picked and distributed till date.</p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card first">
      <div class="card-body" >
        <h5 class="card-title">Total Number of Expired Posts -{e}</h5>
        <p class="card-text">The total number of posts that were expired due to not responding till date.</p>
    
      </div>
    </div>
  </div>


  </div>

<br></br>


<center>

<BarChart />

<br></br>
<br></br>
<h5>National food grid had said it had been “reported in 2017 by the National Health Survey that approximately 19 crore people in the country
   were compelled to sleep on an empty stomach every night. Moreover, the most alarming figure revealed is that approximately 4500 children 
   die every day under the age of five years in the country due to hunger and malnutrition, amounting to over three lakh deaths every year,
    owing to hunger, of children alone”.</h5>

<br></br>
<br></br>
<ColumnChart/>

</center>

<br></br>
<br></br>



	</>
)
}

export default Dash;


