import Center from '@/components/center'
import Image from '@/components/image'
import Layout from '@/components/layout'
import { PrimaryButton } from '@/components/primary-button'
import SecondaryText from '@/components/secondary-text'
import TextButton from '@/components/text-button'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Preview() {
    const router = useRouter()
    const [data, setData] = useState('/placeholder.png')

    useEffect(() => {
        setData(window.localStorage.getItem('preview') ?? data)
    })

    return (
        <Layout pageName="Preview Ballot">
            <Center>
                <Image src={data} width={300} height={300} alt="" />
            </Center>
            <Center>
                <div className="flex flex-col gap-y-4">
                    <PrimaryButton
                        onClick={() => {
                            // make translate call
                            window.localStorage.removeItem('preview')
                            router.push('/translate')
                        }}
                    >
                        <Image src="camera.svg" alt="" width={25} height={25} />
                        <SecondaryText>Translate Text</SecondaryText>
                        <Image src="arrow.svg" alt="" width={25} height={25} />
                    </PrimaryButton>
                    <TextButton
                        text="Retake Photo"
                        onClick={() => router.back()}
                    />
                </div>
            </Center>
        </Layout>
    )
}
