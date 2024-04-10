import { chakra, Flex, Text } from '@chakra-ui/react'
import FooterTitle from 'ui/FooterTitle'
import { useTranslation } from 'react-i18next'

const CustomText = chakra(Text, {
  baseStyle: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '.35px',
    color: 'blue.200',
  },
})

const AppFooterAddress = () => {
  const { t } = useTranslation()
  return (
    <Flex flexDir="column" gap={6}>
      <FooterTitle>{t('footer.address.title')}:</FooterTitle>

      <CustomText>{t('footer.address.place')}</CustomText>

      <CustomText maxW={200}>{t('footer.address.geo')}</CustomText>

      <FooterTitle>{t('footer.logo.order')}:</FooterTitle>
      <CustomText mt={-1}>12:00 - 22:00</CustomText>
    </Flex>
  )
}

export default AppFooterAddress
