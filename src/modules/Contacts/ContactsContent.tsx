import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Map from 'components/Map'

const ContactsContent = () => {
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
          {t('contacts.title')}
        </Heading>

        <Map />

        <Flex
          flexDir="column"
          gap={6}
          mt={24}
          p={4}
          bg="rgba(255, 255, 255, 0.7)"
          borderRadius={16}
        >
          <Text fontSize={30} fontWeight={700} color="turquoise.77">
            {t('contacts.heading')}
          </Text>

          <Box lineHeight="25px" fontWeight={600}>
            <Text> {t('contacts.place')}</Text>
            <Text>{t('work-hours.0')}:</Text>
            <Text>{t('work-hours.1')}</Text>
            <Text>{t('work-hours.2')}</Text>
            <Text>{t('contacts.phone')}</Text>
            <Text>+48888 619 595</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

export default ContactsContent
