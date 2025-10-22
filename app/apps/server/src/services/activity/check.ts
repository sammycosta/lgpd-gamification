import {
  getCorrectQnaOptionsByActivityId,
  getQnaDetailsByActivityId,
} from "@/repositories/activity";
import { ActivityTypes } from "@/types/entities";
import { arraysEqualIgnoreOrder } from "@/util/array";
import { validateQnaAnswerType, validateQnaCorrectOptions } from "./validators";

async function checkQnAAnswer(activityId: number, answer: unknown) {
  const qnaDetails = await getQnaDetailsByActivityId(activityId);
  const correctQnaOptions = await getCorrectQnaOptionsByActivityId(activityId);
  const correctOptions = correctQnaOptions.map((value) => value.id);

  validateQnaCorrectOptions(qnaDetails, correctOptions);
  validateQnaAnswerType(answer, qnaDetails.isMultiple);

  if (qnaDetails.isMultiple) {
    return arraysEqualIgnoreOrder(answer as number[], correctOptions);
  }

  return answer === correctOptions[0];
}

type CheckerFn = (activityId: number, answer: unknown) => Promise<boolean>;

export const checkers: Record<ActivityTypes, CheckerFn> = {
  [ActivityTypes.QNA]: checkQnAAnswer,
};
