"use client";

import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import useThemeSwitch from "./hooks/useThemeSwitch";

export const ThemeSwitch = () => {
  const { isDarkTheme, onThemeChange, mounted } = useThemeSwitch();

  if (!mounted) return null;

  return (
    <div className="flex gap-2 absolute top-8 right-8 animate-fade-in">
      <Sun />
      <Switch aria-label="Switch theme" checked={isDarkTheme} onCheckedChange={onThemeChange} />
      <Moon />
    </div>
  );
};
