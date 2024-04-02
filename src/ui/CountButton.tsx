import { Button, chakra } from '@chakra-ui/react'

const CountButton = chakra(Button, {
  baseStyle: {
    bg: 'turquoise.77',
    borderLeftRadius: 20,
    h: 25,
    width: 10,
    color: 'white',
    px: 0,
  },
})

export default CountButton
