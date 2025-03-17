import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/shopping-cart.svg'

const CartLogo = () => {
    const { user } = useAuth();
    return (
        <>
            {user && <Link to="/cart"><img className="h-5" src={logo} /></Link>}
        </>
    )
}

export default CartLogo
