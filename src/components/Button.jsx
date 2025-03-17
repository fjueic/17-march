import React from 'react'

const Button = ({ children, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
            {children}
        </button>

    )
}

export default Button
