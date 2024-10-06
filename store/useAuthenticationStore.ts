import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IAuthenticationStore {
  testerMBTI?: string;
  testerNextMBTI?: string;
  testerId?: string;
  actions: IAuthenticationActions;
}

interface IAuthenticationActions {
  setTesterMBTI: (testerMBTI: string) => void;
  setTesterNextMBTI: (testerNextMBTI: string) => void;
  setTesterId: (testerId: string) => void;
  reset: () => void;
}

const initialState: Omit<IAuthenticationStore, "actions"> = {
  testerId: undefined,
  testerMBTI: undefined,
  testerNextMBTI: undefined,
};

export const useAuthenticationStore = create<IAuthenticationStore>()(
  immer((set) => ({
    ...initialState,
    actions: {
      setTesterMBTI: (testerMBTI: string) =>
        set((state) => {
          state.testerMBTI = testerMBTI;
        }),
      setTesterNextMBTI: (testerNextMBTI: string) =>
        set((state) => {
          state.testerNextMBTI = testerNextMBTI;
        }),
      setTesterId: (testerId) =>
        set((state) => {
          state.testerId = testerId;
        }),
      reset: () => {
        set(initialState);
      },
    },
  }))
);

export const useAuthenticationStoreActions = () =>
  useAuthenticationStore((state) => state.actions);
