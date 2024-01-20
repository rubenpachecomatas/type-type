import { useTyperStore } from "@/store/use-typer";
import { useEffect, useState } from "react";
import { getMultipleRandom } from "../utils/Typer.utils";
import { WORDS_OPTIONS } from "../constants/Typer.constants";
import { Word } from "./types/word.type";

const useTyper = () => {
  const [wordsList, setWordsList] = useState<Word[]>([]);

  const { words } = useTyperStore((state) => state);

  useEffect(() => {
    setWordsList(
      getMultipleRandom(WORDS_OPTIONS, parseInt(words)).map((word) => ({
        word,
        isCorrect: null,
      }))
    );
  }, [words]);

  return {
    wordsList,
  };
};

export default useTyper;
