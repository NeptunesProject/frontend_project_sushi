import { Flex, Text, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

const WorkHours = () => {
  const { t } = useTranslation()
  return (
    <Box role="group" pos="relative" cursor="pointer">
      <Flex align="center" gap={0.5}>
        <Text fontSize={14} color="grey.100" fontWeight={600}>
          {t('work-hours.0')}
        </Text>
        <ChevronDownIcon color="grey.100" fontSize={26} />
      </Flex>
      <Flex
        display="none"
        _groupHover={{
          display: 'flex',
        }}
        mt={-0.5}
        flexDir="column"
        pos="absolute"
        px={2.5}
        py={4}
        whiteSpace="nowrap"
        boxShadow="0 0 8px rgba(0,0,0,.3)"
        borderRadius={10}
        color="grey.100"
        fontSize={14}
        fontWeight={600}
        gap={1.5}
      >
        <Text>{t('work-hours.1')}</Text>
        <Text>{t('work-hours.2')}</Text>
      </Flex>
    </Box>
  )
}

export default WorkHours
