// we are creating a custom hook to manage the state of the mobile sidebar, and to provide a function to toggle it
import { create } from "zustand";

interface MobileSidebarStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

// Create the store using Zustand
export const useMobileSidebarStore = create<MobileSidebarStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
