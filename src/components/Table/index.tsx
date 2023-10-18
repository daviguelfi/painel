import React from 'react'
import {
  Container,
  TableHead,
  TableCellHead,
  TableContent,
  TableLine,
  TableCell,
  StatusColor
} from './styles'

import { ChevronLeftSm, ChevronRightSm } from '@dasa-health/alma-icons'
import { Tooltip } from '@dasa-health/alma-react'
import { Title } from '../Title'
import { SubTitle } from '../SubTitle'
import { BoxPagination } from '../../components'
import Button from '../Button'

import { Dados } from '../../Interfaces/IData'
import { getAge } from '../../Utils/getAge'
import { formatDate, convertedHour } from '../../Utils/formatDate'
import { convertGender } from '../../Utils/convertGender'

interface TableProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setModalData: any
  data: Dados
}

const pages = (totalPages: number) => {
  const pageList: Array<number> = []
  for (let count = 1; count <= totalPages; count++) {
    pageList.push(count)
  }
  return pageList
}

export const Table: React.FC<TableProps> = ({
  // setIsOpen,
  setCurrentPage,
  data,
  setModalData
}) => {
  return (
    <Container>
      <TableHead>
        <TableCellHead>
          <Title type='tableTitle'>Data</Title>
        </TableCellHead>

        <TableCellHead>
          <Title type='tableTitle'>Paciente</Title>
        </TableCellHead>
        <TableCellHead>
          <Title type='tableTitle'>Procedimento</Title>
        </TableCellHead>
        <TableCellHead>
          <Title type='tableTitle'>Médico responsável </Title>
        </TableCellHead>
        <TableCellHead>
          <Title type='tableTitle'>Situação do paciente</Title>
        </TableCellHead>
        <TableCellHead>
          <Title type='tableTitle'>Ações</Title>
        </TableCellHead>
      </TableHead>

      <TableContent>
        {data.schedules.map(data => (
          <TableLine key={data.id}>
            <TableCell>
              <Title type='title'>{convertedHour(data.dateSchedule)}</Title>
              <SubTitle>{formatDate(data.dateSchedule)}</SubTitle>
            </TableCell>
            <TableCell>
              <Title type='title'>{data.patient.name}</Title>
              <SubTitle>{`${data.patient.age} anos, ${convertGender(
                data.patient.gender
              )}`}</SubTitle>
            </TableCell>

            <TableCell center>
              <SubTitle>{data.procedure.name}</SubTitle>
            </TableCell>

            <TableCell>
              <Title type='title'>
                {data.healthProfessionals.speciality !== 'Anestesista'
                  ? data.healthProfessionals.name
                  : 'Não informado'}
              </Title>
              <SubTitle>
                {data.healthProfessionals.speciality !== 'Anestesista'
                  ? data.healthProfessionals.cellphone
                      .toString()
                      .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
                  : 'Não informado'}
              </SubTitle>
            </TableCell>

            <TableCell center>
              <Tooltip
                arrow
                message={`Termo de consentimento Planejamento cirúrgico`}
                offset={10}
                placement='top'
                title='Pendências'
                zIndex={9999}
              >
                <StatusColor status={false} />
              </Tooltip>
              <SubTitle> Com pendências</SubTitle>
            </TableCell>
            <TableCell>
              <Button
                action
                onClick={() => {
                  // setIsOpen(true);
                  setModalData(data)
                }}
              >
                <a href={`/checklist/${data.id}`}>Detalhes</a>
              </Button>
            </TableCell>
          </TableLine>
        ))}
      </TableContent>
      {/* <BoxPagination>
        <Button
          onClick={() => {
            setCurrentPage(data.number - 1)
          }}
          disabled={data.number === 0 ? true : false}
        >
          <ChevronLeftSm />
        </Button>

        {pages(data.totalPages).map((item, key) => {
          const current = item - 1 === data.number ? true : false
          return (
            <Button
              key={key}
              current={current}
              onClick={() => {
                setCurrentPage(item - 1)
              }}
            >
              {item}
            </Button>
          )
        })}
        <Button
          onClick={() => {
            setCurrentPage(data.number + 1)
          }}
          disabled={data.number + 1 === data.totalPages ? true : false}
        >
          <ChevronRightSm />
        </Button>
      </BoxPagination> */}
    </Container>
  )
}

export default Table
