import { Box, Grid, Heading, Text, Container } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import GravityFormForm from "gatsby-gravityforms-component"
import { useStaticQuery, graphql, navigate } from "gatsby"
import "./form.scss"

const ContactForm = ({ contactData, form, isContactPage }) => {
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
    navigate(`/thank-you`)
  }

  return (
    <>
      <Heading
        as="h2"
        color={`black`}
        my={4}
        letterSpacing="tight"
        textAlign="center"
        fontSize={["xl","2xl","3xl"]}
      >
        {title}
      </Heading>
      {!isContactPage && (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          mx={`auto`}
        >
          {/* { isContactPage ? 'true' : 'false' } */}
          <Box
            py={[6]}
            px={[12, 16, 18, 24]}
            display="grid"
            // placeItems="center"
            color="black"
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
            <Text mb={4} color="black">{body}</Text>
            <GatsbyImage
              image={getImage(image.localFile.childImageSharp)}
              alt={`${name}, ${position}`}
            />
            <Text className="contact-name-position" mt={2} fontStyle="italic">
              {`${name}, ${position}`}
            </Text>
            <Text
              className="contact-name"
              fontSize="xl"
              color="black"
              textTransform="uppercase"
              fontWeight={`bold`}
            >
              Contact {name}
            </Text>
            <Text
              className="contact-blurb"
              fontSize="xl"
              color="black"
              textTransform="uppercase"
              fontWeight={`bold`}
            >
              {`${blurb}`}
            </Text>
            <a
              className="contact-phone"
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
              className="contact-email"
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
      )}
      {isContactPage && (
        <Container className="contact-page-container">
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
              className="contact-page-form"
              py={[6]}
              px={[12, 16, 18, 10]}
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
            <Box py={[6]} px={[12, 16, 18, 10]}>
              <Text mb={10}>{body}</Text>
              <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                ]}
              >
                <Box>
                  <GatsbyImage
                    image={getImage(image.localFile.childImageSharp)}
                    alt={`${name}, ${position}`}
                  />
                </Box>
                <Box pl={5}>
                  <Text
                    className="contact-name-position"
                    mt={2}
                    fontStyle="italic"
                  >
                    {`${name}, ${position}`}
                  </Text>
                  <Text
                    className="contact-name"
                    fontSize="xl"
                    color="black"
                    textTransform="uppercase"
                    fontWeight={`bold`}
                  >
                    Contact {name}
                  </Text>
                  {/* <Text
                  className="contact-blurb"
                  fontSize="xl"
                  color="black"
                  textTransform="uppercase"
                  fontWeight={`bold`}
                >
                  {`${blurb}`}
                </Text> */}
                  <a
                    className="contact-phone"
                    style={{
                      display: `grid`,
                      minHeight: `38px`,
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                    href={`tel:${phoneNumber}`}
                  >
                    {phoneNumber}
                  </a>
                  <a
                    className="contact-email"
                    style={{
                      display: `grid`,
                      minHeight: `38px`,
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Box display="grid" placeItems="center">
            <iframe
              style={{ width: `100%`, maxWidth: `700px`, height: `600px` }}
              loading="lazy"
              allowFullScreen
              title="The PM Group Location"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCplYGQxK6fmSMGj4x-alx-IeAC_cnnOgI&q=The+PM+Group+7550+I-10+STE+510+San+Antonio+TX+78229"
            />
          </Box>
        </Container>
      )}
    </>
  )
}

export default ContactForm
