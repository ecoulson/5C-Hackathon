import { PropsWithChildren } from 'react'

interface CenterProps extends PropsWithChildren {
    paddingTop?: string
    paddingBottom?: string
}

export default function Center({
    children,
    paddingTop = '',
    paddingBottom = '',
}: CenterProps) {
    return (
        <div className={`mx-auto ${paddingBottom} ${paddingTop}`.trim()}>
            {children}
        </div>
    )
}
