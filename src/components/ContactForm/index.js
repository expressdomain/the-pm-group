import { Box, Grid, Heading, Text } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import GravityFormForm from "gatsby-gravityforms-component"
import { useStaticQuery, graphql } from "gatsby"
import "./form.scss"

const ContactForm = ({ contactData, form }) => {
  const { allGfForm } = useStaticQuery(
    graphql`
      query {
        allGfForm {
          edges {
            node {
              ...GravityFormComponent
            }
          }
        }
      }
    `
  )
  const {
    body,
    title,
    position,
    blurb,
    email,
    franPhoto: image,
    name,
    phoneNumber,
  } = contactData

  const { formId } = form

  const handleError = ({ values, error, reset }) => {
    //handle error
    console.log(values)
    console.log(error)
    console.log(reset)
  }

  const handleSuccess = ({ values, reset, confirmations }) => {
    //handle success
    console.log(values)
    console.log(reset)
    console.log(confirmations)
  }

  return (
    <>
      <Heading
        as="h2"
        color={`black`}
        my={4}
        letterSpacing="tight"
        textAlign="center"
      >
        {title}
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        mx={`auto`}
      >
        <Box
          py={[6]}
          px={[12, 16, 18, 24]}
          display="grid"
          // placeItems="center"
        >
          {/* Placeholder Form */}
          <GravityFormForm
            id={formId}
            formData={allGfForm}
            // presetValues={{ input_1: 'special_value' }}
            lambda={process.env.LAMBDA_ENDPOINT}
            successCallback={handleSuccess}
            errorCallback={handleError}
          />
        </Box>
        <Box py={[6]} px={[12, 16, 18, 24]}>
          <Text mb={4}>{body}</Text>
          <GatsbyImage
            image={getImage(image.localFile.childImageSharp)}
            alt={`${name}, ${position}`}
          />
          <Text mt={2} fontStyle="italic">
            {`${name}, ${position}`}
          </Text>
          <Text
            fontSize="xl"
            color="black"
            textTransform="uppercase"
            fontWeight={`bold`}
          >
            Contact {name}
          </Text>
          <Text
            fontSize="xl"
            color="black"
            textTransform="uppercase"
            fontWeight={`bold`}
          >
            {`${blurb}`}
          </Text>
          <a
            style={{
              display: `grid`,
              minHeight: `48px`,
              alignItems: "center",
              justifyContent: "left",
            }}
            href={`tel:${phoneNumber}`}
          >
            {phoneNumber}
          </a>
          <a
            style={{
              display: `grid`,
              minHeight: `48px`,
              alignItems: "center",
              justifyContent: "left",
            }}
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </Box>
      </Grid>
    </>
  )
}

export default ContactForm
