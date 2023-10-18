import React from 'react'

import { Container, Box, BoxTitle, Close, BoxContent, ModalLine, ModalContent } from './styles'

import { Overlay } from '@dasa-health/alma-react'

import { SubTitle } from '../SubTitle'
import { Title } from '../Title'

import { Schedules } from '../../Interfaces/ISchedules'
import { getAge } from '../../Utils/getAge'
import { formatDate } from '../../Utils/formatDate'

interface ModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setData: React.Dispatch<React.SetStateAction<Schedules | null>>
  title: string
  data: Schedules
}

export const BoxModal: React.FC<ModalProps> = ({ isOpen, setIsOpen, title, data, setData }) => {
  return (
    <>
      {isOpen && <Overlay />}
      <Container isOpen={isOpen}>
        <Box>
          <BoxTitle>
            <Title type='title'>{title}</Title>
            <Close
              onClick={() => {
                setIsOpen(false)
                setData(null)
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                <path d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z' />
              </svg>
            </Close>
          </BoxTitle>

          <BoxContent>
            {/* <ModalLine>
              <ModalContent>
                <Title type='title'>Nome paciente</Title>
                <SubTitle>{data?.patient?.name}</SubTitle>
              </ModalContent>

              <ModalContent>
                <Title type='title'>Idade</Title>
                <SubTitle>{`${getAge(data?.patient?.birthDate)} anos`}</SubTitle>
              </ModalContent>
            </ModalLine>

            <ModalLine>
              <ModalContent>
                <Title type='title'>Atendimento</Title>
                <SubTitle>{data?.procedure?.idErp.toString()}</SubTitle>
              </ModalContent>

              <ModalContent>
                <Title type='title'>Local Atual</Title>
                <SubTitle>{data?.hospital?.name}</SubTitle>
              </ModalContent>
            </ModalLine>
            <ModalLine>
              <ModalContent>
                <Title type='title'>Data / hora do procedimento</Title>
                <SubTitle>{`${formatDate(data?.dateSchedule)} (NAO RETORNA HORA)`}</SubTitle>
              </ModalContent>

              <ModalContent>
                <Title type='title'>Duração Prevista</Title>
                <SubTitle>{`${data?.estimatedTime.toString()} (VALIDAR COMO RETORNAR MINUTOS)`}</SubTitle>
              </ModalContent>
            </ModalLine>
            <ModalLine>
              <ModalContent>
                <Title type='title'>Procedimento</Title>
                <SubTitle>{data?.procedure.name}</SubTitle>
              </ModalContent>
            </ModalLine>
            <ModalLine>
              <ModalContent>
                <Title type='title'>Lateralidade</Title>
                <SubTitle>{`${data?.procedure.side} (VALIDAR RETORNO API)`}</SubTitle>
              </ModalContent>
            </ModalLine>
            <ModalLine>
              {data?.healthProfessionals
                .filter(value => value.speciality !== 'Médico Anestesiologista')
                .map((medicos, key) => (
                  <ModalContent key={key}>
                    <Title type='title'>Médico</Title>
                    <SubTitle>{medicos.name}</SubTitle>
                  </ModalContent>
                ))}
            </ModalLine>
            <ModalLine>
              {data?.healthProfessionals
                .filter(value => value.speciality === 'Médico Anestesiologista')
                .map((medicos, key) => (
                  <ModalContent key={key}>
                    <Title type='title'>Anestesista</Title>
                    <SubTitle>{medicos.name}</SubTitle>
                  </ModalContent>
                ))}
            </ModalLine> */}
          </BoxContent>
        </Box>
      </Container>
    </>
  )
}

export default BoxModal
