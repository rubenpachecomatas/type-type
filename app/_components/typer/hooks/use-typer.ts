import { useTyperStore } from "@/store/use-typer";
import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getMultipleRandom } from "../utils/Typer.utils";
import { WORDS_OPTIONS } from "../constants/Typer.constants";
import { Word } from "./types/word.type";
import useStopwatch from "@/app/_hooks/useStopwatch";
import { Stats } from "./types/stats.type";

const useTyper = () => {
  const [value, setValue] = useState<string>("");
  const [wordsList, setWordsList] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<number>(0);
  const [stats, setStats] = useState<Stats | null>(null);

  const { words } = useTyperStore((state) => state);
  const { isRunning, handleStart, handlePause, handleReset } = useStopwatch();

  const finishGame = () => {
    const timer = handlePause();

    const correctWords = wordsList.filter(({ isCorrect }) => isCorrect).length;

    setStats({
      wpm: Math.floor(correctWords / (timer / 6000)),
      acc: (correctWords * 100) / wordsList.length,
    });

    resetGame();
  };

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    if (!isRunning) handleStart();

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

  const resetGame = useCallback(() => {
    setWordsList(
      getMultipleRandom(WORDS_OPTIONS, parseInt(words)).map((word) => ({
        word,
        isCorrect: null,
      }))
    );
    setValue("");
    setCurrentWord(0);

    handleReset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words]);

  useEffect(() => {
    resetGame();
  }, [words, resetGame]);

  useEffect(() => {
    if (currentWord >= parseInt(words)) finishGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsList]);

  return {
    currentWord,
    onChange,
    resetGame,
    stats,
    value,
    verifyWord,
    wordsList,
  };
};

export default useTyper;
