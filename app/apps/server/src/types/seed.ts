// Tipos auxiliares para inserção de dados

interface BaseActivity {
  name: string;
  type: number;
}

interface BaseQnaActivity extends BaseActivity {
  isMultiple: boolean;
  question: string;
  options: string[];
  points: number;
}

export interface QnaActivity extends BaseQnaActivity {
  answer: string;
}

export interface QnaMultipleActivity extends BaseQnaActivity {
  answers: string[];
}

export type ActivityToInsert = QnaActivity | QnaMultipleActivity;
