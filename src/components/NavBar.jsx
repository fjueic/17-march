import React from 'react'
import { Link } from 'react-router-dom'
import CartLogo from './CartLogo'
import Acc from './Acc'

const NavBar = () => {
    return (
        <nav className="flex sticky bg-blue-600 w-full h-16 p-0 m-0 shadow-md text-white justify-between align-middle font-bold items-center text-xl">
            <Link to="/" className="flex items-center pl-4 cursor-pointer">
                E-Commerce
            </Link>
            <div className="flex items-center pr-4 gap-4">
                <Acc />
                <CartLogo />
            </div>
        </nav>
    )
}

export default NavBar
