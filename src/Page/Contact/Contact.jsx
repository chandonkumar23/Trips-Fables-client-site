const Contact = () => {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center px-4 rounded-2xl mb-10">
            <form className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
