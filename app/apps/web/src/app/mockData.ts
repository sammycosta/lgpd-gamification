import { ActivityStatus, ActivityType, type Activity } from '@/types/api'

export const MODULE_DATA = [
  {
    id: 1,
    name: 'Introdução à LGPD',
    locked: false,
    maxPoints: 100,
    points: 70
  },
  {
    id: 2,
    name: 'Conceitos Básicos',
    locked: false,
    maxPoints: 120,
    points: 120
  },
  {
    id: 3,
    name: 'Operações de Tratamento',
    locked: false,
    maxPoints: 150,
    points: 135
  },
  {
    id: 4,
    name: 'Princípios de Tratamento',
    locked: true,
    maxPoints: 100,
    points: 0
  },
  {
    id: 5,
    name: 'Inventário de Dados I',
    locked: true,
    maxPoints: 130,
    points: 0
  },
  {
    id: 6,
    name: 'Inventário de Dados II',
    locked: true,
    maxPoints: 160,
    points: 0
  },
  {
    id: 7,
    name: 'Ciclo de Vida do Dado',
    locked: true,
    maxPoints: 140,
    points: 0
  }
]

export interface ActivitiesByModuleIndex {
  [key: number]: Activity[]
}

export const ATIVIDADE_BY_MODULE_INDEX_DATA: ActivitiesByModuleIndex = {
  1: [
    {
      id: 1,
      name: 'Pergunta 1',
      type: ActivityType.QEA,
      status: ActivityStatus.WRONG,
      data: {
        question:
          'Qual dado se refere ao titular que não possa ser identificado?',
        options: [
          {
            id: 1,
            text: 'Dado pessoal sensível'
          },
          {
            id: 2,
            text: 'Dado pessoal'
          },
          {
            id: 3,
            text: 'Dado anonimizado'
          }
        ],
        answer: 3
      }
    },
    {
      id: 2,
      name: 'Pergunta 2',
      type: ActivityType.QEA,
      status: ActivityStatus.RIGHT,
      data: {
        question: 'Teste B',
        options: [
          {
            id: 1,
            text: 'A'
          },
          {
            id: 2,
            text: 'B'
          },
          {
            id: 3,
            text: 'C'
          }
        ],
        answer: 2
      }
    },
    {
      id: 3,
      name: 'Pergunta 3',
      type: ActivityType.QEA,
      status: ActivityStatus.TODO,
      data: {
        question: 'Teste C',
        options: [
          {
            id: 1,
            text: 'A'
          },
          {
            id: 2,
            text: 'B'
          },
          {
            id: 3,
            text: 'C'
          }
        ],
        answer: 1
      }
    }
  ]
}
