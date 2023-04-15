import { PropsWithChildren } from 'react'
import Container from './container'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <Container>
            <div className="p-4 min-h-screen flex flex-col justify-around">
                {children}
            </div>
        </Container>
    )
}
