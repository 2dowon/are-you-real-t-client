import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IAuthenticationStore {
  isLogin: boolean;
  testerId: number;
  actions: IAuthenticationActions;
}

interface IAuthenticationActions {
  setIsLogin: (newValue: boolean) => void;
  setTesterId: (testerId: number) => void;
}

const initialState: Omit<IAuthenticationStore, "actions"> = {
  isLogin: false,
  testerId: -1,
};

export const useAuthenticationStore = create<IAuthenticationStore>()(
  immer((set) => ({
    ...initialState,
    actions: {
      setIsLogin: (newValue: boolean) =>
        set((state) => {
          state.isLogin = newValue;
        }),
      setTesterId: (testerId) =>
        set((state) => {
          state.testerId = testerId;
        }),
    },
  }))
);

export const useAuthenticationStoreActions = () =>
  useAuthenticationStore((state) => state.actions);
