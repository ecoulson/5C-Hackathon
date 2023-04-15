import { PropsWithChildren } from 'react'

interface PrimaryButtonProps extends PropsWithChildren {
    onClick?: () => void
}

export function PrimaryButton({ onClick, children }: PrimaryButtonProps) {
    return (
        <button
            className="bg-green block px-5 py-3 border-none rounded-full w-auto outline-none"
            onClick={onClick}
        >
            <div className="flex gap-4">{children}</div>
        </button>
    )
}
