import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ISelectedQuestionIdAnswerIdMap {
  [questionId: number]: number;
}

interface IQuestionsStore {
  selectedQuestionIdAnswerIdMap: ISelectedQuestionIdAnswerIdMap;
  actions: IQuestionsActions;
}

interface IQuestionsActions {
  setSelectedQuestionIdAnswerIdMap: ({
    questionId,
    answerId,
  }: {
    questionId: number;
    answerId: number;
  }) => void;
  reset: () => void;
}

const initialState: Omit<IQuestionsStore, "actions"> = {
  selectedQuestionIdAnswerIdMap: {},
};

export const useQuestionsStore = create<IQuestionsStore>()(
  immer((set, get) => ({
    ...initialState,
    actions: {
      setSelectedQuestionIdAnswerIdMap: ({ questionId, answerId }) =>
        set((state) => {
          state.selectedQuestionIdAnswerIdMap = {
            ...get().selectedQuestionIdAnswerIdMap,
            [questionId]: answerId,
          };
        }),

      reset: () => {
        set(initialState);
      },
    },
  }))
);

export const useQuestionsStoreActions = () =>
  useQuestionsStore((state) => state.actions);
