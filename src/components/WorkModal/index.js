import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Box,
} from "@chakra-ui/react"
import { AiFillPlayCircle } from "react-icons/ai"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const WorkModal = ({ title, id, videoLink, isVideo, image, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const videoId = videoLink && videoLink.split("v=")

  if (isVideo) {
    return (
      <>
        <IconButton
          fontSize={`6xl`}
          aria-label={title}
          icon={<AiFillPlayCircle />}
          onClick={onOpen}
          ref={btnRef}
          id={id}
          width={`fit-content`}
          height={`fit-content`}
          color={`secondary`}
          variant={`ghost`}
        />
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          opacity={1}
          initialFocusRef={btnRef}
          finalFocusRef={btnRef}
          key={id}
          aria-label={id}
        >
          <ModalOverlay background={`blackAlpha.400`} />
          <ModalContent
            zIndex={99999999999999}
            opacity={1}
            style={{ opacity: `100%!important` }}
            width={`fit-content`}
            aria-label={id}
            w={800}
            maxWidth="100%"
          >
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <iframe
                width="100%"
                height="400px"
                src={`https://www.youtube.com/embed/${videoId[1]}?&autoplay=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  } else {
    return (
      <>
        <Box
          onClick={onOpen}
          ref={btnRef}
          id={id}
          display="grid"
          cursor="pointer"
        >
          {children}
        </Box>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          opacity={1}
          initialFocusRef={btnRef}
          finalFocusRef={btnRef}
          key={id}
          size="xl"
          aria-label={id}
        >
          <ModalOverlay background={`blackAlpha.600`} />
          <ModalContent
            zIndex={9999999999999999}
            opacity={1}
            style={{ opacity: `100%!important` }}
            width={`fit-content`}
            aria-label={title}
            maxWidth="100%"
            maxHeight="100vh"
          >
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <GatsbyImage image={getImage(image)} alt={title} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
}

export default WorkModal
