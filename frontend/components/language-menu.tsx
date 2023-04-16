import { use, useEffect, useState } from 'react'
import { Languages } from '../data/languages'
import Text from './text'
import Image from './image'

interface LanguageMenuProps {
    defaultLanguage: string
    onLanguageSelected: (languageDetails: {
        code: string
        language: string
    }) => void
}

export default function LanguageMenu({
    defaultLanguage,
    onLanguageSelected,
}: LanguageMenuProps) {
    const [activeLanguage, setActiveLanguage] = useState(defaultLanguage)

    return (
        <div>
            <Text>All Languages</Text>
            <div className="bg-white w-full left-0 absolute z-20 top-12 min-h-full">
                {Languages.map((languageDetails) => (
                    <div
                        className="flex p-2 gap-2"
                        onClick={() => {
                            setActiveLanguage(languageDetails.language)
                            onLanguageSelected(languageDetails)
                        }}
                    >
                        <div
                            className={
                                languageDetails.language === activeLanguage
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }
                        >
                            <Image
                                src="active.svg"
                                width={30}
                                height={30}
                                alt=""
                            />
                        </div>
                        <Text>{languageDetails.language}</Text>
                    </div>
                ))}
            </div>
        </div>
    )
}
