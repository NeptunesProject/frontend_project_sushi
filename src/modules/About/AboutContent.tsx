import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const AboutContent = () => {
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
          {t('about.title')}
        </Heading>
        <Flex
          borderRadius={16}
          flexDir="column"
          gap={3}
          maxW={900}
          bg="rgba(255, 255, 255, 0.7)"
          p={4}
          color="#333"
          fontWeight={600}
        >
          <Text>{t('about.firstP')}</Text>
          <Text>{t('about.secondP')}</Text>
          <Text>{t('about.thirdP')}</Text>
          <Text>{t('about.fourthP')}</Text>
          <Text>{t('about.fifthP')}</Text>
        </Flex>
      </Box>
    </Container>
  )
}

export default AboutContent
