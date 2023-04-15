import Image from './image'
import Text from './text'

export default function TranslationSelector() {
    return (
        <div className="flex drop-shadow-md bg-white rounded-full py-2 justify-evenly items-center">
            <Image src="us.svg" alt="" width={35} height={25} />
            <button>
                <Text>English</Text>
            </button>
            <Image src="swap.svg" alt="" width={35} height={25} />
            <button className="rounded-full focus:bg-red">
                <Text>Spanish</Text>
            </button>
            <Image src="spain.svg" alt="" width={35} height={25} />
        </div>
    )
}
