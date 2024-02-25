import { create } from "zustand";

interface SubscriptionState {
  isYearly: boolean;
  setIsYearly: () => void;
}

export const useSubTypeStore = create<SubscriptionState>()((set) => ({
  isYearly: false,
  setIsYearly: () => set((state) => ({ isYearly: !state.isYearly })),
}));
