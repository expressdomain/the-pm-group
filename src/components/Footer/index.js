import {
  Box,
  Stack,
  StackDivider,
  Text,
  ButtonGroup,
  IconButton,
  Heading,
} from "@chakra-ui/react"
import * as React from "react"
import Logo from "../../SVG/Logo"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"
import Link from "../Link/Link"
// import { Copyright } from './Copyright'
// import { LinkGrid } from './LinkGrid'
// import { Logo } from './Logo'
// import { SocialMediaLinks } from './SocialMediaLinks'
// import { SubscribeForm } from './SubscribeForm'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        seo {
          schema {
            companyName
          }
          social {
            facebook {
              url
            }
            youTube {
              url
            }
            linkedIn {
              url
            }
          }
        }
      }
      wpMenu(locations: { eq: FOOTER }) {
        menuItems {
          nodes {
            path
            label
          }
        }
      }
    }
  `)

  const menuItems = data.wpMenu.menuItems.nodes
  const companyName = data.wp.seo.schema.companyName
  const facebookLink = data.wp.social?.facebook.url
  const linkedInLink = data.wp.social?.linkedIn.url
  const youTubeUrl = data.wp.sprite?.youtube.url
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{
        base: "4",
        md: "8",
      }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          spacing={{
            base: "10",
            lg: "28",
          }}
        >
          <Box flex="1">
            <Logo />
            <Text mt={4}>
              The PM Group is the largest Advertising & Marketing Agency in San
              Antonio and South Texas. We look forward to connecting with you.
            </Text>
          </Box>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={{
              base: "10",
              md: "20",
            }}
          >
            <Stack>
              <Heading
                as="h4"
                fontSize="sm"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Address
              </Heading>
              <Link
                to="https://goo.gl/maps/fFzVN2pVuHXoVrEd6"
                aria-label="Address"
              >
                7550 Interstate 10 West, Suite 510
                <br />
                San Antonio, TX 78229
              </Link>
            </Stack>
            <Stack>
              <Heading
                as="h4"
                fontSize="sm"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Get In Touch
              </Heading>
              <Link to="tel:210.490.2554" aria-label="Phone Number">
                210.490.2554
              </Link>
            </Stack>
            <Stack>
              {menuItems.map(item => (
                <Link to={item.path} aria-label={item.label}>
                  {item.label}
                </Link>
              ))}
            </Stack>

            {/* <LinkGrid
                  spacing={{
                    base: '10',
                    md: '20',
                    lg: '28',
                  }}
                  flex="1"
                />
                <SubscribeForm
                  width={{
                    base: 'full',
                    md: 'sm',
                  }}
                /> */}
          </Stack>
        </Stack>
        <Stack
          direction={{
            base: "column-reverse",
            md: "row",
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} {companyName} All rights reserved.
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href={facebookLink}
              aria-label="Facebook"
              icon={<FaFacebook fontSize="20px" />}
            />
            <IconButton
              as="a"
              href={linkedInLink}
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton
              as="a"
              href={youTubeUrl}
              aria-label="YouTube"
              icon={<FaYoutube fontSize="20px" />}
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer
