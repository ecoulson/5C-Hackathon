import Layout from '@/components/layout'
import TranslationSelector from '@/components/translation-selector'
import Image from '@/components/image'
import { PrimaryButton } from '@/components/primary-button'
import SecondaryText from '@/components/secondary-text'
import { useRouter } from 'next/router'
import Center from '@/components/center'

export default function Translate() {
    const router = useRouter()

    return (
        <Layout pageName="Translation">
            <TranslationSelector />
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
