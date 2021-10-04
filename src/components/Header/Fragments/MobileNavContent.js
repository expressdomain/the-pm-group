import { CloseButton, Flex } from "@chakra-ui/react"
import * as React from "react"

const MobileNavContent = props => {
  const { isOpen, onClose, children } = props

  return (
    <Flex
      direction="column"
      w="100%"
      bg={"white"}
      h="100vh"
      overflow="auto"
      pos="absolute"
      top={0}
      left={0}
      zIndex={25}
      px={4}
      py={4}
      d={isOpen ? "block" : "none"}
    >
      {children}
      <CloseButton
        pos="absolute"
        top={4}
        right={4}
        onClick={onClose}
        color={"secondary"}
        backgroundColor={"black"}
      />
    </Flex>
  )
}

export default MobileNavContent
