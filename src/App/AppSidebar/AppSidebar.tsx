import { Flex, Image, Text } from '@chakra-ui/react'
import { CATEGORY } from './constants'
import { useTranslation } from 'react-i18next'
import useCategories from '../../hooks/useCategories'
import { useMemo } from 'react'
import { Category } from '../../types'

const AppSidebar = () => {
  const { i18n } = useTranslation()
  const { categories } = useCategories()
  const currentLanguage = i18n.language

  const categoriesWithMetadata = useMemo(() => {
    if (!categories) return []

    return categories.map((category) => {
      const meta = CATEGORY.find((item) => category.name === item.name)

      if (meta) {
        return {
          ...category,
          ...meta,
        }
      }

      return category
    })
  }, [categories])

  const getNameByTranslate = (category: Category) => {
    switch (currentLanguage) {
      case 'en':
        return category.nameEn
      case 'ua':
        return category.nameUa
      case 'pl':
        return category.name
      case 'ru':
        return category.nameRu
    }
  }

  return (
    <Flex
      minW={{ base: 1000, lg: 'auto' }}
      w="100%"
      flexDir={{ base: 'row', lg: 'column' }}
      gap={{ base: 1, lg: 6 }}
      bg="white"
      as="aside"
      py={2.5}
      px={{ base: 4, lg: 0 }}
      justify="space-between"
      boxShadow="2px 7px 11px rgba(0,0,0,.07)"
      borderBottomRadius={{ base: 0, lg: 10 }}
    >
      {categoriesWithMetadata.map((category) => (
        <Flex
          gap={1}
          flexDir="column"
          align="center"
          key={category.name}
          w={{ base: 77, lg: 105 }}
          cursor="pointer"
          role="group"
        >
          <Image src={category.img} boxSize={19} />
          <Text
            _groupHover={{
              color: 'blue.100',
            }}
            textAlign="center"
            fontSize={12}
            lineHeight="12px"
            letterSpacing=".15px"
            color="grey.100"
            fontWeight={800}
          >
            {getNameByTranslate(category)}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

export default AppSidebar
