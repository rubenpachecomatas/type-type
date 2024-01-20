import { useTyperStore } from "@/store/use-typer";
import {
  FormEvent,
  KeyboardEvent,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { getMultipleRandom } from "../utils/Typer.utils";
import { WORDS_OPTIONS } from "../constants/Typer.constants";
import { Word } from "./types/word.type";

const useTyper = () => {
  const [value, setValue] = useState<string>("");
  const [wordsList, setWordsList] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<number>(0);

  const { words } = useTyperStore((state) => state);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === " ") return;
    setValue(e.currentTarget.value);
  };

  const verifyWord = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== " ") return;
    setWordsList((prev) =>
      prev.map((word, i) => {
        if (i === currentWord)
          return { ...word, isCorrect: value === word.word };
        else return word;
      })
    );
    setCurrentWord((prev) => prev + 1);
    setValue("");
  };

  useEffect(() => {
    setWordsList(
      getMultipleRandom(WORDS_OPTIONS, parseInt(words)).map((word) => ({
        word,
        isCorrect: null,
      }))
    );
  }, [words]);

  return {
    currentWord,
    value,
    onChange,
    verifyWord,
    wordsList,
  };
};

export default useTyper;
