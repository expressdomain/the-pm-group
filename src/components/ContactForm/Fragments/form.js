import React from "react"
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Grid,
  Flex,
  Checkbox,
} from "@chakra-ui/react"
import { navigate } from "gatsby"

const Form = ({ title, subtitle }) => {
  // Checked State:
  const [checked, setChecked] = React.useState("No")

  const Label = ({ children, id, display }) => {
    return (
      <FormLabel
        position="absolute"
        top="-2.5"
        left="4"
        zIndex="3"
        color="black"
        bg="secondary"
        px={2}
        borderRadius="4px"
        htmlFor={id}
        display={display && display}
      >
        {children}
      </FormLabel>
    )
  }

  return (
    <Box mb={8} id="contact" w="90%" mx="auto">
      <Box textAlign="center" color="white">
        {title && (
          <Text
            fontSize={[`xl`, `2xl`, `3xl`]}
            fontWeight="bold"
            fontFamily={`var(--chakra-fonts-heading)`}
          >
            {title}
          </Text>
        )}
        {subtitle && <Text>{subtitle}</Text>}
      </Box>
      <Box>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          // onSubmit={handleSubmit}
          netlify-honeypot="bot-field"
          action="/thank-you/"
        >
          <input type="hidden" name="form-name" value="contact"></input>
          <input type="hidden" name="bot-field"></input>
          <Grid templateColumns={[`100%`]} gap={2}>
            <FormControl my={4} id="name">
              <Box position="relative">
                <Label id="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  pt={8}
                  pb={6}
                  bg="white"
                  isRequired
                  // {...register("name", {
                  //   required: "This is required",
                  //   minLength: {
                  //     value: 4,
                  //     message: "Minimum length should be 4",
                  //   },
                  // })}
                />
              </Box>
              {/* <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage> */}
            </FormControl>
          </Grid>
          <Grid templateColumns={[`100%`]} gap={2}>
            <FormControl my={4} id="business-name">
              <Box position="relative">
                <Label id="business-name">Business Name</Label>
                <Input
                  id="business-name"
                  type="text"
                  name="business-name"
                  pt={8}
                  pb={6}
                  bg="white"
                  isRequired
                />
              </Box>
              {/* <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage> */}
            </FormControl>
          </Grid>

          <Grid templateColumns={[`100%`, `repeat(2, 1fr)`]} gap={2}>
            <FormControl
              my={4}
              id="email"
              // isInvalid={errors.email && errors.email.message}
            >
              <Box>
                <Label id="email">E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  pt={8}
                  pb={6}
                  bg="white"
                  isRequired
                  // {...register("email", {
                  //   required: "This is required",
                  //   pattern: {
                  //     value: /\S+@\S+\.\S+/,
                  //     message: "Entered value does not match email format",
                  //   },
                  // })}
                />
              </Box>
              {/* <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage> */}
            </FormControl>
            <FormControl
              my={4}
              id="phone"
              // isInvalid={errors.phone && errors.phone.message}
            >
              <Box>
                <Label id="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  pt={8}
                  pb={6}
                  bg="white"
                  name="phone"
                  isRequired
                  // {...register("phone", {
                  //   required: "This is required",
                  //   pattern: {
                  //     value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                  //     message: "Entered value does not match phone format",
                  //   },
                  // })}
                />
              </Box>
              {/* <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage> */}
            </FormControl>
          </Grid>

          <FormControl
            my={4}
            id="message"
            // isInvalid={errors.message && errors.message.message}
          >
            <Box>
              <Label id="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                type="text"
                pt={8}
                pb={6}
                bg="white"
                minH={200}

                // {...register("message")}
              />
              {/* <FormErrorMessage>
                  {errors.message && errors.message.message}
                </FormErrorMessage> */}
            </Box>
          </FormControl>
          <Flex direction={["column", "row"]} justifyContent="space-between">
            <Flex color="black">
              <FormControl w="fit-content" mr={2} id="newsletter">
                <Label id="newsletter" display="none">
                  Subscribe to Newsletter?
                </Label>
                <Checkbox
                  name="newsletter"
                  size="lg"
                  value={checked}
                  onChange={e =>
                    e.target.checked ? setChecked("Yes") : setChecked("No")
                  }
                >
                  Subscribe to Newsletter?
                </Checkbox>
              </FormControl>
              {/* <FormControl w="fit-content">
                  <Label id="patient" display="none">
                    Patient
                  </Label>
                  <Checkbox name="patient" size="lg" {...register("patient")}>
                    Patient
                  </Checkbox>
                </FormControl> */}
            </Flex>
            <Box alignSelf={{ base: `center`, sm: `flex-start` }}>
              <Button
                mt={4}
                // isLoading={isSubmitting}
                type="submit"
                bg="secondary"
              >
                Submit
              </Button>
            </Box>
          </Flex>
        </form>
      </Box>
      {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{
            backgroundColor: "#00ADBC",
          }}
        /> */}
    </Box>
  )
}

export default Form
