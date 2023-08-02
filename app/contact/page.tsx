'use client';
import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(name, email, message);
    }

    return (
        <div className="min-w-screen min-h-screen bg-gradient-to-b from-black to-darkPlum">
            <div className="flex flex-col mx-24 items-center">
                <h1 className="text-3xl my-8 place-self-start">Thanks for your interest! I&apos;m looking forward to hearing from you.</h1>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex w-full">
                        <div className="flex flex-col w-1/2 mr-2">
                            <label htmlFor="name">Name</label>
                            <input className="bg-neutral-100 px-1.5 py-1 text-black" value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" />
                        </div>

                        <div className="flex flex-col w-1/2 ml-2">
                            <label htmlFor="email">Email</label>
                            <input className="bg-neutral-100 px-1.5 py-1 text-black" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-4">
                        <label htmlFor="message">Message</label>
                        <textarea className="bg-neutral-100 px-1.5 py-1 text-black" value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" cols={30} rows={5}></textarea>
                    </div>

                    <button className="p-2 px-8 mt-8 rounded-lg bg-rose-300 hover:bg-rose-400 text-black" type="submit">Send!</button>
                </form>
            </div>
        </div>
    )
}
