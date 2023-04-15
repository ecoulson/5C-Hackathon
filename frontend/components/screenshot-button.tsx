interface ScreenshotButtonProps {
    onClick?: () => void
}

export default function ScreenshotButton({ onClick }: ScreenshotButtonProps) {
    return (
        <button className="relative flex justify-center h-24" onClick={onClick}>
            <div className="absolute rounded-full border-white border-6 box-content w-18 min-h-18"></div>
            <div className="absolute top-2 rounded-full bg-white w-16 min-h-16"></div>
        </button>
    )
}
