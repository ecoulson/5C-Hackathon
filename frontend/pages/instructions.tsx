import Center from '@/components/center'
import Image from '@/components/image'
import Layout from '@/components/layout'
import { PrimaryButton } from '@/components/primary-button'
import SecondaryText from '@/components/secondary-text'
import Text from '@/components/text'

export default function Instructions() {
    return (
        <Layout>
            <Text>
                Scan your <b>entire ballot</b> to have it read out loud.
            </Text>
            <Center>
                <Image width={253} height={300} alt="" src="ballot.svg" />
            </Center>
            <Center>
                <PrimaryButton>
                    <SecondaryText>Scan Ballot</SecondaryText>
                    <Image width={24} height={10} src="arrow.svg" alt="" />
                </PrimaryButton>
            </Center>
        </Layout>
    )
}
