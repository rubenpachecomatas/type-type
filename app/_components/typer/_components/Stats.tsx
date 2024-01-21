import { CardDescription, CardTitle } from "@/components/ui/card";
import { Stats } from "../hooks/types/stats.type";

interface StatsProps {
  stats: Stats | null;
}

const Stats = ({ stats }: StatsProps) => (
  <>
    <CardTitle>Stats</CardTitle>
    {stats ? (
      <CardDescription>
        WPM: {stats.wpm} ACC: {stats.acc}%
      </CardDescription>
    ) : (
      <CardDescription>Type all the words to get your stats.</CardDescription>
    )}
  </>
);

export default Stats;
