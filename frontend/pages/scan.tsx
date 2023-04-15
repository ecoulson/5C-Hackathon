import FocusBox from '@/components/focus-box'
import Layout from '@/components/layout'
import ScreenshotButton from '@/components/screenshot-button'
import TranslationSelector from '@/components/translation-selector'
import VideoFeed from '@/components/video-feed'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Webcam from 'react-webcam'

export default function Scan() {
    const router = useRouter()
    const ref = useRef<Webcam | null>(null)

    return (
        <Layout pageName="Ballot Capture">
            <VideoFeed webcamRef={ref} />
            <TranslationSelector />
            <FocusBox />
            <ScreenshotButton
                onClick={() => {
                    const imageData = ref.current?.getScreenshot()
                    if (!imageData) {
                        throw new Error('Failed to take screenshot')
                    }
                    window.localStorage.setItem('preview', imageData)
                    router.push('/preview')
                }}
            />
        </Layout>
    )
}
