import { PropsWithChildren } from 'react'

export default function CardHeader({ children }: PropsWithChildren) {
    return <div className="flex gap-4 justify-start py-2 px-2">{children}</div>
}
