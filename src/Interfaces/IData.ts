import { Schedules } from './ISchedules'

export interface Dados {
  [x: string]: any
  schedules: [Schedules]
  totalPages: number
  totalElements: number
  number: number
  size: number
  numberOfElements: number
}
