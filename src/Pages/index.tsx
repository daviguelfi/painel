import React, { useState, useEffect } from 'react'
import baseApi from './api/service'

import { TextInput, Table, BoxModal } from '../components'
import { LinkStandalone, Select as SelectDasa } from '@dasa-health/alma-react'

import { Container, TopBar, Navigation, HospitalSearch, Main, BoxInput } from './list'

import { Dados } from '../Interfaces/IData'
import { Schedules } from '../Interfaces/ISchedules'

const Home: React.FC = () => {
  const [dados, setDados] = useState<Dados | null>(null)
  const [modalData, setModalData] = useState<Schedules | null>(null)
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const getList = async () => {
      const resp = await fetch('http://localhost:3002/v1/schedules').then(data => data.json())
      setDados(resp)
    }

    getList()
  }, [])

  return (
    <Container data-testid="home-main-container">
      {modalData && (
        <BoxModal
          title='Detalhes da cirurgia'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={modalData}
          setData={setModalData}
        />
      )}

      <TopBar>
        <Navigation>
          <LinkStandalone href='#' label='Cirurgias' textAlign='right' variant='lg' />
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
        <BoxInput>
          <SelectDasa
            data-testid='list-component'
            label='Critério de busca:'
            variantSize='sm'
            defaultValue={{
              value: 'paciente',
              label: 'Paciente'
            }}
            options={[
              { value: 'paciente', label: 'Paciente' },
              { value: 'cirurgiao', label: 'Médico Cirurgião' },
              { value: 'anestesista', label: 'Anestesista' },
              { value: 'data', label: 'Data' }
            ]}
          />

          <TextInput variantSize='sm' type='search' name='search' placeholder='Busca' />
        </BoxInput>

        {dados && (
          <Table
            setCurrentPage={setCurrentPage}
            setIsOpen={setIsOpen}
            data={dados}
            setModalData={setModalData}
          />
        )}
      </Main>
    </Container>
  )
}

export default Home
