import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // toggle theme
  const toggleTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
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
    <div className="flex items-center space-x-2">
      <Switch id="theme" checked={isDarkTheme} onClick={toggleTheme} />
      <Label htmlFor="theme">
        {isDarkTheme ? (
          <Moon size={24} className="text-primary" />
        ) : (
          <Sun size={24} className="text-secondary" />
        )}
      </Label>
    </div>
  );
};

export { ThemeToggle };
