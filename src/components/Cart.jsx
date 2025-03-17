import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Shopping Cart</h2>

            {cart.length === 0 ? (
                <p className="text-lg text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border p-4 rounded-lg shadow-md"
                            >
                                <div
                                    className="flex items-center space-x-4 cursor-pointer"
                                    onClick={() => navigate(`/product/${item.id}`)}
                                >
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
                                    onClick={() => removeFromCart(item.id)}
                                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Total Price */}
                    <div className="mt-6 text-xl font-bold">
                        Total: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                    </div>

                    {/* Checkout Button */}
                    <button
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 w-full"
                        onClick={() => alert("Proceeding to checkout...")}
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;

