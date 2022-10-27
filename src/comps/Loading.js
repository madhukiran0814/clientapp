import React,{useState,useEffect} from 'react'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";

import Lodi from './123266-pumpkin-loader.json'
 
 
function Loading() {

    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('Login');
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    
               


               <div className='row' style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>


                        <Player
                             autoplay
                             loop
                             src={Lodi}
                             style={{ height: '380px', width: '380px' }}
                         >

                         </Player>

                         <h3  className='text-center'>Food Wastage Management System</h3>

                        </div>


    </>
  )
}

export default Loading;