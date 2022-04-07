 import React, {useState} from 'react'
 import { Outlet, useNavigate } from 'react-router-dom'
 
 import { onAuthStateChanged } from 'firebase/auth'
 import {auth} from 'libs/firebase'


import {AppBar} from 'components/appbar'
import SideBar from 'components/sidebar/SideBar'

import {DashBoardPageStyles} from "./styles"
 function DashBoardPage  (props){
     const [isUser, setIsUser] = useState(false)
     const navigator = useNavigate();

        onAuthStateChanged(auth, (user)=>{
            if(user){
                setIsUser(true)
            }else{
               setIsUser(false)
               navigator('/')
            }
        })

     
       if(isUser){
          return (
            <>
            <AppBar/>
            <DashBoardPageStyles>
            <SideBar/>
            <Outlet/>
            </DashBoardPageStyles>
           </>
          )
       }else{
           return null
       }
 }
 
 export default DashBoardPage 