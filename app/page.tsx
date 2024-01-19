import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="flex gap-1 text-2xl font-bold">
        <h1>Type</h1>
        <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-1">
          Type
        </p>
      </header>
      <div className="w-[500px] p-10 flex flex-col gap-5 items-start">
        <ToggleGroup value="10" type="single">
          <ToggleGroupItem value="10" aria-label="Toggle 10">
            10
          </ToggleGroupItem>
          <ToggleGroupItem value="25" aria-label="Toggle 25">
            25
          </ToggleGroupItem>
          <ToggleGroupItem value="50" aria-label="Toggle 50">
            50
          </ToggleGroupItem>
        </ToggleGroup>
        <Card className="w-full">
          <CardHeader className="flex flex-col items-end">
            <CardTitle>Stats</CardTitle>
            <CardDescription>
              Type all the words to get your stats.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dicta aspernatur atque dignissimos consequuntur quas quo, temporibus
            magnam alias perspiciatis dolorem, iure laboriosam eaque debitis
            fugiat mollitia fuga rerum aliquid.
          </CardContent>
          <CardFooter className="flex justify-between gap-5">
            <Input placeholder="Type here" />
            <Button>
              <RefreshCcw className="size-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
