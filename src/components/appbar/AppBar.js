import React from 'react'

import { HiBell, HiMail, HiCog, HiUserCircle } from 'react-icons/hi'

import { AppBarStyles, AppBarItems, AppBarItem, AppBarItemGroup } from './styles'
import { IconButton } from './../../ui/buttons'
import { Brand } from '../branding/'

function AppBar(props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>
                    <Brand />
                </AppBarItem>
                <AppBarItemGroup>
                    <IconButton>
                        <HiMail />
                    </IconButton>

                    <IconButton>
                        <HiBell />
                    </IconButton>

                    <IconButton>
                        <HiCog />
                    </IconButton>

                    <IconButton>
                        <HiUserCircle />
                        {/* <img src={require('./../../static/images/default-ava.png')} alt="default user avatar" /> */}
                    </IconButton>
                </AppBarItemGroup>
            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar 