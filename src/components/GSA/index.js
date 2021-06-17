import * as React from "react"

import { Container, Box, Text, Divider } from "@chakra-ui/layout"

const GSA = ({ content }) => {
    return(
        <Container my={15}>
            {content.map(item => (
                <Box m={5}>
                    <Text style={{ color: `black` }}>{item.gsaHeading}</Text>
                    <Text dangerouslySetInnerHTML={{ __html: item.gsaInfo }} />
                    <Divider />
                </Box>
            ))}
        </Container>
    )
}

export default GSA