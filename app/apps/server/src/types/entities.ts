// Relacionado a dados do banco

export enum BadgeTypes {
  BRONZE = 1,
  SILVER = 2,
  GOLD = 3,
}

// TODO: Activities type

export interface Module {
  id: number;
  name: string;
  points: number | null;
  maxPoints: number;
  userModulesId: number | null;
}
