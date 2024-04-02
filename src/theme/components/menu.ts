const menu = {
  parts: ['list', 'menu', 'item'],
  baseStyle: {
    list: {
      p: 0,
      minW: '0px',
      borderRadius: 10,
      boxShadow: '0 0 8px rgba(0,0,0,.3)',
    },
    item: {
      bg: 'none',
      fontSize: 14,
      fontWeight: 800,
      color: 'grey.100',

      _hover: {
        color: 'blue.100',
      },
    },
  },
}

export default menu
