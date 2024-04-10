import { chakra, Text } from '@chakra-ui/react'

const FooterTitle = chakra(Text, {
  baseStyle: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: 12,
    transition: 'all 0.2s',
    fontWeight: 400,
    letterSpacing: '.35px',
    lineHeight: '12px',
    color: 'grey.100',
  },
})

export default FooterTitle
