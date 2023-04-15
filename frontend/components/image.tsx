import NextImage from 'next/image'

interface ImageProps {
    src: string
    alt: string
    width?: number
    height?: number
}

export default function Image({ src, alt, width, height }: ImageProps) {
    return (
        <NextImage
            className="mx-auto"
            width={width}
            height={height}
            sizes="100vw"
            src={src}
            alt={alt}
        />
    )
}
