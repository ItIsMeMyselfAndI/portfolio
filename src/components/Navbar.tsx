import { cn } from "@/libs/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isSrolledDown, setIsScrolledDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={cn(
        "fixed h-auto top-0 z-100 p-5 sm:p-10",
        "text-xl font-bold text-primary",
        "w-screen flex flex-row justify-between items-center",
        isSrolledDown ? "bg-background/80 shadow-xs" : "bg-background/80",
      )}
    >
      {/* logo */}
      <a
        href="#hero"
        className={cn("hover:scale-110", "transition-all duration-300")}
      >
        <span className="text-foreground">My</span>
        Porfolio
      </a>

      <div className="ml-auto pr-8">
        <ThemeToggle />
      </div>

      {/* desktop nav */}
      <div className={cn("hidden", "md:flex space-x-8 text-lg")}>
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className={cn(
              "font-normal text-foreground",
              "hover:text-primary hover:scale-110",
              "transition-all duration-300",
            )}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* mobile menu */}
      <button
        className={cn("md:hidden", "text-foreground z-100")}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* mobile nav */}
      <div
        className={cn(
          "md:hidden",
          isMenuOpen
            ? "flex flex-col gap-5 justify-center items-center"
            : "hidden",
          "fixed inset-0 z-10 text-lg w-full bg-background/80",
          "transition-all duration-300",
        )}
      >
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            onClick={toggleMenu}
            className={cn(
              "font-normal text-foreground",
              "hover:text-primary hover:scale-110",
              "transition-all duration-300",
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
