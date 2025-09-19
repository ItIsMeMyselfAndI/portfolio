import { cn } from "@/libs/utils";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import SilhoutteIcon from "@/assets/silhouette-maleakimbo.svg?react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className={cn(
        "relative min-h-full px-5 sm:px-10 md:px-20 lg:px-30",
        "h-full flex flex-wrap gap-6 md:gap-10 justify-center items-center",
      )}
    >
      {/* texts */}
      <div className="space-y-4 md:space-y-6 flex-1 min-w-60 md:min-w-xs">
        {/* name */}
        <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          <p className="text-muted-foreground">Hi, I am </p>
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl tracking-tight">
            <span className="text-secondary">Eger</span>{" "}
            <span className="text-primary">Mirasol</span>
          </p>
        </h1>

        {/* description */}
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-foreground">
          Welcome to my portfolio, where I showcase my work, projects, and the
          tools I've built to make both my workflow and others' more effective.
        </p>

        {/* socials */}
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
          <a href="https://github.com/ItIsMeMyselfAndI">
            <FaSquareGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/eger-mirasol-629007372">
            <IoLogoLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com/eger.mirasol.3">
            <FaFacebookSquare size={24} />
          </a>
        </div>

        {/* buttons */}
        <div className="w-full flex flex-wrap gap-4 md:gap-6">
          <a
            href="#projects"
            className={cn(
              "text-foreground text-sm",
              "px-4 py-1 bg-primary rounded-2xl",
              "hover:cursor-pointer",
            )}
          >
            My works
          </a>
          <a
            href="#contact"
            className={cn(
              "text-muteed text-sm",
              "px-4 py-1 bg-secondary rounded-2xl",
              "hover:cursor-pointer",
            )}
          >
            Contact me
          </a>
        </div>
      </div>

      {/* texts */}
      <div className="flex-1 min-w-60 flex items-center">
        <div
          className={cn(
            "w-full aspect-square scale-70 bg-muted rounded-full",
            "flex justify-center",
          )}
        >
          <SilhoutteIcon className="text-primary h-full translate-x-[-40%] scale-120" />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
