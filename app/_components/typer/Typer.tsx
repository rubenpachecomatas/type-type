"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCcw } from "lucide-react";
import WordsSelect from "./_components/WordsSelect";
import useTyper from "./hooks/use-typer";
import TyperText from "./_components/TyperText";

const Typer = () => {
  const {
    currentWord,
    onChange,
    resetGame,
    stats,
    value,
    verifyWord,
    wordsList,
  } = useTyper();

  return (
    <div className="max-w-2xl w-full py-10 flex flex-col gap-5 items-start">
      <WordsSelect />
      <Card className="w-full">
        <CardHeader className="flex flex-col items-end text-right">
          <CardTitle>Stats</CardTitle>
          {stats ? (
            <CardDescription>
              WPM: {stats.wpm} ACC: {stats.acc}%
            </CardDescription>
          ) : (
            <CardDescription>
              Type all the words to get your stats.
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <TyperText active={currentWord} data={wordsList} />
        </CardContent>
        <CardFooter className="flex justify-between gap-5">
          <Input
            value={value}
            onChange={onChange}
            placeholder="Type here"
            onKeyDown={verifyWord}
          />
          <Button onClick={resetGame}>
            <RefreshCcw className="size-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Typer;
