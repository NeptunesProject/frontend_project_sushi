import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import CountButton from '../../ui/CountButton'
import { useAdditionalProductsContext } from 'contexts/BasketContext'

const AdditionalProducts = () => {
  //const [personCount, setPersonCount] = React.useState(1)
  //const [sticks, setSticks] = React.useState(0)

  const { personCount, sticks, setCount } = useAdditionalProductsContext()

  return (
    <Flex flexDir="column" fontWeight={600} gap={3}>
      <Flex w="100%" justify="space-between">
        <Text>Кількість персон</Text>

        <Flex align="center" gap={2}>
          <CountButton
            borderLeftRadius={20}
            borderRightRadius={5}
            onClick={(e) => {
              e.preventDefault()
              if (personCount > 1) {
                setCount('personCount', personCount - 1)
              }
            }}
          >
            -
          </CountButton>

          <Text fontSize={12} fontWeight={600}>
            {personCount}
          </Text>

          <CountButton
            borderRightRadius={20}
            borderLeftRadius={5}
            onClick={(e) => {
              e.preventDefault()
              setCount('personCount', personCount + 1)
            }}
          >
            +
          </CountButton>
        </Flex>
      </Flex>

      <Flex w="100%" justify="space-between">
        <Text>Кількість навчальних паличок</Text>

        <Flex align="center" gap={2}>
          <CountButton
            borderLeftRadius={20}
            borderRightRadius={5}
            onClick={(e) => {
              e.preventDefault()
              if (sticks > 0) {
                setCount('sticks', sticks - 1)
              }
            }}
          >
            -
          </CountButton>

          <Text fontSize={12} fontWeight={600}>
            {sticks}
          </Text>

          <CountButton
            borderRightRadius={20}
            borderLeftRadius={5}
            onClick={(e) => {
              e.preventDefault()
              setCount('sticks', sticks + 1)
            }}
          >
            +
          </CountButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AdditionalProducts
