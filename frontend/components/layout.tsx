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
            {hideNavbar ? null : <Navbar pageName={pageName ?? ''} />}
            <div className="p-4 min-h-screen flex flex-col justify-around z-0">
                {children}
            </div>
        </Container>
    )
}
