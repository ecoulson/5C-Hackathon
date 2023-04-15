import Card from './card'
import Image from './image'
import TextButton from './text-button'

export default function TranslationSelector() {
    return (
        <Card>
            <div className="flex justify-between items-center">
                <Image src="us.svg" alt="" width={35} height={25} />
                <TextButton text="English" />
                <Image src="swap.svg" alt="" width={35} height={25} />
                <TextButton text="Spanish" />
                <Image src="spain.svg" alt="" width={35} height={25} />
            </div>
        </Card>
    )
}
