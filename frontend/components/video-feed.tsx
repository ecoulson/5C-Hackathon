import { MutableRefObject } from 'react'
import Webcam from 'react-webcam'

interface VideoFeedProps {
    webcamRef: MutableRefObject<Webcam | null>
}

export default function VideoFeed({ webcamRef }: VideoFeedProps) {
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
