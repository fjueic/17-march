import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
    let navigate = useNavigate();
    return (
        <div
            className={`border p-4 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg
                `}
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <div className="flex justify-center items-center">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className=" h-40 object-cover rounded-lg"
                />
            </div>
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description.substring(0, 50)}...</p>
            <p className="font-bold text-blue-600 mt-2">${product.price}</p>
        </div>
    )
}

export default ProductCard
