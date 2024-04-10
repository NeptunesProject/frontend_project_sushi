import { useTranslation } from 'react-i18next'
import { Container, Flex, Text } from '@chakra-ui/react'
import TextWithPoint from 'ui/TextWIthPoint'

const DeliveryAdvantages = () => {
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
          {t('deliveryAdvantage.title')}
        </Text>

        <Flex flexDir={'column'} gap={2.5}>
          <TextWithPoint>{t('deliveryAdvantage.points.first')}</TextWithPoint>
          <TextWithPoint>{t('deliveryAdvantage.points.second')}</TextWithPoint>
          <TextWithPoint>{t('deliveryAdvantage.points.third')}</TextWithPoint>
          <TextWithPoint>{t('deliveryAdvantage.points.fourth')}</TextWithPoint>
          <TextWithPoint>{t('deliveryAdvantage.points.fifth')}</TextWithPoint>
          <TextWithPoint>{t('deliveryAdvantage.points.sixth')}</TextWithPoint>
          <TextWithPoint>{t('deliveryAdvantage.points.seventh')}</TextWithPoint>
        </Flex>
        <Text>{t('deliveryAdvantage.first')}</Text>
      </Flex>
    </Container>
  )
}

export default DeliveryAdvantages
