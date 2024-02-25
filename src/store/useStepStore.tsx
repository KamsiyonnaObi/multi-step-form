import { create } from "zustand";

interface StepState {
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
  incStep: () => void;
  decStep: () => void;
}

export const useStepStore = create<StepState>()((set) => ({
  currentStep: 1,
  setCurrentStep: (newStep: number) => set({ currentStep: newStep }),
  incStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  decStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
}));
