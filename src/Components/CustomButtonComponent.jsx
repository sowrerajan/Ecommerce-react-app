import React from 'react'
import './CustomButtonComponent.scss'

function CustomButtonComponent({children,isGoogleSignIn, ...otherprops}) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherprops}>
            {children}
        </button>
    )
}

export default CustomButtonComponent
