import React from "react"
import { Container, UnorderedList, ListItem, Grid } from "@chakra-ui/layout"

import Link from "../Link/Link"

const ClientList = ({ clients }) => {
  return (
    <Container className="clientsWrapper">
      <Grid
        className="clientListGrid"
        templateColumns={[`repeat(1, 1fr)`, `repeat(2, 1fr)`, `repeat(3, 1fr)`]}
        gap={5}
      >
        {clients.map(item => (
          <UnorderedList style={{ listStyleType: `none` }}>
            <ListItem style={{ textTransform: `uppercase` }}>
              {item.name && item.link && (
                <Link
                  to={item.link}
                  _hover={{ color: "#ffc529" }}
                  style={{
                    color: `#959595`,
                    lineHeight: `20px`,
                    fontSize: `17px`,
                  }}
                >
                  {item.name}
                </Link>
              )}
            </ListItem>
          </UnorderedList>
        ))}
      </Grid>
    </Container>
  )
}

export default ClientList
