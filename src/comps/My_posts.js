import {React,useEffect,useState} from "react";
import foodimg from './WhatsApp Image 2022-10-16 at 6.24.47 PM.jpeg'
import { Ip } from "../constants/Ip";



const My_posts=()=>{

  const [tmp,settmp]=useState(0);



const [Data,setData]=useState([]);
const [idd,setidd]=useState("")

useEffect(()=>{

  put();
    get();
},[tmp])


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



const put=()=>{

  fetch(Ip+"/update",{
    method:"POST",
    headers: {
     'Content-Type': 'application/json'
    },
    body:JSON.stringify({

      "id":tmp,
      "stat":"Picked"



    })
    
    
    })
    return;

}

    const get=()=>{


        const res=fetch(Ip+"/getmyposts",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
        },
        body:JSON.stringify({
        "Pin":localStorage.getItem("phno")
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
            conf.push(data[i]);
            }
            else if(data[i].stat==="Active"){

                ids+=data[i]._id+",";

            }
        }
        console.log(data);
        setidd(ids);
        if(ids!==""){
        upd_exp();
        }
        setData(conf);
        
        console.log(conf,ids);
        
        })
        
        }



if (Data!=[])
{


return(

<div>


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
            <button class="btn btn-success" onClick={(e)=>{settmp(data._id)}}>Already Picked ?</button>
            </div>))}

            
</>

</div>

)
}
else{

    return (

        <h1>Sorry You didn't posted any active foods</h1>

    )
}

}

export default My_posts