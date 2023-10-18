import React from 'react'

import { Container, Box, BoxTitle, Close, BoxContent } from './styles'
import { Close as CloseButton } from '@dasa-health/alma-icons'
import { Overlay } from '@dasa-health/alma-react'

interface ModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {isOpen && <Overlay />}
      <Container isOpen={isOpen}>
        <Box>
          <BoxTitle>
            <Close onClick={() => setIsOpen(false)}>
              <CloseButton />
            </Close>
          </BoxTitle>

          <BoxContent>{children}</BoxContent>
        </Box>
      </Container>
    </>
  )
}

export default Modal
