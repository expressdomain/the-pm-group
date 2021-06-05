import { Box, Grid, Heading, Text } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import GravityFormForm from "gatsby-gravityforms-component"
import { useStaticQuery, graphql } from "gatsby"

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

  const { formId, formFields, confirmations, button, title: formTitle } = form

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
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
      mx={`auto`}
    >
      <Box>
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
      <Box py={[12, 18, 20, 24]} px={[12, 16, 18, 24]} bg={`#f0f0f0`}>
        <Heading as="h2" color={`black`} mb={4} letterSpacing="tight">
          {title}
        </Heading>
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
        <a style={{ display: `block` }} href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
        <a style={{ display: `block` }} href={`mailto:${email}`}>
          {email}
        </a>
      </Box>
    </Grid>
  )
}

export default ContactForm
