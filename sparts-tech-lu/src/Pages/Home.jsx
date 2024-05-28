import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Cards2 from './Cards2';

export default function Home() {
    const [product, setProduct] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [startIndex1, setStartIndex1] = useState(0);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((data) => {
                console.log(data.data.products);
                setProduct(data.data.products);
            });
    }, []);

    const handleSwipeRight = () => {
        if (startIndex < product.length - 4) {
            setStartIndex(startIndex + 1);
        }
    };

    const handleSwipeLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleSwipeRight1 = () => {
        if (startIndex1 < product.length - 4) {
            setStartIndex1(startIndex1 + 1);
        }
    };

    const handleSwipeLeft1 = () => {
        if (startIndex1 > 0) {
            setStartIndex1(startIndex1 - 1);
        }
    };

    return (
        <div>
            <div className='main-bg-img overflow-hidden flex items-center justify-start'>
                {/* Your existing code */}
                <h1 className='text-3xl p-10 w-60 font-bold'>
                    Find the Best Activity for your Child!
                </h1>
            </div>



            <div>
                <div className="text-center">
                    <h2 className="text-3xl font-bold p-10 text-gray-900">Explore Our Topo Academies</h2>
                </div>

                <div className='flex flex-row relative overflow-x-auto whitespace-no-wrap transition-transform duration-1000'>
                    {/* Displaying only 4 cards at a time */}
                    {product.slice(startIndex, startIndex + 4).map((item) => (
                        <Cards {...item} key={item.id} />
                    ))}
                    {/* Swipe buttons */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                        <button className="bg-gray-100 px-3 py-2 rounded-l-md h-full transition duration-300 ease-in-out hover:bg-gray-400" onClick={handleSwipeLeft}>Swipe</button>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                        <button className="bg-gray-100 px-3 py-2 rounded-r-md h-full transition duration-300 ease-in-out hover:bg-gray-400" onClick={handleSwipeRight}>Swipe</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 p-10">Explore Another Section</h2>
                </div>

                <div className='flex flex-row relative overflow-x-auto whitespace-no-wrap transition-transform duration-1000'>
                    {/* Displaying only 4 cards at a time */}
                    {product.slice(startIndex1, startIndex1 + 4).map((item) => (
                        <Cards2 {...item} key={item.id} />
                    ))}
                    {/* Swipe buttons */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                        <button className="bg-gray-100 px-3 py-2 rounded-l-md h-full transition duration-300 ease-in-out hover:bg-gray-400" onClick={handleSwipeLeft1}>Swipe</button>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                        <button className="bg-gray-100 px-3 py-2 rounded-r-md h-full transition duration-300 ease-in-out hover:bg-gray-400" onClick={handleSwipeRight1}>Swipe</button>
                    </div>
                </div>
            </div>

           
        </div>
    );
}
