import Layout from '@/components/layout'
import TranslationSelector from '@/components/translation-selector'
import Image from '@/components/image'
import { PrimaryButton } from '@/components/primary-button'
import SecondaryText from '@/components/secondary-text'
import { useRouter } from 'next/router'
import Center from '@/components/center'
import Card from '@/components/card'
import CardHeader from '@/components/card-header'
import Text from '@/components/text'
import { useEffect, useState } from 'react'
import AudioPlayer from '@/components/audio-player'

export default function Translate() {
    const router = useRouter()
    const [text, setText] = useState('')
    const [playing, setPlaying] = useState(false)
    const [icon, setIcon] = useState('pause.svg')

    useEffect(() => {
        const fetchTranslation = async () => {
            const response = await fetch(
                'https://oy0wv3ub7j.execute-api.us-west-1.amazonaws.com/prod/5c-hack-api'
            )
            setText(await response.text())
        }

        fetchTranslation()
    }, [setText])

    function handleControlClick() {
        setIcon(playing ? 'pause.svg' : 'speaker.svg')
        setPlaying(!playing)
    }

    return (
        <Layout pageName="Translation">
            <TranslationSelector />
            <AudioPlayer
                playing={playing}
                onComplete={() => {}}
                src="https://file-examples.com/storage/fe99f60565643aec39c7664/2017/11/file_example_MP3_1MG.mp3"
            />
            <Card>
                <CardHeader>
                    <Text>
                        <span className="text-link font-bold">
                            Ballot Translation
                        </span>
                    </Text>
                    <Image
                        onClick={handleControlClick}
                        src={icon}
                        width={playing ? 25 : 15}
                        height={25}
                        alt=""
                    />
                </CardHeader>
                <div className="max-h-1/2 overflow-scroll">
                    <Text>
                        <span className="text-sm">{text}</span>
                    </Text>
                </div>
            </Card>
            <Center>
                <PrimaryButton onClick={() => router.push('/scan')}>
                    <Image src="camera.svg" alt="" width={25} height={25} />
                    <SecondaryText>New Translation</SecondaryText>
                    <Image src="arrow.svg" alt="" width={25} height={25} />
                </PrimaryButton>
            </Center>
        </Layout>
    )
}
