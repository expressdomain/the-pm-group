import React from "react"
import { Container, Grid, Box, Text } from "@chakra-ui/layout"

const AboutIconGrid = ({ iconGrid }) => {
    const { aboutEntry: items } = iconGrid

    return(
        <Container className="aboutIconWrapper">
            <Grid gridTemplateColumns="repeat(3, 1fr)" gap={6}>
            {iconGrid.map(item => (
                <Box>
                    <Text tag="h5" style={{ 
                        color: `#4d4d4d`, 
                        fontSize: `19px`, 
                        lineHeight: `26px`, 
                        fontWeight: `400`, 
                        letterSpacing: `-0.4px`, 
                        textTransform: `uppercase` }}
                        mb={15}>
                            {item.title}
                        </Text>
                    <Text>{item.content}</Text>
                </Box>
            ))}        
            </Grid>

        </Container>
    )
}

export default AboutIconGrid