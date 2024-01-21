import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  const isDarkTheme = resolvedTheme === "dark";

  return {
    mounted,
    isDarkTheme,
    onThemeChange,
  };
};

export default useThemeSwitch;
