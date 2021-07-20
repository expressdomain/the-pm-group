import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import * as React from "react"
import { FiMoon } from "react-icons/fi"
import Icon from "./Fragments/Icon"
import Link from "../Link/Link"
import { Feature } from "./Fragments/Feature"

const Features = ({ features, isAbout }) => {
  return (
    <Box
      as="section"
      maxW="1300px"
      mx="auto"
      py="12"
      px={{
        base: "6",
        md: "8",
      }}
    >
      {/* @TODO: Make this field come from backend */}
      {!isAbout && (
        <Heading
          as="h2"
          color="black"
          textAlign="center"
          mb={6}
          fontSize={["xl", "2xl", "3xl"]}
        >
          WHAT CAN WE DO FOR YOU?
        </Heading>
      )}
      <SimpleGrid
        columns={[1, 2, 2, 3]}
        spacingX="10"
        spacingY={{
          base: "8",
          md: "14",
        }}
        color="black"
      >
        {isAbout
          ? features.map(feature => (
              <Feature title={feature.title} icon={<FiMoon color={`black`} />}>
                <div
                  dangerouslySetInnerHTML={{ __html: feature.content }}
                  style={
                    feature.title === "Events, Promos and Fundraisers" && {
                      marginBottom: `30px`,
                      justifyContent: `center`,
                      textAlign: "left",
                    }
                  }
                />
              </Feature>
            ))
          : features.serviceEntry.map(feature => (
              <Feature
                title={feature.title}
                icon={<Icon title={feature.title} />}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: feature.content }}
                  style={
                    feature.title === "Events, Promos and Fundraisers" && {
                      marginBottom: `30px`,
                      justifyContent: `center`,
                      textAlign: "left",
                    }
                  }
                />
                {feature.title === "Events, Promos and Fundraisers" && (
                  <Link
                    to={features.ctaLink.url}
                    mt={10}
                    bg={`secondary`}
                    px={6}
                    py={4}
                    color={`black`}
                    mx={`auto`}
                    textAlign="center"
                    textTransform={`uppercase`}
                    _hover={{
                      background: `black`,
                      color: `secondary`,
                    }}
                  >
                    {features.ctaText}
                  </Link>
                )}
              </Feature>
            ))}
      </SimpleGrid>
    </Box>
  )
}

export default Features
