import { extendTheme } from '@chakra-ui/react'
import sizes from './sizes'
import fonts from './fonts'
import colors from './colors'
import global from './global'
import menu from './components/menu'
import breakpoints from './breakpoints'
import drawer from './components/drawer'

const theme = extendTheme({
  styles: {
    global,
  },
  components: {
    Menu: menu,
    Drawer: drawer,
  },
  sizes,
  fonts,
  colors,
  breakpoints,
})

export default theme
