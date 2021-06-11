import React from "react"
import { Grid, Box, Text } from "@chakra-ui/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutTeamGrid = ({ team }) => {
    const { aboutImageRepeater: items } = team
    // const headshots = getImage(item.teamImage.localFile.childImageSharp)
    return (
        <Box className="aboutTeamWrapper" w="100">

            <Grid
                gap={0}
                gridTemplateColumns={[`repeat(4, 1fr)`]}
                gridTemplateRows={[`repeat(2, 1fr)`]}>
                {team.map(item => (
                    <Box p={0}>
                        <GatsbyImage image={getImage(item.teamImage.localFile.childImageSharp)} height={300} width={300} p={0} style={{ zIndex: `1` }}>
                        <Text style={{ 
                            color: `#FFC259`, 
                            fontSize: `17px`,
                            zIndex: `10` }} 
                            tag="h4">
                                {item.teamJobTitle}
                        </Text>
                        <Text style={{ 
                            textTransform: `uppercase`, 
                            fontWeight: `800`, 
                            fontSize: `25px` }} tag="h2">
                                {item.teamName}
                        </Text>
                        </GatsbyImage>
                    </Box>
                ))}
            </Grid>

        </Box>
    )
}

export default AboutTeamGrid