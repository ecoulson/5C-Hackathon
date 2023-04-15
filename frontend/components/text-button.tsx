import Text from './text'

interface TextButton {
    text: string
    onClick?: () => void
}

export default function TextButton({ text, onClick }: TextButton) {
    return (
        <button onClick={onClick}>
            <Text>
                <span className="font-dark-gray font-medium">{text}</span>
            </Text>
        </button>
    )
}
