import { useCallback, useRef } from 'react'
import Webcam from 'react-webcam'

interface VideoFeedProps {
    onScreenshot: (src: string | null | undefined) => void
}

export default function VideoFeed({ onScreenshot }: VideoFeedProps) {
    const webcamRef = useRef<Webcam>(null)
    const capture = useCallback(() => {
        onScreenshot(webcamRef.current?.getScreenshot())
    }, [webcamRef])

    return (
        <div className="z-0 flex justify-center absolute w-full top-0 left-0 min-h-full bg-black">
            <Webcam
                ref={webcamRef}
                mirrored
                videoConstraints={{
                    facingMode: 'environment',
                }}
            />
        </div>
    )
}
