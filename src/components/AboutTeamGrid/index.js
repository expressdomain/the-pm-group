import React from "react"
import { Grid, Box, Text } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Fade } from "react-reveal"
import { navigate } from "gatsby"

const AboutTeamGrid = ({ team }) => {
  // const headshots = getImage(item.teamImage.localFile.childImageSharp)
  return (
    <Box className="aboutTeamWrapper" w="100">
      <Grid gap={0} gridTemplateColumns={[`repeat(2, 1fr)`, `repeat(4, 1fr)`]}>
        {team.map(item => (
          <Box
            p={0}
            position="relative"
            as="button"
            onClick={() => {
              item.teamLink && item.teamLink.url && navigate(item.teamLink.url)
            }}
          >
            {console.log(item)}
            <GatsbyImage
              image={getImage(item.teamImage.localFile.childImageSharp)}
              height={300}
              width={300}
              p={0}
              alt={item.teamName || `The PM Group`}
            />

            <Box
              px={4}
              position="absolute"
              bottom={0}
              py={item.teamJobTitle && 2}
              bgGradient="linear(to-t, blackAlpha.900, blackAlpha.700)"
              w="100%"
            >
              <Fade bottom>
                <Text color="secondary" fontSize={["small", "medium"]} tag="h4">
                  {item.teamJobTitle}
                </Text>
                <Text
                  textTransform="uppercase"
                  fontWeight={800}
                  fontSize={["xl", "2xl"]}
                  tag="h2"
                  color="white"
                >
                  {item.teamName}
                </Text>
              </Fade>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default AboutTeamGrid
