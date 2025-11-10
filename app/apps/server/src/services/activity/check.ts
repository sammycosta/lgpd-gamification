import {
  getCorrectQnaOptionsByActivityId,
  getMatchingPairsByActivityId,
  getQnaDetailsByActivityId,
} from "../../repositories/activity";
import { ActivityTypes } from "../../types/entities";
import { arraysEqualIgnoreOrder } from "../../util/array";
import {
  validateMatchingAnswerType,
  validateQnaAnswerType,
  validateQnaCorrectOptions,
} from "./validators";

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

async function checkMatchingAnswer(activityId: number, answer: unknown) {
  const matchingPairs = await getMatchingPairsByActivityId(activityId);

  validateMatchingAnswerType(answer);

  return arraysEqualIgnoreOrder(answer, matchingPairs);
}

type CheckerFn = (activityId: number, answer: unknown) => Promise<boolean>;

export const checkers: Record<ActivityTypes, CheckerFn> = {
  [ActivityTypes.QNA]: checkQnAAnswer,
  [ActivityTypes.MATCHING]: checkMatchingAnswer,
};
