import { PropsWithChildren } from 'react'

export default function Card({ children }: PropsWithChildren) {
    return (
        <div className="drop-shadow-md rounded-xl py-3 px-2 bg-card">
            {children}
        </div>
    )
}
