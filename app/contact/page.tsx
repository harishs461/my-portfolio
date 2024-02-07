"use client"
import Sidebar from "@/components/Sidebar";
import { IsSideBarVisibleContext } from "@/lib/SidebarContext";
import { useContext, useState } from "react";

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const IsSideBarVisibleContextValue = useContext(IsSideBarVisibleContext);
    const isSideBarVisible = IsSideBarVisibleContextValue.isSideBarVisible;

    const subject = `Hi, I'm ${name}`;
    const body = `${message}\n\nUser's email: ${email}`;
    const mailtoLink = `mailto:harishs461@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    function handleSendMessage() {

        if (!name || !email || !message) {
            setError('Please fill all required fields!')
            console.log(name.length)
            return;
        }

        window.location.href = mailtoLink;
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="relative flex flex-col items-center">
            <div className="flex flex-col md:flex-row md:items-center">
                <div className=" p-10 md:p-20 flex flex-col gap-y-5 md:gap-y-10">
                    <span className=" font-serif text-3xl md:text-5xl">Contact us</span>
                    <input placeholder="Name" required={true} name="Name" value={name} className=" w-full md:w-96" onChange={(e) => setName(e.target.value)} ></input>
                    <input placeholder="Email" required={true} type='email' name="Email" value={email} accept="email" onChange={(e) => setEmail(e.target.value)}></input>
                    <textarea placeholder="Message" required={true} name="Message" value={message} maxLength={250} className="text-area h-full md:h-48 resize-none overflow-scroll" onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button className="bg-amber-500 px-4 py-1.5 md:px-8 md:py-3 rounded-lg text-white hover:text-gray-300 w-fit" onClick={handleSendMessage}>Send Message
                    </button>
                    {error && <p className=' text-red-500'>{error}</p>}
                </div>
                <div className=' p-10 md:p-20 md:pl-28'>
                    <img src='/5124556.jpg' alt='contact-image' className="w-full md:w-3/5"></img>
                </div>
            </div>
            <div className={`md:hidden fixed py-4 top-15 left-0 w-1/2 h-full bg-white shadow-md shadow-gray-200 z-20 ${isSideBarVisible ? 'block' : 'hidden'}`}>
                <Sidebar />
            </div>
        </div>
    );
}
