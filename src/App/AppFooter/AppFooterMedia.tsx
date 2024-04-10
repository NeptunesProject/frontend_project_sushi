import { Flex, Link, Image } from '@chakra-ui/react'
import FooterTitle from 'ui/FooterTitle'
import { FacebookIconFilled, InstagramIconFilled } from 'ui/icons'
import mastercard from 'assets/img/payment/mastercard.svg'
import visa from 'assets/img/payment/visa.svg'
import payu from 'assets/img/payment/payu.svg'
import { useTranslation } from 'react-i18next'

const AppFooterMedia = () => {
  const { t } = useTranslation()
  return (
    <Flex flexDir="column" h={190} justify="space-between" maxW={165}>
      <FooterTitle>{t('footer.social.title')}:</FooterTitle>

      <Flex>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FacebookIconFilled boxSize={8} />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <InstagramIconFilled boxSize={8} />
        </Link>
      </Flex>

      <Flex flexDir="column" gap={4}>
        <FooterTitle>{t('footer.social.payment')}:</FooterTitle>
        <Flex gap={2} align="center">
          <Image src={mastercard} />
          <Image src={visa} />
          <Image src={payu} w={6} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AppFooterMedia
