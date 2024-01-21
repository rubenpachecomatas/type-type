"use client";

import { Button } from "@/components/ui/button";
import { GITHUB } from "@/constants/urls";
import { Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => (
  <footer className="absolute flex gap-2 bottom-8 right-8">
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a aria-label="Github" target="_blank" href={GITHUB}>
            <Button aria-label="Github" size="icon" variant="ghost">
              <Github />
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Star on Github!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </footer>
);

export default Footer;
