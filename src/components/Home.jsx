import React, { useEffect, useState } from "react";
import useQueryState from "../hooks/useQueryState";
import ProductCard from "./ProductCard";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useQueryState("page", 1);
    const [search, setSearch] = useQueryState("search", "");
    const [maxPrice, setMaxPrice] = useQueryState("maxPrice", 100000);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            let url = search
                ? `https://dummyjson.com/products/search?q=${search}`
                : `https://dummyjson.com/products?limit=9&skip=${(page - 1) * 9}`;

            const res = await fetch(url);
            const data = await res.json();
            setProducts(data.products);
            setLoading(false);
        };

        fetchData();
    }, [page, search]);

    return (
        <div className="p-6">
            <div className="flex justify-center space-x-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Products"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
                />
                <label className="block text-gray-700">Max Price</label>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max Price"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
                />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Product List</h2>

            {/* Loading Animation */}
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products
                            .filter((product) => product.price <= maxPrice)
                            .map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                    </div>

                    {/* Pagination Buttons */}
                    <div className="flex justify-center mt-6 space-x-4">
                        {page > 1 && (
                            <button
                                onClick={() => setPage(parseInt(page) - 1)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                            >
                                Previous
                            </button>
                        )}
                        <div className="flex items-center space-x-2">{page}</div>
                        <button
                            onClick={() => setPage(parseInt(page) + 1)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;

