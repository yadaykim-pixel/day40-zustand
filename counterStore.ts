import { create } from "zustand";

type CounterStore = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,

  // TODO 1. 현재 count를 기준으로 1 증가시키세요.
  increase: () => set((state) => ({ count: state.count + 1 })),

  // TODO 2. 현재 count를 기준으로 1 감소시키세요.
  decrease: () => set((state) => ({ count: state.count - 1 })),

  // TODO 3. count를 0으로 변경하세요.
  reset: () => set({ count: 0 }),
}));