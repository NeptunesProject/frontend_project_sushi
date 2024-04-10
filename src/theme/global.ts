const global = {
  body: {
    backgroundColor: 'white.200',
    color: 'black',
    fontWeight: 500,
  },

  '::-webkit-scrollbar': {
    width: '5px',
    height: '1px',
  },
  '::-webkit-scrollbar-track:hover': {
    // TODO: Move to theme if needed
    background: '#fff',
  },
  '::-webkit-scrollbar-thumb': {
    background: 'blue.200 ',
    borderRadius: '15px',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: 'blue.200',
  },
}

export default global
