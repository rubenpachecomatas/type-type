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

const Typer = () => {
  const { wordsList } = useTyper();

  return (
    <div className=" max-w-2xl py-10 flex flex-col gap-5 items-start">
      <WordsSelect />
      <Card className="w-full">
        <CardHeader className="flex flex-col items-end">
          <CardTitle>Stats</CardTitle>
          <CardDescription>
            Type all the words to get your stats.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {wordsList.map(({ word }, i) => (
            <span key={i}>{word} </span>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between gap-5">
          <Input placeholder="Type here" />
          <Button>
            <RefreshCcw className="size-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Typer;
