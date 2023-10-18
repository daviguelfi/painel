import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Button,
  LinkStandalone,
  Select as SelectDasa,
  Switch,
  CheckBox
} from '@dasa-health/alma-react'
import { useParams } from 'react-router-dom'

import {
  Container,
  TopBar,
  Navigation,
  HospitalSearch,
  Main,
  ModalContent,
  ModalLine,
  BoxContent,
  PatientDetailsContainer,
  PatientDetailsInfoContainer,
  CheckDetailsContainer,
  DetailsTitle,
  SwitchBox,
  TextAreaContainer,
  ModalButton,
  TitleModal,
  SubTitleModal,
  Footer
} from './styles'

import { SubTitle, Title, Modal } from '../../../components'
import { convertDate, formatHour } from '../../../Utils/formatDate'

import { navTokens } from '@dasa-health/alma-tokens'
import { Alert } from 'public'
import { Schedules } from 'src/Interfaces/ISchedules'

const PatientDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [info, setInfo] = useState<Schedules | null>(null)

  const params = useParams()
  useEffect(() => {
    const getChecklist = async () => {
      const resp = await fetch(`http://localhost:3002/v1/schedules/${params.id}`).then(data =>
        data.json()
      )
      console.log('resp', resp.schedules)
      console.log('resp123', resp)

      setInfo(resp)
    }

    getChecklist()
  }, [])

  return (
    <Container>
      <TopBar>
        <Navigation>
          <LinkStandalone href='/' label='Cirurgias' textAlign='right' variant='lg' />
        </Navigation>
        <HospitalSearch>
          <SelectDasa
            data-testid='list-component'
            label='Hospital:' //pode ser um label vazio, precisando ajustar somente a seta do dropdown
            variant='default'
            variantSize='sm'
            disabled
            defaultValue={{
              value: 'hsp',
              label: 'Hospital Santa Paula'
            }}
            options={[{ value: 'hsp', label: 'Hospital Santa Paula' }]}
          />
        </HospitalSearch>
      </TopBar>

      <Main>
        {info ? (
          <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <ModalContent>
                <img src={Alert} />

                <TitleModal>Descartar alterações</TitleModal>
                <SubTitleModal>
                  Ao sair dessa página, todas as informações não salvas serão perdidas.
                </SubTitleModal>
                <SubTitleModal>
                  Caso não queira perder as alterações feitas, clique em salvar.
                </SubTitleModal>
                <ModalButton>
                  <Button
                    variant='secondary'
                    style={{
                      borderColor: navTokens.ColorPaletteWhite,
                      width: '235px'
                    }}
                    color={`${navTokens.ColorInteractionAccent01} !important`}
                  >
                    Salvar
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    style={{ width: '235px' }}
                    backgroundColor={`${navTokens.ColorInteractionAccent01} !important`}
                  >
                    Sair
                  </Button>
                </ModalButton>
              </ModalContent>
            </Modal>

            <PatientDetailsContainer>
              <DetailsTitle>Identificação do paciente</DetailsTitle>
              <BoxContent>
                <ModalLine>
                  <PatientDetailsInfoContainer>
                    <Title type='title'>Nome paciente</Title>
                    <SubTitle>{info.patient.name}</SubTitle>
                  </PatientDetailsInfoContainer>

                  <PatientDetailsInfoContainer>
                    <Title type='title'>Idade</Title>

                    <SubTitle>{`${info.patient.age} anos`}</SubTitle>
                  </PatientDetailsInfoContainer>
                </ModalLine>

                <ModalLine>
                  <PatientDetailsInfoContainer>
                    <Title type='title'>Atendimento</Title>
                    <SubTitle>{info.procedure.idErp.toString()}</SubTitle>
                  </PatientDetailsInfoContainer>

                  <PatientDetailsInfoContainer>
                    <Title type='title'>Local Atual</Title>
                    <SubTitle>{info.hospital.idErp.toString()}</SubTitle>
                  </PatientDetailsInfoContainer>
                </ModalLine>
                <ModalLine>
                  <PatientDetailsInfoContainer>
                    <Title type='title'>Data / hora do procedimento</Title>
                    <SubTitle>{`${convertDate(info.dateSchedule)} `}</SubTitle>
                  </PatientDetailsInfoContainer>

                  <PatientDetailsInfoContainer>
                    <Title type='title'>Duração Prevista</Title>
                    <SubTitle>{`${formatHour(info.estimatedTime)}`}</SubTitle>
                  </PatientDetailsInfoContainer>
                </ModalLine>
                <ModalLine>
                  <PatientDetailsInfoContainer>
                    <Title type='title'>Procedimento</Title>
                    <SubTitle>{info.procedure.name.toUpperCase()}</SubTitle>
                  </PatientDetailsInfoContainer>
                </ModalLine>
                <ModalLine>
                  <PatientDetailsInfoContainer>
                    <Title type='title'>Lateralidade</Title>
                    <SubTitle>{info.procedure.side}</SubTitle>
                  </PatientDetailsInfoContainer>
                </ModalLine>
                <ModalLine>
                  <PatientDetailsInfoContainer>
                    <Title type='title'>Médico</Title>
                    <SubTitle>
                      {info.healthProfessionals.speciality !== 'Anestesista'
                        ? info.healthProfessionals.name
                        : 'Não se aplica'}
                    </SubTitle>
                  </PatientDetailsInfoContainer>
                </ModalLine>
                <ModalLine>
                  <PatientDetailsInfoContainer>
                    <Title type='title'>Anestesista</Title>
                    <SubTitle>
                      {info.healthProfessionals.speciality === 'Anestesista'
                        ? info.healthProfessionals.name
                        : 'Não se aplica'}
                    </SubTitle>
                  </PatientDetailsInfoContainer>

                  <PatientDetailsInfoContainer>
                    <Title type='title'>Tipo</Title>
                    <SubTitle>{info.anesthetistType || 'Não se aplica'}</SubTitle>
                  </PatientDetailsInfoContainer>
                </ModalLine>
              </BoxContent>
            </PatientDetailsContainer>
            <CheckDetailsContainer>
              <DetailsTitle>Preparação para procedimento</DetailsTitle>

              <BoxContent>
                <Title type='title'>Checklist do paciente</Title>
                <SwitchBox>
                  <Switch
                    backgroundColor={navTokens.ColorInteractionSelectActive}
                    color={navTokens.ColorInteractionSelectActive}
                    label={'Termo de consentimento'}
                    brand={false}
                  />
                </SwitchBox>
                <SwitchBox>
                  <Switch
                    backgroundColor={navTokens.ColorInteractionSelectActive}
                    color={navTokens.ColorInteractionSelectActive}
                    label={'Termo pré-anestésico'}
                  />
                </SwitchBox>
                <SwitchBox>
                  <Switch
                    backgroundColor={navTokens.ColorInteractionSelectActive}
                    color={navTokens.ColorInteractionSelectActive}
                    label={'Termo de COVID'}
                  />
                </SwitchBox>
                <SwitchBox>
                  <Switch
                    backgroundColor={navTokens.ColorInteractionSelectActive}
                    color={navTokens.ColorInteractionSelectActive}
                    label={'Planejamento cirúrgico'}
                  />
                </SwitchBox>
                <SwitchBox>
                  <Switch
                    backgroundColor={navTokens.ColorInteractionSelectActive}
                    color={navTokens.ColorInteractionSelectActive}
                    label={'Paciente pronto para procedimento'}
                  />
                </SwitchBox>
                <SwitchBox>
                  <Switch
                    backgroundColor={navTokens.ColorInteractionSelectActive}
                    color={navTokens.ColorInteractionSelectActive}
                    label={'Retirada de adornos'}
                  />
                </SwitchBox>
                <SwitchBox>
                  <Switch
                    backgroundColor={navTokens.ColorInteractionSelectActive}
                    color={navTokens.ColorInteractionSelectActive}
                    label={'Banho realizado'}
                  />
                </SwitchBox>
                <SwitchBox>
                  <Switch
                    backgroundColor={navTokens.ColorInteractionSelectActive}
                    color={navTokens.ColorInteractionSelectActive}
                    label={'Demarcação e lateralidade'}
                  />
                </SwitchBox>
                <CheckBox></CheckBox>
                <input type='checkbox'></input>
                <TextAreaContainer>
                  {/* <textarea
      placeholder="Digite sua mensagem"
      minLength={20}
      rows={5}
    ></textarea> */}
                </TextAreaContainer>
              </BoxContent>
            </CheckDetailsContainer>
          </>
        ) : (
          <h1>DEU RUIM</h1>
        )}
      </Main>
      <Footer>
        <Button
          variant='secondary'
          style={{
            borderColor: navTokens.ColorInteractionAccent01,
            width: '50px',
            marginRight: '10px'
          }}
          color={`${navTokens.ColorInteractionAccent01} !important`}
        >
          Voltar
        </Button>
        <Button
          onClick={() => setIsOpen(true)}
          style={{ width: '50px' }}
          backgroundColor={`${navTokens.ColorInteractionAccent01} !important`}
        >
          Salvar
        </Button>
      </Footer>
    </Container>
  )
}

export default PatientDetails
