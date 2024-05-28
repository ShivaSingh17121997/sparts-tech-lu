import React from 'react';

export default function Footer() {
    return (
        <div className="bg-amber-500 m-2.5	 py-8 px-4 text-white">
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">Stay Updated</h1>
                <p className="mb-4">Get the Emails and notifications on your phone</p>
                <div className="flex items-center">
                    <input
                        type="text"
                        className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email address"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
