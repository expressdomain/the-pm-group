import * as React from "react"

import { Container, Box, Text } from "@chakra-ui/layout"

const GSAContent = ({ content }) => {
    return(
        <Container>
            {content.map(item => (
                <Box>
                    <Text>{item.gsaHeading}</Text>
                    <Text />
                </Box>
            ))}
        </Container>
    )
}

export default GSAContent