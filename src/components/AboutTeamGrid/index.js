import React from "react"
import { Grid, Box, Text, Image } from "@chakra-ui/layout"
// import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
// import { getImage } from "gatsby-plugin-image"

const AboutTeamGrid = ({ team }) => {
    const { aboutImageRepeater: items } = team
    console.log({team})
    return(
        <Box className="aboutTeamWrapper" w="100">
            {team.map(item => (
                <Grid gap={0}>

                    <Box bg="#ffc529">
                    {/* <Image src={item.teamImage.localFile} alt={item.teamName} /> */}
                    <Text>{item.teamName}</Text>
                    </Box>
                    
                </Grid>
            ))}
        </Box>
    )
}

export default AboutTeamGrid