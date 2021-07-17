import {
  Box,
  HStack,
  SlideFade,
  Text,
  useBoolean,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import { navigate } from "gatsby"
import * as React from "react"
import { HiChevronDown } from "react-icons/hi"
import MenuItem from "./Fragments/MenuItem"

const SubMenu = ({ title, links }) => {
  const [show, { toggle }] = useBoolean(false)
  return (
    <Box as="div" pos="relative" height="fit-content" overflow="visible">
      <Box maxW="7xl" py={["0","0","0","6"]}>
        <HStack as="button" color={mode("black", "white")} mx="auto">
          <Text
            fontWeight={400}
            onClick={() => {
              navigate("/companies")
            }}
            transition="all 0.3s"
            _hover={{
              color: `secondary`
            }}
          >
            {title}
          </Text>
          <Box
            as={HiChevronDown}
            fontSize="3xl"
            color="black"
            onClick={() => {
              toggle()
            }}
          />
        </HStack>
        <Box
          as={SlideFade}
          in={show}
          pos="absolute"
          zIndex={99}
          top="16"
          bg={mode("white", "gray.700")}
          pt="2"
          display={show ? `` : `none`}
          w="4xl"
          maxW="lg"
          rounded="lg"
          overflow="visible"
          shadow="xl"
        >
          <Box as="ul" listStyleType="none" px="2" pb="2" >
            {links.map((link, idx) => (
              <Box as="li" key={idx} >
                <MenuItem href={link.url} title={link.label} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SubMenu
