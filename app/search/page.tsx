import { getTheSearchResult } from '@/lib/words';
import Link from 'next/link';
import React from 'react'

// generate dynamic metadata-----------------
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: `Search Results Page | livecricket.watch`,
        description: `Search the cricketer you are looking for | livecricket.watch`,
        alternates: {
            canonical: `https://livecricket.watch/search`
        },
        openGraph: {
            title: `Search Results Page | livecricket.watch`,
            description: `Search the cricketer you are looking for | livecricket.watch`,
            images: 'https://livecricket.watch/opengraph-image.png'
          },
          robots: {
            index: false,
            follow: false,
          },
    }
}
// dynamic metadata ends here-------------------

export default async function Search({
  // from here(curlybraises) is extra to get the search query only
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
  // to here(curlybraises) is extra to get the search query only
}) {
  // getting search query after /search?q=
  const query: any = searchParams?.q ? searchParams?.q : null
  const fetchedSearchResult: any = await getTheSearchResult(query)
  const test = ((fetchedSearchResult as any[]).length >= 1 ) ? true : false

  return (
    <div className='w-full md:w-3/4 mx-auto h-auto rounded-lg px-10 text-violet-700 flex flex-col gap-2'>

      <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800 text-center pt-6">Search the cricketer you are looking for | livecricket.watch</h2>


      {test ?
        (fetchedSearchResult?.map((letter: { name: string }, index: React.Key | null | undefined) => {
          return <Link className='text-center text-2xl gap-2' key={index} href={`/players/${letter.name}`}>{letter.name.replaceAll("-"," ")}&apos;s profile</Link>
        })) : (<p className='text-center text-2xl'>The cricket player you are looking for does not exist in our database.</p>)
      }
    </div>
  )
}
