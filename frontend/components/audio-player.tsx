import { useEffect, useRef, useState } from 'react'
import Text from './text'

interface AudioPlayerProps {
    src: string
    playing: boolean
    onComplete: () => void
}

export default function AudioPlayer({
    src,
    playing,
    onComplete,
}: AudioPlayerProps) {
    const [durationMiliseconds, setDurationMiliseconds] = useState(0)
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [positionMiliseconds, setPositionMiliseconds] = useState(0)
    const [timer, setTimer] = useState<NodeJS.Timer | null>(null)
    const progressBarRef = useRef<HTMLDivElement | null>(null)
    const progressDotRef = useRef<HTMLDivElement | null>(null)

    function formatTime(duration: number) {
        const seconds = Math.floor((duration / 1000) % 60)
        const minutes = Math.floor((duration / (1000 * 60)) % 60)
        const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

        const hoursFormatted = hours < 10 ? '0' + hours : hours
        const minutesFormatted = minutes < 10 ? '0' + minutes : minutes
        const secondsFormatted = seconds < 10 ? '0' + seconds : seconds

        return hours > 0
            ? `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`
            : `${minutesFormatted}:${secondsFormatted}`
    }

    useEffect(() => {
        const audio = new Audio(src)
        setAudio(audio)
        setPositionMiliseconds(0)
        if (timer) {
            clearInterval(timer)
        }
        audio.onloadedmetadata = () => {
            setDurationMiliseconds(audio.duration * 1000)
        }
    }, [src])

    useEffect(() => {
        const percentage = (positionMiliseconds / durationMiliseconds) * 100
        progressBarRef.current!.style.width = `${percentage}%`
        progressDotRef.current!.style.left = `${percentage}%`
        progressDotRef.current!.style.transform = 'translateX(-50%)'
        if (percentage >= 100) {
            if (timer) {
                clearInterval(timer)
            }
            if (audio) {
                setPositionMiliseconds(0)
                audio.currentTime = 0
                onComplete()
            }
        }
    }, [positionMiliseconds])

    useEffect(() => {
        if (!audio) {
            return
        }
        if (!playing) {
            audio.pause()
            if (timer) {
                clearInterval(timer)
            }
        } else {
            audio.play()
            setTimer(
                setInterval(() => {
                    setPositionMiliseconds(audio.currentTime * 1000)
                }, 500)
            )
        }

        return () => {
            if (timer) {
                audio.pause()
                clearInterval(timer)
            }
        }
    }, [playing])

    return (
        <div>
            <div className="relative pb-3">
                <div className="top-1 absolute py-1 w-full rounded-xl bg-inactive"></div>
                <div
                    ref={progressBarRef}
                    className="top-1 absolute py-1 w-0 rounded-xl bg-active"
                ></div>
                <div
                    ref={progressDotRef}
                    className="absolute p-2 rounded-full bg-active"
                ></div>
            </div>
            <div className="flex justify-between">
                <Text>
                    <span className="text-link text-sm font-bold">
                        {formatTime(positionMiliseconds)}
                    </span>
                </Text>
                <Text>
                    <span className="text-link text-sm font-bold">
                        -{formatTime(durationMiliseconds - positionMiliseconds)}
                    </span>
                </Text>
            </div>
        </div>
    )
}
