import { CloseButton, Flex, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import * as React from "react"

const MobileNavContent = props => {
  const { isOpen, onClose, children } = props
  const bg = useColorModeValue("white", "gray.800")
  const buttonColor = useColorModeValue("secondary")

  const bgColor = useColorModeValue("black")
  return (
    <AnimatePresence>
      {isOpen && (
        <Flex
          direction="column"
          w="100%"
          bg={bg}
          h="100vh"
          overflow="auto"
          pos="absolute"
          top={0}
          left={0}
          zIndex={25}
          px={4}
          py={4}
        >
          {children}
          <CloseButton
            pos="absolute"
            top={4}
            right={4}
            onClick={onClose}
            color={buttonColor}
            backgroundColor={bgColor}
          />
        </Flex>
      )}
    </AnimatePresence>
  )
}

export default MobileNavContent
