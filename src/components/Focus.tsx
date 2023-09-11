'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'

import { home } from '@/data/home'
interface FeatureProps {
    title: string
    text: string
    icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    )
}

export default function Focus() {
    return (
        <Container maxW={'7xl'}>
            <Box p={4}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    {
                        home.focus.map((card: any) => {
                            return <>
                                <Feature
                                    icon={<Icon as={card.icon} w={10} h={10} />}
                                    title={card.title}
                                    text={card.text}
                                />
                               
                            </>
                        })
                    }
                </SimpleGrid>
            </Box>
        </Container>

    )
}