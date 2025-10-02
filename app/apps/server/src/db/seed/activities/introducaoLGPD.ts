// TODO: Rever essa organização depois.

const QNA = 1; // Separar depois, possivelmente enum.

export const introducaoLGPDActivities = [
  {
    name: "Pergunta 1",
    type: QNA,
    isMultiple: false,
    question: "Qual dado se refere ao titular que não possa ser identificado?",
    options: ["Dado pessoal sensível", "Dado pessoal", "Dado anonimizado"],
    answer: "Dado anonimizado",
    points: 10,
  },
  {
    name: "Pergunta 2",
    type: QNA,
    isMultiple: false,
    question: "Teste B",
    options: ["A", "B", "C", "D"],
    answer: "C",
    points: 10,
  },
  {
    name: "Pergunta 3",
    type: QNA,
    isMultiple: false,
    question: "Teste C",
    options: ["A", "B", "C", "D"],
    answer: "C",
    points: 10,
  },
  {
    name: "Pergunta 4",
    type: QNA,
    isMultiple: true,
    question: "Teste D",
    options: ["A", "B", "C", "D"],
    answers: ["C", "B"],
    points: 10,
  },
];
