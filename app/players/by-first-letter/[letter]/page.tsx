import React from 'react'
import { getBy1stLetter } from '@/lib/words'
import Link from 'next/link'

// generate dynamic metadata-----------------
import type { Metadata } from 'next'

export async function generateMetadata({ params }: any): Promise<Metadata> {

    return {
        title: `Browse the cricketer by first letter ${params.letter} | livecricket.watch`,
        description: `Browse the cricketer by first letter`,
        alternates: {
            canonical: `https://livecricket.watch/players/by-first-letter/${params.letter}`
        },
        openGraph: {
            title: `Browse the cricketer by first letter ${params.letter} | livecricket.watch`,
            description: `Browse the cricketer by first letter`,
            images: 'https://livecricket.watch/opengraph-image.png'
        },
        robots: {
            index: false,
            follow: true,
        },
    }
}
// dynamic metadata ends here-------------------

export default async function FirstLetter({ params }: any) {
    const firstLetter1: any = await getBy1stLetter(params.letter)
    return (
        <div className='w-full md:w-3/4 mx-auto h-auto rounded-lg px-10 pt-6 text-violet-700 flex flex-col text-center gap-2'>

            <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800 text-center">Browse the cricketer by first letter</h2>

            {firstLetter1?.map((letter: {
                name: any; id: React.Key | null | undefined;
            }) => (
                <Link key={letter.id} href={`/players/${letter.name}`}>{letter.name.replaceAll("-", " ")}&apos;s profile</Link>
            ))}
        </div>
    )
}
