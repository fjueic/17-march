import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import RelatedProducts from "./RelatedProduct";

const Product = () => {
    const { id } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);
    const { addToCart, cart } = useCart();
    const [inCart, setInCart] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (cart) {
            for (let item of cart) {
                if (item.id == id) {
                    setInCart(true);
                    break;
                }
            }
        } else {
            setInCart(false);
        }
    }, [cart, id]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} className="h-64 object-cover rounded-lg" />
            <p className="text-gray-700 mt-4">{product.description}</p>
            <p className="text-xl font-semibold mt-2 text-blue-600">${product.price}</p>

            {inCart ? (
                <p className="text-green-500 mt-4">Product already in cart</p>
            ) : (
                <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
                >
                    Add to Cart
                </button>
            )}

            <RelatedProducts category={product.category} />
        </div>
    );
};

export default Product;

