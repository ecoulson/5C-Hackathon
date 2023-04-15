import { PropsWithChildren } from 'react'
import Text from './text'

export default function SecondaryText({ children }: PropsWithChildren) {
    return (
        <Text>
            <span className="text-white">{children}</span>
        </Text>
    )
}
