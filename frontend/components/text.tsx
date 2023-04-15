import { PropsWithChildren } from 'react'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
    subsets: ['latin'],
})

export default function Text({ children }: PropsWithChildren) {
    return (
        <p
            className={`font-sans font-not-italic text-xl text-black ${openSans.className}`}
        >
            {children}
        </p>
    )
}
