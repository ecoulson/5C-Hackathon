import FocusBox from '@/components/focus-box'
import LanguageMenu from '@/components/language-menu'
import Layout from '@/components/layout'
import ScreenshotButton from '@/components/screenshot-button'
import TranslationSelector from '@/components/translation-selector'
import VideoFeed from '@/components/video-feed'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'

export default function Scan() {
    const router = useRouter()
    const ref = useRef<Webcam | null>(null)
    const [initialLanguage, setInitialLanguage] = useState('English')
    const [initialCode, setInitialCode] = useState('en')
    const [translationLanguage, setTranslationLanguage] = useState('Spanish')
    const [translationCode, setTranslationCode] = useState('es')
    const [selectingInitialLanguage, setSelectingInitialLanguage] =
        useState(false)
    const [selectingTranslationLanguage, setSelectingTranslationLanguage] =
        useState(false)

    useEffect(() => {
        const code = window.localStorage.getItem('localCode')
        const language = window.localStorage.getItem('localLanguage')
        if (code) {
            setTranslationCode(code)
        }
        if (language) {
            setTranslationLanguage(language)
        }
    }, [])

    function renderLanguageMenu() {
        if (selectingInitialLanguage || selectingTranslationLanguage) {
            return (
                <LanguageMenu
                    defaultLanguage={
                        selectingInitialLanguage
                            ? initialLanguage
                            : translationLanguage
                    }
                    onLanguageSelected={(details) => {
                        if (selectingInitialLanguage) {
                            setInitialLanguage(details.language)
                            setInitialCode(details.code)
                            setSelectingInitialLanguage(false)
                        }
                        if (selectingTranslationLanguage) {
                            setTranslationLanguage(details.language)
                            setTranslationCode(details.code)
                            setSelectingTranslationLanguage(false)
                        }
                    }}
                />
            )
        }
    }

    return (
        <Layout pageName="Ballot Capture">
            <VideoFeed webcamRef={ref} />
            <TranslationSelector
                initialLanguage={initialLanguage}
                translationLanguage={translationLanguage}
                onInitialLanguageClick={() => setSelectingInitialLanguage(true)}
                onTranslatedLanguageClick={() =>
                    setSelectingTranslationLanguage(true)
                }
            />
            <FocusBox />
            <ScreenshotButton
                onClick={() => {
                    const imageData = ref.current?.getScreenshot()
                    if (!imageData) {
                        throw new Error('Failed to take screenshot')
                    }
                    window.localStorage.setItem('preview', imageData)
                    window.localStorage.setItem(
                        'initialLanguage',
                        initialLanguage
                    )
                    window.localStorage.setItem(
                        'initialLanguageCode',
                        initialCode
                    )
                    window.localStorage.setItem(
                        'translatedLanguage',
                        translationLanguage
                    )
                    window.localStorage.setItem(
                        'translatedLanguageCode',
                        translationCode
                    )
                    router.push('/preview')
                }}
            />
            {renderLanguageMenu()}
        </Layout>
    )
}
