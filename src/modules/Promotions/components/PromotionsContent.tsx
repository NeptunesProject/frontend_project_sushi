import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Box,
  chakra,
} from '@chakra-ui/react'
import neptunesLogo from 'assets/img/promotions/neptunesLogo.svg'
import bannerBg from 'assets/img/promotions/bannerBg.svg'
import { useTranslation } from 'react-i18next'

const BannerButton = chakra(Button, {
  baseStyle: {
    bg: 'none',
    borderLeft: 'none !important',
    border: '1px solid',
    borderLeftRadius: 0,
    borderRightRadius: 20,
    transition: 'all .3s',
    lineHeight: '40px',
    pr: 8,
  },
})

const PromotionsContent = () => {
  const { t } = useTranslation()

  return (
    <Container
      maxW="container.xl"
      my={14}
      display="flex"
      justifyContent="center"
      fontFamily="'Roboto', sans-serif"
    >
      <Box maxW={{ base: 500, lg: 1150 }} minW={{ base: 'auto', lg: '80%' }}>
        <Heading
          as="h2"
          fontSize={36}
          fontWeight={700}
          color="turquoise.77"
          mb={8}
          fontFamily="'Roboto', sans-serif"
        >
          {t('promotions.title')}
        </Heading>

        <Flex flexDir="column" align="start" gap={12}>
          <Flex
            w="100%"
            justifyContent="space-between"
            bg="turquoise.77"
            borderRadius={20}
            p={5}
            pos="relative"
          >
            <Box color="white">
              <Text
                mb={6}
                fontSize={30}
                lineHeight="34px"
                fontWeight={700}
                maxW={560}
              >
                {t('promotions.firstBanner.title')}
              </Text>

              <Text fontSize={15} lineHeight="20px">
                {t('promotions.firstBanner.subtitle')}
              </Text>

              <BannerButton
                pos="absolute"
                left={0}
                bottom={30}
                borderColor="white"
                color="white"
                _hover={{
                  color: 'turquoise.77',
                  bg: 'white',
                }}
              >
                {t('promotions.firstBanner.btnText')}
              </BannerButton>
            </Box>

            <Image src={neptunesLogo} h={250} />
          </Flex>
          {/* */}
          <Flex
            w="92%"
            justifyContent="space-between"
            bg="white"
            borderRadius={20}
            p={5}
            pos="relative"
          >
            <Box color="turquoise.77">
              <Text
                mb={6}
                fontSize={30}
                lineHeight="34px"
                fontWeight={700}
                maxW={560}
              >
                {t('promotions.secondBanner.title')}
              </Text>

              <Text fontSize={15} lineHeight="20px">
                {t('promotions.secondBanner.subtitle')}
              </Text>

              <BannerButton
                pos="absolute"
                left={0}
                bottom={30}
                borderColor="turquoise.77"
                color="turquoise.77"
                _hover={{
                  color: 'white',
                  bg: 'turquoise.77',
                }}
              >
                {t('promotions.secondBanner.btnText')}
              </BannerButton>
            </Box>

            <Image src={bannerBg} h={250} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

export default PromotionsContent
