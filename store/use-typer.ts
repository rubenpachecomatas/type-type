import { WordsEnum } from "@/enumerations/WordsEnum";
import { create } from "zustand";

interface TyperStore {
  words: WordsEnum;
  updateWords: (words: WordsEnum) => void;
}

export const useTyperStore = create<TyperStore>((set) => ({
  words: WordsEnum.TEN,
  updateWords: (words) => set(() => ({ words })),
}));
