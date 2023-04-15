import { PropsWithChildren } from 'react'

interface OutlineButtonProps extends PropsWithChildren {
    onClick?: () => void
}

export function OutlineButton({ children, onClick }: OutlineButtonProps) {
    return (
        <button
            className="bg-transparent block px-5 py-3 border-black border-2 rounded-full w-auto outline-none"
            onClick={onClick}
        >
            <div className="flex gap-4">{children}</div>
        </button>
    )
}
