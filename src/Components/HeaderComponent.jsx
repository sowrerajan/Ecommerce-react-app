import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderComponents.scss'
import {ReactComponent as Logo} from './crown.svg'
import { auth } from '../Firebase/firebase.utils'

function HeaderComponent({currentUser}) {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop' >SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                currentUser ? <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>: <Link className='option' to='signin'>SIGN IN</Link>
            }
            </div>
        </div>
    )
}

export default HeaderComponent
