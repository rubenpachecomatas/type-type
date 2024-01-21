import { cn } from "@/lib/utils";
import { Word } from "../hooks/types/word.type";
import { Skeleton } from "@/components/ui/skeleton";

interface TyperText {
  active: number;
  data: Word[];
}

const TyperText = ({ active, data }: TyperText) => (
  <>
    {data.length > 0 ? (
      data.map(({ word, isCorrect }, i) => (
        <span
          className={cn(
            active === i && " text-violet-500",
            isCorrect !== null &&
              (isCorrect ? "text-green-500" : "text-red-500")
          )}
          key={i}
        >
          {word}{" "}
        </span>
      ))
    ) : (
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="w-full h-[20px]" />
        <Skeleton className="w-20 h-[20px]" />
      </div>
    )}
  </>
);

export default TyperText;
