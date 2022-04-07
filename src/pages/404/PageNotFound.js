import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'libs/firebase'

import { NotFoundPageStyles } from "./styles";
import NotFoundImg from 'static/images/sneakers-404.jpg';
import { Brand } from 'components/branding/'

function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    })

    return (
        <NotFoundPageStyles>
            <div className="flex-container">
                <div className='left-col'>
                    <img src={NotFoundImg} alt='sneakers illustration' />
                    <div className='branding'>
                        <Brand />
                        <p><span>Sneakers</span> Marketplace</p>
                    </div>
                </div>
                <div className='right-col'>
                    <header>
                        <h1>404</h1>
                        <h2>page not found</h2>
                        <p>Oops..you seem lost..</p>
                        {
                            isUser ? <Link to='/dashboard'>back to safety</Link> : <Link to='/'>back to safety</Link>
                        }
                    </header>
                </div>
            </div>
            <p className='copyright'>© 2022 Orange Label by Yen Pham. All rights reserved.</p>
        </NotFoundPageStyles >
    )
}

export default PageNotFound 