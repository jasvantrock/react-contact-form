import React from "react"

function Header() {
    return (
        <>
                <nav className="py-2 md:py-4">
                    <div className="container px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-between items-center">
                            <a href="/" className="font-bold text-xl text-indigo-600" aria-label="FWR">FWR</a>                            
                        </div>

                        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                            <a href="/" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
                            <a href="/" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</a>
                            <a href="/" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Features</a>
                            <a href="/" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Pricing</a>
                            <a href="/" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</a>
                            
                        </div>
                    </div>
                </nav>
            
        </>
    )
};

export default Header