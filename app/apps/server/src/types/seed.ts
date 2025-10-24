// Tipos auxiliares para inserção de dados

import { SimpleMatchingPair } from "./service";

interface BaseActivity {
  name: string;
  type: number;
  points: number;
}

export interface BaseQnaActivity extends BaseActivity {
  isMultiple: boolean;
  question: string;
  options: string[];
}

export interface QnaActivity extends BaseQnaActivity {
  answer: string;
}

export interface QnaMultipleActivity extends BaseQnaActivity {
  answers: string[];
}

export interface MatchingActivity extends BaseActivity {
  matchingPairs: SimpleMatchingPair[];
}

export type ActivityToInsert =
  | QnaActivity
  | QnaMultipleActivity
  | MatchingActivity;
