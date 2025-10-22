import { ActivityStatus } from "@/types/api";
import {
  ActivitiesQnaInfo,
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
