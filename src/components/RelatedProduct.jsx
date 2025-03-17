import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RelatedProduct = ({ category }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (category) {
            fetch(`https://dummyjson.com/products/category/${category}`)
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data.products);
                });
        }
    }, [category]);

    return (
        <div className="p-6 max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Related Products</h2>

            {products.length === 0 ? (
                <p className="text-gray-500">No related products found.</p>
            ) : (
                <div className="space-y-4">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border p-4 rounded-lg shadow-md cursor-pointer"
                            onClick={() => {
                                navigate(`/product/${item.id}`)

                            }}
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-blue-600 font-bold">${item.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate(`/product/${item.id}`)}
                                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Go To Product
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RelatedProduct;

