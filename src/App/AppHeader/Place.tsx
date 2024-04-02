import { Flex, Image, Text } from '@chakra-ui/react'
import point from 'assets/img/point.svg'
import { useTranslation } from 'react-i18next'

const Place = () => {
  const { t } = useTranslation()

  return (
    <Flex align="center" gap={2}>
      <Image src={point} />
      <Text fontSize={14} fontWeight={600} color="grey.100">
        {t('place')}
      </Text>
    </Flex>
  )
}

export default Place
