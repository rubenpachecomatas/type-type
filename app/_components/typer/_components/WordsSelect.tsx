"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { WordsEnum } from "@/enumerations/WordsEnum";
import { useTyperStore } from "@/store/use-typer";

const WordsSelect = () => {
  const { updateWords, words } = useTyperStore((state) => state);

  return (
    <ToggleGroup onValueChange={updateWords} value={words} type="single">
      <ToggleGroupItem
        disabled={words === WordsEnum.TEN}
        value={WordsEnum.TEN}
        aria-label="Toggle 10"
      >
        10
      </ToggleGroupItem>
      <ToggleGroupItem
        disabled={words === WordsEnum.TWENTYFIVE}
        value={WordsEnum.TWENTYFIVE}
        aria-label="Toggle 25"
      >
        25
      </ToggleGroupItem>
      <ToggleGroupItem
        disabled={words === WordsEnum.FIFTY}
        value={WordsEnum.FIFTY}
        aria-label="Toggle 50"
      >
        50
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default WordsSelect;
