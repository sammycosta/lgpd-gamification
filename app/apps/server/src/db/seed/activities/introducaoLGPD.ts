// TODO: Rever essa organização depois.

import { ActivityTypes } from "@/types/entities";
import { ActivityToInsert } from "@/types/seed";

export const introducaoLGPDActivities: ActivityToInsert[] = [
  {
    name: "Pergunta 1",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: "Qual dado se refere ao titular que não possa ser identificado?",
    options: ["Dado pessoal sensível", "Dado pessoal", "Dado anonimizado"],
    answer: "Dado anonimizado",
    points: 10,
  },
  {
    name: "Pergunta 2",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: "Teste B",
    options: ["A", "B", "C", "D"],
    answer: "C",
    points: 10,
  },
  {
    name: "Pergunta 3",
    type: ActivityTypes.QNA,
    isMultiple: false,
    question: "Teste C",
    options: ["A", "B", "C", "D"],
    answer: "C",
    points: 10,
  },
  {
    name: "Pergunta 4",
    type: ActivityTypes.QNA,
    isMultiple: true,
    question: "Teste D",
    options: ["A", "B", "C", "D"],
    answers: ["C", "B"],
    points: 10,
  },
  {
    name: "Pergunta Matching",
    type: ActivityTypes.MATCHING,
    matchingPairs: [
      { concept: "A", definition: "a" },
      { concept: "B", definition: "b" },
      { concept: "C", definition: "c" },
      { concept: "D", definition: "d" },
    ],
    points: 10,
  },
];
