import { ActivityStatus } from "@/types/api";
import {
  ActivitiesInfoBase,
  ActivitiesQnaInfo,
  MatchingPairsByActivityId,
  QnaData,
  QnaOptionsByActivityId,
} from "@/types/service";

export function mapActivityStatus(isCorrect: boolean | null): ActivityStatus {
  if (isCorrect === null) return ActivityStatus.TODO;
  return isCorrect ? ActivityStatus.CORRECT : ActivityStatus.WRONG;
}

export function mapQnaData(
  activity: ActivitiesQnaInfo,
  qnaOptionsMap: QnaOptionsByActivityId
): QnaData {
  const rawOptions = qnaOptionsMap[activity.id] || [];
  const answers: number[] = [];

  const options = rawOptions.map((option) => {
    const { isCorrect, activityId, ...rest } = option;
    if (isCorrect) {
      answers.push(option.id);
    }
    return rest;
  });

  return {
    question: activity.question,
    options,
    answers,
    isMultiple: activity.isMultiple,
  };
}

export function mapMatchingData(
  activity: ActivitiesInfoBase,
  matchingPairsMap: MatchingPairsByActivityId
) {
  const rawMatchingPairs = matchingPairsMap[activity.id] || [];
  const concepts: string[] = [];
  const definitions: string[] = [];

  const matchingPairs = rawMatchingPairs.map((matchingPair) => {
    // Removendo ID, restaurar se no futuro eu ver necessidade
    const { id, activityId, ...rest } = matchingPair;
    concepts.push(matchingPair.concept);
    definitions.push(matchingPair.definition);
    return rest;
  });

  return {
    concepts,
    definitions,
    matchingPairs,
  };
}
