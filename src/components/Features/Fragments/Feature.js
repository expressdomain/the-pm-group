import { Box, Stack, Text, useColorModeValue as mode } from "@chakra-ui/react"
import * as React from "react"

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
        {icon}
      </Box>
      <Stack spacing="1">
      <Text fontWeight="extrabold" fontSize="lg" color={`black`}>
            {title}
          </Text>
        <Box
          color={mode("gray.600", "gray.400")}
          textAlign={
            title === "EVENTS, PROMOTIONS, AND FUNDRAISERS" && "center"
          }
        >
          {children}
        </Box>
      </Stack>
    </Stack>
  )
}
