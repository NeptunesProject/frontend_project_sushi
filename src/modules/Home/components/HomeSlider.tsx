import React from 'react'
import { Flex, Image, Box, Text } from '@chakra-ui/react'
import mainScreenSliderImg from 'assets/img/home-screen-slider.jpg'
import { useTranslation } from 'react-i18next'

const HomeSlider = () => {
  const { t } = useTranslation()

  return (
    <Flex w="100%" justify="center" align="center" pos="relative" h={400}>
      <Image
        pos="absolute"
        borderRadius={20}
        src={mainScreenSliderImg}
        width="100%"
      />
      <Box
        borderRadius={20}
        zIndex={2}
        px={{ base: 1, md: 10 }}
        py={{ base: 1, md: 10 }}
        bgColor="turquoise.77"
        opacity={0.7}
      >
        <Text
          fontSize={{ base: 14, md: 20, xl: 35 }}
          lineHeight="28px"
          letterSpacing="0.36px"
          color="white"
          fontWeight={700}
          textTransform="uppercase"
        >
          {t('homeSlider.title')}
        </Text>
      </Box>
    </Flex>
  )
}

export default HomeSlider
