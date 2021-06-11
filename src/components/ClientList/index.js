import React from "react"
import { Container, UnorderedList, ListItem } from "@chakra-ui/layout"

import Link from "../Link/Link"

const ClientList = ({ clients }) => {
  const { clientList: items } = clients

  return (
    <Container className="clientsWrapper">
      <UnorderedList>
        {clients.map(item => (
          <ListItem style={{ textTransform: `uppercase` }}>
            <Link
              to={item.link}
              style={{ color: `#959595`, lineHeight: `20px`, fontSize: `19px` }}
              _hover={{ color: "#ffc529" }}
            >
              {item.name}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  )
}

export default ClientList
