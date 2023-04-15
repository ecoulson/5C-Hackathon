import Center from '@/components/center'
import Image from '@/components/image'
import Layout from '@/components/layout'
import { OutlineButton } from '@/components/outline-button'
import { PrimaryButton } from '@/components/primary-button'
import SecondaryText from '@/components/secondary-text'
import Text from '@/components/text'

export default function Home() {
    return (
        <Layout>
            <Text>
                Get your ballot translated and read out loud to you in your
                native language.
            </Text>
            <Center>
                <Image width={253} height={300} alt="" src="first.svg" />
            </Center>
            <Center>
                <div className="flex flex-col gap-y-4">
                    <OutlineButton>
                        <Image
                            width={30}
                            height={30}
                            src="translate.svg"
                            alt=""
                        />
                        <Text>
                            {navigator.language === 'en-US'
                                ? 'English'
                                : 'Other'}
                        </Text>
                        <Image
                            width={15}
                            height={5}
                            src="chevron-down.svg"
                            alt=""
                        />
                    </OutlineButton>
                    <PrimaryButton>
                        <SecondaryText>Get Started</SecondaryText>
                        <Image width={24} height={10} src="arrow.svg" alt="" />
                    </PrimaryButton>
                </div>
            </Center>
        </Layout>
    )
}
