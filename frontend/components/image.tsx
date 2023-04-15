import NextImage from 'next/image'

interface ImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    onClick?: () => void
}

export default function Image({
    src,
    alt,
    width,
    height,
    onClick,
}: ImageProps) {
    return (
        <NextImage
            onClick={onClick}
            width={width}
            height={height}
            sizes="100vw"
            src={src}
            alt={alt}
        />
    )
}
