"use client"
import { useUser } from '@clerk/nextjs';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserDetailContext } from './app/_context/UserDetailContext';


function Provider({children}) {
    const {user} =useUser();
    const [userDetail,setuserDetail] = useState([]);

    useEffect(()=>{
     user && VerifyUser();
    },[user])
    const VerifyUser = async()=>{
        const dataResult = await axios.post('/api/verify-user',{
     User:user
        });
         setuserDetail(dataResult.data.result);
         
        
    }
  return (
    <UserDetailContext.Provider value={{userDetail,setuserDetail}}>
    <div>
      {children}
    </div>
    </UserDetailContext.Provider>
  )
}

export default Provider
