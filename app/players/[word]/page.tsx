import React from 'react'
import Image from 'next/image'
import { getArray, getWord } from '@/lib/words'
import { notFound } from 'next/navigation'
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbds';


// generate dynamic metadata-----------------
import type { Metadata } from 'next'
import SimilerLinks from '@/components/similer-links/similerLinks';

type Props = {
    params: { word: string }
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {

    return {
        title: `${params.word.replaceAll("-", " ")} Profile - ICC Profile, Age, Career Info & Stats.`,
        description: `Eveything about ${params.word.replaceAll("-", " ")}'s Profile - ICC Profile, Age, Career Info & Stats.`,
        alternates: {
            canonical: `https://livecricket.watch/players/${params.word}`
        },
        openGraph: {
            title: ``,
            description: ``,
            images: 'https://livecricket.watch/opengraph-image.png'
        },
    }
}
// dynamic metadata ends here-------------------

export default async function word({ params }: any) {
    const word1: any = await getWord(params.word.toLowerCase().replaceAll("%20", "-"))

    // not found page my next13
    console.log(word1)
    if (!word1) {
        notFound()
    }


    // let ifpartsOfSpeech = word1?.partsOfSpeech.length > 0 ? true : false

    // generate jsonLD for SEO
    const jsonLd = [{
        "@context": "https://schema.org",
        "@type": "Person",
        "name": `${word1.name.replaceAll("-", " ")}`,
        "nationality": `${word1.country}`,
        "url": ``,
    }
    ]

    return (
        <main className='mx-auto h-auto rounded-lg p-6 px-4 prose prose-slate'>

            <Breadcrumbs place="/players" name="Players" title={params.word.replaceAll("-", " ")} />

            <h1 className='text-2xl mb-0 lg:text-3xl text-slate-800 text-center'><span className='capitalize'>{params.word.replaceAll("-", " ")} Profile - ICC Profile, Age, Career Info & Stats.</span></h1>

            <p>
                <span className='capitalize'>{params.word.replaceAll("-", " ")}</span> is a cricketer(sportsman) from {word1.country}. His ICC profile, age, career info & stats are given below.
            </p>

            <Image
                src={`/images/${word1.name}.jpg`}
                width={200}
                height={200}
                alt={`Picture of ${word1.name.replaceAll("-", " ")}`}
            />

            {word1.cricinfo_personal_info && (
                <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                    <div dangerouslySetInnerHTML={{ __html: `${word1.cricinfo_personal_info.replaceAll("gap:20px;", "gap: 2px; justify-content:center;").replaceAll("200px", "150px")}` }} />
                </div>
            )}

            {word1.cricbuzz_bat_bowl_summary && (
                <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                    <div dangerouslySetInnerHTML={{ __html: `${word1.cricbuzz_bat_bowl_summary}` }} />
                </div>
            )}

            {word1.cricinfo_teams && (
                <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                    <h4>Teams he has played for:</h4>
                    <ul dangerouslySetInnerHTML={{ __html: `${word1.cricinfo_teams.replaceAll("<li>Twitter</li>", "")}` }} />
                </div>
            )}


            {word1.cricbuzz_about_para && (
                <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                    <h4>Heres what  <Link href={`https://www.cricbuzz.com/profiles/${word1.cricbuzz_url_id}`}>CricBuzz</Link> says about him.</h4>
                    <div dangerouslySetInnerHTML={{ __html: `${word1.cricbuzz_about_para}` }} />
                </div>
            )}


            {word1.cricinfo_bio && (
                <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                    <h4>Heres what  <Link href={`https://search.espncricinfo.com${word1.cricinfo_url}`}>ESPNcricinfo</Link> says about him.</h4>
                    <div dangerouslySetInnerHTML={{ __html: `${word1.cricinfo_bio}` }} />
                </div>
            )}

            {word1.wiki_content && (
                <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                    <h4>Heres what Wikipedia says about him. <Link href={`${word1.wiki_url}`}>read full</Link></h4>
                    <div dangerouslySetInnerHTML={{ __html: `${word1.wiki_content}` }} />
                </div>
            )}



        <SimilerLinks country={word1.country} />



            {/* Add JSON-LD to your page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* JSON-LD Ends... */}
        </main>
    )
}
