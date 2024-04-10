import { Box, chakra, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { ChakraFactoryComponent } from 'types'
import { useTranslation } from 'react-i18next'
import Map from 'components/Map'

interface CustomCardProps extends ChakraFactoryComponent {
  title: string
  subtitle: string
}

const CustomCard = chakra(({ className, title, subtitle }: CustomCardProps) => (
  <Flex
    w={340}
    h={240}
    className={className}
    bg="white"
    borderRadius={15}
    p={8}
    gap={7}
    flexDir="column"
    boxShadow="0px 4px 15px 0px rgba(0, 0, 0, 0.15)"
  >
    <Text fontSize={18} color="turquoise.77" fontWeight={700}>
      {title}
    </Text>
    <Text fontSize={15} letterSpacing="0.35px" fontWeight={400} color="#333">
      {subtitle}
    </Text>
  </Flex>
))

const DeliveryInfoContent = () => {
  const { t } = useTranslation()

  return (
    <Container
      maxW="container.xl"
      my={14}
      display="flex"
      justifyContent="center"
      fontFamily="'Roboto', sans-serif"
    >
      <Box maxW={{ base: 500, lg: 1150 }} minW={{ base: 'auto', lg: '80%' }}>
        <Heading
          mb={120}
          as="h2"
          fontSize={36}
          fontWeight={700}
          color="turquoise.77"
          fontFamily="'Roboto', sans-serif"
          textAlign="center"
        >
          {t('deliveryPageInfo.title')}
        </Heading>

        <Flex justifyContent="center" gap={10} align="end" mb={100}>
          <Flex flexDir="column" gap={5}>
            <Text fontSize={30} fontWeight={700} color="turquoise.77">
              {t('deliveryPageInfo.firstCard.title')}
            </Text>
            <CustomCard
              title={t('deliveryPageInfo.firstCard.heading')}
              subtitle={t('deliveryPageInfo.firstCard.subtitle')}
            />
          </Flex>

          <Flex flexDir="column" gap={5}>
            <Text fontSize={30} fontWeight={700} color="turquoise.77">
              {' '}
              {t('deliveryPageInfo.secondCard.title')}
            </Text>
            <CustomCard
              title={t('deliveryPageInfo.secondCard.heading')}
              subtitle={t('deliveryPageInfo.secondCard.subtitle')}
            />
          </Flex>

          <Flex flexDir="column">
            <CustomCard
              title={t('deliveryPageInfo.thirdCard.heading')}
              subtitle={t('deliveryPageInfo.thirdCard.subtitle')}
            />
          </Flex>
        </Flex>

        <Map />
      </Box>
    </Container>
  )
}

export default DeliveryInfoContent
