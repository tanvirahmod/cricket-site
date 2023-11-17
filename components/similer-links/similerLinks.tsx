import { getArray } from '@/lib/words';
import React from 'react'
import Link from 'next/link';


export default async function
    (props: { country: string}) {
        const similer: any = await getArray(props.country)
        // console.log(similer)
    return (
        <div>
            <h3>Similer Links</h3>
            {similer?.map((letter: {
                name: any; id: React.Key | null | undefined;
            }) => (
                <p key={letter.id}><Link href={`/players/${letter.name}`}>{letter.name.replaceAll("-", " ")}&apos;s profile</Link></p>
            ))}
        </div>
    )
}
