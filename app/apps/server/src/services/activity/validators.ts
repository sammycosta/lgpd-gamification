import { TRPCError } from "@trpc/server";
import { ActivityTypes } from "../../types/entities";
import { SimpleMatchingPair } from "../../types/service";

export function validateActivityExists(activity: any): asserts activity {
  if (!activity) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Atividade não existe.",
    });
  }
}

export function validateSupportedActivityType(
  typeId: number
): asserts typeId is ActivityTypes {
  if (!Object.values(ActivityTypes).includes(typeId)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Tipo de atividade inválido.",
    });
  }
}

export function validateUserActivityEditable(
  userActivity: { isCorrect?: boolean } | undefined
) {
  if (userActivity?.isCorrect) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Não é possível alterar atividades já corretas.",
    });
  }
}

// QNA RELATED VALIDATIONS

export function validateQnaAnswerType(answer: unknown, isMultiple: boolean) {
  if (isMultiple) {
    if (
      !Array.isArray(answer) ||
      answer.some((item) => typeof item !== "number")
    ) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message:
          "Resposta de múltipla escolha deve ser um array de IDs numéricos.",
      });
    }
  } else {
    if (typeof answer !== "number") {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Resposta de escolha única deve ser um ID numérico.",
      });
    }
  }
}

export function validateQnaCorrectOptions(
  qnaDetails: { isMultiple: boolean } | undefined,
  correctOptions: number[]
): asserts qnaDetails {
  if (!qnaDetails || correctOptions.length === 0) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Não foi possível encontrar respostas corretas para a questão.",
    });
  }

  if (!qnaDetails.isMultiple && correctOptions.length !== 1) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message:
        "Erro de dados: Questão de escolha única tem múltiplas respostas corretas no DB.",
    });
  }
}

// MATCHING VALIDATIONS

export function validateMatchingAnswerType(
  answer: unknown
): asserts answer is SimpleMatchingPair[] {
  if (!Array.isArray(answer)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Resposta de matching deve ser um array de pares.",
    });
  }

  if (
    answer.some(
      (item) =>
        typeof item !== "object" ||
        item === null ||
        typeof (item as any).concept !== "string" ||
        typeof (item as any).definition !== "string"
    )
  ) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message:
        "Cada item do array deve ser um objeto com 'concept' e 'definition' do tipo string.",
    });
  }
}
