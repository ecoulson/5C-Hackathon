import { PropsWithChildren } from 'react'
import Container from './container'
import Navbar from './navbar'

interface LayoutProps extends PropsWithChildren {
    hideNavbar?: boolean
    pageName?: string
}

export default function Layout({
    children,
    hideNavbar,
    pageName,
}: LayoutProps) {
    return (
        <Container>
            <div className="flex min-h-screen shrink grow flex-col items-stretch">
                {hideNavbar ? null : <Navbar pageName={pageName ?? ''} />}
                <div className="p-4 flex grow shrink-0 flex-col z-0 justify-around items-stretch">
                    {children}
                </div>
            </div>
        </Container>
    )
}
