import React, { useState } from "react";

const ContactContainer: React.FC = () => {

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="py-4 sm:py-12">
                    <h1 className="font-bold text-green-500">Address</h1>

                    <p>Bhumi Lakshmi Mishra Krishi Udyog</p>
                    <p>Kotulpur, Bankura - 722141, WB- India</p>

                    <h1  className="font-bold text-green-500 mt-8">Call us</h1>
                    <p>Phone no: +91-9800523964</p>
                    <h1  className="font-bold text-green-500 mt-8">Email</h1>
                    <p>Email: bhumilakshmi24@gmail.com</p>

                    <h1  className="font-bold text-green-500 mt-8">GST Number</h1>
                    <p>19ABCFB4393G1ZC</p>
                </div>
                <div>
                    <div className="bg-green-600 p-4 sm:p-12 rounded-lg">
                        <h3 className="font-bold text-white">Get In Touch</h3>
                        <p className="text-white">Have a question? Just fill in the form and our representative will answer your query within 10 hours.</p>
                        <form className="justify-center items-center flex flex-col w-full my-2" >
                            <input
                                type="text"
                                id="name"
                                required
                                value={name}
                                placeholder="Your Name"
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 rounded-lg border-black border-2 my-2 w-full sm:w-4/6" />
                            <input
                                type="email"
                                id="email"
                                required
                                value={email}
                                placeholder="Your email..."
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 rounded-lg border-black border-2 my-2 w-full sm:w-4/6" />
                            <input
                                type="text"
                                id="mobile"
                                required
                                value={mobile}
                                placeholder="Your Mobile Number"
                                onChange={(e) => setMobile(e.target.value)}
                                className="p-2 rounded-lg border-black border-2 my-2 w-full sm:w-4/6" />
                            <textarea
                                id="description"
                                value={description}
                                placeholder="Description..."
                                onChange={(e) => setDescription(e.target.value)}
                                className="p-2 rounded-lg border-black border-2 my-2 w-full sm:w-4/6" />

                            <button type="submit" className="flex flex-row items-center justify-center text-center w-full sm:w-4/6 border rounded-xl outline-none py-4 font-sans bg-white text-green-500 font-bold" >
                                Contact Us
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContainer;