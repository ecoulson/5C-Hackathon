import FocusBox from '@/components/focus-box'
import Layout from '@/components/layout'
import ScreenshotButton from '@/components/screenshot-button'
import TranslationSelector from '@/components/translation-selector'
import VideoFeed from '@/components/video-feed'

export default function Scan() {
    return (
        <Layout pageName="Camera Translation">
            <VideoFeed
                onScreenshot={(src) => {
                    console.log('yuh', src)
                }}
            />
            <TranslationSelector />
            <FocusBox />
            <ScreenshotButton />
        </Layout>
    )
}
