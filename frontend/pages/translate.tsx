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
import { v4 } from 'uuid'
import mime from 'mime-types'

export default function Translate() {
    const router = useRouter()
    const [data, setData] = useState<any>({})
    const [playing, setPlaying] = useState(false)
    const [icon, setIcon] = useState('speaker.svg')
    const [initialLanguage, setInitialLanguage] = useState('English')
    const [initialCode, setInitialCode] = useState('en')
    const [translationLanguage, setTranslationLanguage] = useState('Spanish')
    const [translationCode, setTranslationCode] = useState('es')

    useEffect(() => {
        const fetchTranslation = async () => {
            const formData = new FormData()
            const dataUrl = window.localStorage.getItem('preview')
            if (dataUrl) {
                const blob = dataURItoBlob(dataUrl)
                const id = v4()
                formData.append(
                    'image',
                    blob,
                    `${id}.${mime.extension(blob.type)}`
                )
                const response = await fetch(
                    `http://127.0.0.1:5000/5c-hack-api?initialCode=${initialCode}&translationCode=${translationCode}`,
                    {
                        method: 'POST',
                        body: formData,
                    }
                )
                setData(await response.json())
            }
        }

        setInitialCode(
            window.localStorage.getItem('initialLanguageCode') ?? 'en'
        )
        setTranslationCode(
            window.localStorage.getItem('translationLanguageCode') ?? 'es'
        )
        setInitialLanguage(
            window.localStorage.getItem('initialLanguage') ?? 'English'
        )
        setTranslationLanguage(
            window.localStorage.getItem('translationLanguage') ?? 'Spanish'
        )

        fetchTranslation()
    }, [])

    function dataURItoBlob(dataURI: string) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1])

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length)
        var ia = new Uint8Array(ab)
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i)
        }

        return new Blob([ab], { type: mimeString })
    }

    function handleControlClick() {
        setIcon(playing ? 'speaker.svg' : 'pause.svg')
        setPlaying(!playing)
    }

    return (
        <Layout pageName="Translation">
            <TranslationSelector
                translationLanguage={translationLanguage}
                initialLanguage={initialLanguage}
            />
            <AudioPlayer
                playing={playing}
                onComplete={() => {
                    setPlaying(false)
                    setIcon('speaker.svg')
                }}
                src={`http://127.0.0.1:5000/${data.audio_path}` ?? ''}
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
                        width={playing ? 15 : 25}
                        height={playing ? 15 : 25}
                        alt=""
                    />
                </CardHeader>
                <div className="min-h-1/2-vh max-h-1/2 overflow-scroll">
                    <Text>
                        <span className="text-sm">{data.text}</span>
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
