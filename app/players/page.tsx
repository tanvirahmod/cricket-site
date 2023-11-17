// import { getWords } from '@/lib/words'
import Link from 'next/link'
import React from 'react'

// generate dynamic metadata-----------------
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `Cricket player's catagory page`,
    description: `find all information about the cricket player you are looking for.`,
    alternates: {
      canonical: `https://livecricket.watch/players`
    },
    openGraph: {
      title: `Cricket player's catagory page`,
      description: `find all information about the cricket player you are looking for.`,
      images: 'https://livecricket.watch/opengraph-image.png'
    },
  }
}
// dynamic metadata ends here-------------------

export default async function GermanMeaning() {

  // 1st letter word search dictionary
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const listItems = letters.map((letter) => (
    <div className='h-10 w-10 shadow-xl ring-1 ring-slate-200 flex justify-center items-center text-violet-700 font-bold' key={letter}>
      <Link href={`/players/by-first-letter/${letter}`}>{letter}</Link>
    </div>
  ));
  return (
    <main className='w-full md:w-3/4 mx-auto h-auto rounded-lg'>
      <div className="w-full lg:w-2/3 mx-auto h-auto p-8 px-10 flex justify-center flex-col items-center gap-4">

        <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800 text-center">Cricket player&apos;s catagory page</h2>


        <p className="text-slate-600 text-center">find all information about the cricket player you are looking for.</p>
        
        <h3 className="md:text-2xl font-semibold text-slate-800 text-center mt-9">Explore cricket player profile by First Letter.</h3>

        <div className='flex justify-center p-4 gap-4 flex-wrap'>
          {listItems}
        </div>

      </div>
    </main>
  )
}
