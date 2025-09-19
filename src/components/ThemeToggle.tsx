import { cn } from "@/libs/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // toggle theme
  const toggleTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkTheme(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkTheme(true);
    }
  };

  // if refreshed: checks theme in locstor
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkTheme(true);
    }
  }, []);

  return (
    <button
      className={cn(
        "bg-background flex items-center rounded-full p-1",
        "hover:scale-120 hover:shadow-2xl",
        "transition-all duration-300",
      )}
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <Moon size={24} className="text-secondary" />
      ) : (
        <Sun size={24} className="text-secondary" />
      )}
    </button>
  );
};

export { ThemeToggle };
