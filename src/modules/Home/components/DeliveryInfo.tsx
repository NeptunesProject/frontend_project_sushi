import { chakra, Container, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import TextWithPoint from 'ui/TextWIthPoint'

const TextWithoutPoint = chakra(Text, {
  baseStyle: {
    fontSize: 15,
    fontWeight: 500,
  },
})

const DeliveryInfo = () => {
  const { t } = useTranslation()

  return (
    <Container maxW="container.lg">
      <Flex
        flexDirection="column"
        align="start"
        gap={5}
        bg="rgba(255, 255, 255, 0.7)"
        p={4}
        borderRadius={16}
      >
        <Text color="turquoise.77" fontSize={28} fontWeight={700}>
          {t('deliveryInfo.title')}
        </Text>
        <TextWithoutPoint>{t('deliveryInfo.first')}</TextWithoutPoint>
        <TextWithoutPoint>{t('deliveryInfo.second')}</TextWithoutPoint>
        <TextWithoutPoint>{t('deliveryInfo.third')}</TextWithoutPoint>
        <TextWithoutPoint>{t('deliveryInfo.fourth')}</TextWithoutPoint>
        <Flex flexDir={'column'} gap={2}>
          <TextWithPoint>{t('deliveryInfo.points.first')}</TextWithPoint>
          <TextWithPoint>{t('deliveryInfo.points.second')}</TextWithPoint>
          <TextWithPoint>{t('deliveryInfo.points.third')}</TextWithPoint>
          <TextWithPoint>{t('deliveryInfo.points.fourth')}</TextWithPoint>
        </Flex>
        <TextWithoutPoint>{t('deliveryInfo.fifth')}</TextWithoutPoint>
        <TextWithoutPoint>{t('deliveryInfo.sixth')}</TextWithoutPoint>
      </Flex>
    </Container>
  )
}

export default DeliveryInfo
