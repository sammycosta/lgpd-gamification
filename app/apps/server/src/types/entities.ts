// Relacionado a dados do banco

export enum BadgeTypes {
  BRONZE = 1,
  SILVER = 2,
  GOLD = 3,
}

export enum ActivityTypes {
  QNA = 1,
}

export interface Module {
  id: number;
  name: string;
  points: number | null;
  maxPoints: number;
  userModulesId: number | null;
}

export interface QnaOption {
  id: number;
  activityId: number;
  text: string;
  isCorrect: boolean;
}
