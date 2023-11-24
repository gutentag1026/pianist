import { Suspense } from 'react'

export default function Videos({ params }) {
    return (
        <Suspense fallback={<p>loading...</p>}>
            <h1>{params.slug}</h1>
        </Suspense>
    )
}