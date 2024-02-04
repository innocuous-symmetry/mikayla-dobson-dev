'use client';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from "react";

export default function ContactPage() {
    const MESSAGE_LIMIT = 600;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const characterCount = useMemo(() => message.length.toString(), [message]);

    return (
        <div className="min-w-screen min-h-screen bg-gradient-to-b from-slate-300 to-purple-300 bg-opacity-40 dark:from-black dark:to-darkPlum flex flex-col items-center">
            <motion.div /* initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: 0 }} */ className="flex flex-col mx-24 items-center dark:text-white bg-zinc-800 p-12 mt-12 rounded-lg w-5/6 lg:w-3/5">
                <h1 className="text-3xl my-8 place-self-start">Thanks for your interest! I&apos;m looking forward to hearing from you.</h1>

                <motion.form /* initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: 0.5 }} */ className="w-full">
                    <div className="flex flex-col lg:flex-row w-full">
                        <div className="flex flex-col w-full lg:w-1/2 lg:mr-2">
                            <label htmlFor="name">Name</label>
                            <input required className="bg-neutral-100 rounded px-1.5 py-1 text-black" value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" />
                        </div>

                        <div className="flex flex-col w-full lg:w-1/2 lg:ml-2">
                            <label htmlFor="email">Email</label>
                            <input required className="bg-neutral-100 rounded px-1.5 py-1 text-black" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-4">
                        <label htmlFor="message">Message</label>
                        <textarea required className="bg-neutral-100 rounded px-1.5 py-1 text-black" value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" cols={30} rows={5}></textarea>
                        <p className={"text-sm " + (parseInt(characterCount) > MESSAGE_LIMIT ? "text-red-500" : "text-black dark:text-white")}>{characterCount}/{MESSAGE_LIMIT}</p>
                    </div>

                    <button disabled={parseInt(characterCount) > MESSAGE_LIMIT} className="p-2 px-8 mt-8 rounded-lg bg-rose-300 hover:bg-rose-400 text-black" type="submit">Send!</button>
                </motion.form>
            </motion.div>
        </div>
    )
}
