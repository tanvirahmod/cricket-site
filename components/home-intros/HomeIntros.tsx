"use client"
import Link from 'next/link';
import React from 'react'

export default function HomeIntros() {
    // 1st letter word search dictionary
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const listItems = letters.map((letter) => (
        <div className='h-10 w-10 shadow-xl ring-1 ring-slate-200 flex justify-center items-center text-violet-700 font-bold' key={letter}>
            <Link href={`/players/by-first-letter/${letter}`}>{letter}</Link>
        </div>
    ));
    return (
        <div className="w-full md:w-2/4 mx-auto h-auto p-8 px-10 flex justify-center flex-col items-center gap-4">

            <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800">livecricket.watch</h2>

            <h3 className="md:text-2xl font-semibold text-slate-800 text-center">This website is All About Cricket and cricket players.</h3>

            <p className="text-slate-600 text-center">We talk about only cricket and cricketers. live matches, predictions, ICC ranking, schedules, etc.</p>
            <p className="text-slate-600 text-center">Whether you&apos;re someone who loves playing cricket or watch cricket match or want cricket news, our website is here to provide.</p>
 
    


            <h3 className="md:text-2xl font-semibold text-slate-800 text-center mt-9">Explore Cricket Players by First Letter.</h3>
            <div className='flex justify-center p-4 gap-4 flex-wrap'>
                {listItems}
            </div>
        </div>
    )
}
