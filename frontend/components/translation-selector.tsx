import Image from './image'
import TextButton from './text-button'

export default function TranslationSelector() {
    return (
        <div className="flex drop-shadow-md bg-white rounded-full py-2 justify-evenly items-center">
            <Image src="us.svg" alt="" width={35} height={25} />
            <TextButton text="English" />
            <Image src="swap.svg" alt="" width={35} height={25} />
            <TextButton text="Spanish" />
            <Image src="spain.svg" alt="" width={35} height={25} />
        </div>
    )
}
