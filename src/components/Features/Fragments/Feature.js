import { Box, Stack, Text, useColorModeValue as mode } from "@chakra-ui/react"
import * as React from "react"
import Tada from "react-reveal/Tada"
import Fade from "react-reveal/Fade"

export const Feature = props => {
  const { title, children, icon } = props
  return (
    <Stack
      spacing={{
        base: "3",
        md: "6",
      }}
      direction={{
        base: "row",
        md: "row",
      }}
    >
      <Box
        fontSize="4xl"
        padding={3}
        bg={`secondary`}
        borderRadius={`50%`}
        height={`fit-content`}
      >
        <Tada>{icon}</Tada>
      </Box>
      <Stack spacing="1">
        <Fade bottom>
          <Text fontWeight="extrabold" fontSize="lg" color={`black`}>
            {title}
          </Text>
        </Fade>
        <Box
          color={mode("gray.600", "gray.400")}
          textAlign={title === "EVENTS, PROMOTIONS, AND FUNDRAISERS" && "center"}
        >
          {children}
        </Box>
      </Stack>
    </Stack>
  )
}
