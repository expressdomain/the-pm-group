import React from "react"

import { Container, Text, Box } from "@chakra-ui/react"

const PolicyContent = ({ privacy }) => {
  return (
    <Container>
      {privacy.map(item => (
        <Box>
          <Text my={2} style={{ fontSize: `24px`, lineHeight: `30px`, color: `#2E2E2E`, textTransform: `uppercase` }}>{item.sectionTitle}</Text>
          <Text pl={5} pb={2} dangerouslySetInnerHTML={{ __html: item.sectionContent }} />
        </Box>
      ))}
    </Container>
  )
}

export default PolicyContent
