import FooterTitle from '../../ui/FooterTitle'
import { Flex } from '@chakra-ui/react'
import { NAV_LINKS } from 'constants'
import FooterLink from '../../ui/FooterLink'
import { useTranslation } from 'react-i18next'

const AppFooterNav = () => {
  const { t } = useTranslation()
  return (
    <Flex flexDir="column" gap={5}>
      <FooterTitle>{t('footer.nav')}:</FooterTitle>

      <Flex flexDir="column" gap={4}>
        {NAV_LINKS.map((route, idx) => (
          <FooterLink key={route} to={route}>
            {t(`navbar.${idx}`)}
          </FooterLink>
        ))}
      </Flex>
    </Flex>
  )
}

export default AppFooterNav
