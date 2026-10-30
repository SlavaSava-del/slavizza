import { create, StateCreator } from "zustand";

interface ICategoryState {
  activeId: number;
  setActiveId: (activeId: number) => void;
}

const categoryStore: StateCreator<ICategoryState> = (set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
});

const useCategoryStore = create<ICategoryState>()(categoryStore);

export const useGetActiveId = () => useCategoryStore((state) => state.activeId);
export const setActiveCategoryId = (activeId: number) =>
  useCategoryStore.getState().setActiveId(activeId);
