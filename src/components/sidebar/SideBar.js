import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from 'libs/firebase'
import { HiLogout } from 'react-icons/hi'
import ProductOptions from './ProductOptions'

import { SideBarStyles } from './styles'
import { LogOutButton } from 'ui/buttons'

function SideBar(props) {

    function onLogoutRequest(e) {
        signOut(auth)
    }

    return (
        <SideBarStyles>
            {/* <h2>Dashboard</h2> */}
            <div className="content">
               <ProductOptions/>
               <LogOutButton onClick={onLogoutRequest}><HiLogout class="menu-icon" size="1.5rem" color="#F8FAFC" />Log out</LogOutButton>
            </div>
        </SideBarStyles >
    )
}

export default SideBar 