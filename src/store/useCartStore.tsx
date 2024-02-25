import { create } from "zustand";

interface Plan {
  id: number;
  name: string;
  price: number;
  image?: string;
}

interface CartState {
  plan: Plan;
  setPlan: (plan: Plan) => void;
  addOns: Plan[]; // array of add-ons
  setAddOns: (plan: Plan) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  plan: { id: 1, name: "Arcade", price: 9 },
  setPlan: (newPlan: Plan) => set({ plan: newPlan }),
  addOns: [],
  setAddOns: (newPlan: Plan) =>
    set((state) => {
      // Check if the item ID already exists in the store
      const existingIndex = state.addOns.findIndex((i) => i.id === newPlan.id);
      if (existingIndex !== -1) {
        // Remove the existing item from the array
        const updatedItems = [...state.addOns];
        updatedItems.splice(existingIndex, 1);
        return { addOns: updatedItems };
      } else {
        // Add the new item to the array
        return { addOns: [...state.addOns, newPlan] };
      }
    }),
}));
