import { Flex, Link } from '@chakra-ui/react'
import Logo from 'components/Logo'
import FooterLink from '../../ui/FooterLink'
import FooterTitle from '../../ui/FooterTitle'
import { useTranslation } from 'react-i18next'

const AppFooterLogo = () => {
  const { t } = useTranslation()
  return (
    <Flex flexDir="column" gap={10}>
      <Logo />

      <Flex flexDir="column" gap={5}>
        <FooterLink to="/politika">{t('footer.logo.politika')}</FooterLink>
        <FooterLink to="/regulamin">{t('footer.logo.statute')}</FooterLink>
        <FooterTitle>{t('footer.logo.order')}:</FooterTitle>
        <FooterLink
          as={Link}
          _hover={{
            textDecoration: 'none',
            color: 'blue.100',
          }}
          mt={-1}
          href="tel:+48888 619 595"
        >
          +48888 619 595
        </FooterLink>
      </Flex>
    </Flex>
  )
}

export default AppFooterLogo
