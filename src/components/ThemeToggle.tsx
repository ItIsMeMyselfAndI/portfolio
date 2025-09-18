import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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
    <button className="bg-background" onClick={toggleTheme}>
      click me boii
      {isDarkTheme ? "dark" : "light"}
    </button>
  );
};

export { ThemeToggle };
