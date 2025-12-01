import { Module } from "../../types/entities";

export function mapModule({
  id,
  name,
  points,
  maxPoints,
  userModulesId,
}: Module) {
  return {
    id,
    name,
    points: points ?? 0,
    maxPoints,
    locked: userModulesId == null,
    progressPercentage:
      maxPoints > 0 && points ? (points / maxPoints) * 100 : 0,
  };
}
