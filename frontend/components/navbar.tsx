import { useRouter } from 'next/router'
import Image from './image'
import SecondaryText from './secondary-text'

interface NavbarProps {
    pageName: string
}

export default function Navbar({ pageName }: NavbarProps) {
    const router = useRouter()

    return (
        <div className="flex z-10 relative align-middle gap-4 w-full bg-green py-3 px-5">
            <Image
                src="back-arrow.svg"
                alt=""
                width={20}
                height={15}
                onClick={() => router.back()}
            />
            <SecondaryText>{pageName}</SecondaryText>
        </div>
    )
}
