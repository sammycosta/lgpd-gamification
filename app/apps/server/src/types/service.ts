import { QnaOption } from "./entities";

export interface ActivitiesInfoBase {
  id: number;
  name: string;
  typeId: number;
  points: number;
}

export interface ActivitiesQnaInfo extends ActivitiesInfoBase {
  isCorrect: boolean;
  question: string;
  isMultiple: boolean;
}

export type QnaOptionsByActivityId = Record<number, QnaOption[]>;

export interface QnaData {
  question: string;
  options: { id: number; text: string }[];
  answers: number[];
  isMultiple: boolean;
}
