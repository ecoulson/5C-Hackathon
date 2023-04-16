import { useEffect, useState } from 'react'
import Card from './card'
import Image from './image'
import TextButton from './text-button'
import LanguageMenu from './language-menu'

interface TranslationSelectorProps {
    initialLanguage: string
    translationLanguage: string
    onInitialLanguageClick?: () => void
    onTranslatedLanguageClick?: () => void
}

export default function TranslationSelector({
    initialLanguage,
    translationLanguage,
    onInitialLanguageClick,
    onTranslatedLanguageClick,
}: TranslationSelectorProps) {
    return (
        <Card>
            <div className="flex justify-between items-center">
                <Image src="us.svg" alt="" width={35} height={25} />
                <TextButton
                    text={initialLanguage}
                    onClick={onInitialLanguageClick}
                />
                <Image src="swap.svg" alt="" width={35} height={25} />
                <TextButton
                    text={translationLanguage}
                    onClick={onTranslatedLanguageClick}
                />
                <Image src="spain.svg" alt="" width={35} height={25} />
            </div>
        </Card>
    )
}
