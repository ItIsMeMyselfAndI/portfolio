import { cn } from "@/libs/utils";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { SilhouetteIcon } from "@/assets/SilhouetteIcon";

const HeroSection = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const nav = document.querySelector("nav");
      setNavHeight(nav ? nav.offsetHeight : 0);
      console.log(nav?.offsetHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className={cn("h-screen min-h-screen")}
      style={{ paddingTop: `${navHeight}px` }}
    >
      <div
        className={cn(
          "h-full p-6 sm:p-8 md:p-10 lg:px-16",
          "flex flex-col items-center justify-evenly",
        )}
      >
        <div
          className={cn(
            "flex flex-col sm:flex-row justify-between items-center",
          )}
        >
          {/* main */}
          <div className="flex-1 space-y-4 md:space-y-6">
            {/* name */}
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl">
              <p className="text-muted-foreground">Hi, I am </p>
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl tracking-tight">
                <span className="text-secondary">Eger </span>
                <span className="text-primary">Mirasol</span>
              </p>
            </h1>

            {/* description */}
            <p className="md:max-w-[50vw] text-sm sm:text-lg md:text-xl lg:text-2xl text-foreground">
              Welcome to my portfolio, where I showcase my work, projects, and
              the tools I've built to make both my workflow and others' more
              effective.
            </p>

            {/* socials */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground">
              <a
                href="https://github.com/ItIsMeMyselfAndI"
                className="hover:scale-120 transition-all duration-300"
              >
                <FaSquareGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/eger-mirasol-629007372"
                className="hover:scale-120 transition-all duration-300"
              >
                <IoLogoLinkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/eger.mirasol.3"
                className="hover:scale-120 transition-all duration-300"
              >
                <FaFacebookSquare size={24} />
              </a>
            </div>

            {/* buttons */}
            <div className="w-full flex flex-wrap gap-2 sm:gap-4 md:gap-6">
              <a
                href="#projects"
                className={cn(
                  "text-foreground text-xs md:text-sm",
                  "px-4 py-1 bg-primary rounded-2xl",
                  "hover:cursor-pointer hover:translate-y-[-0.5em] hover:scale-110",
                  "transition-all duration-300",
                )}
              >
                View my works
              </a>
              <a
                href="#contact"
                className={cn(
                  "text-muted text-xs md:text-sm",
                  "px-4 py-1 bg-secondary rounded-2xl",
                  "hover:cursor-pointer hover:translate-y-[-0.5em] hover:scale-110",
                  "transition-all duration-300",
                )}
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* picture */}
          <div className="w-[40%]">
            <div
              className={cn(
                "w-full scale-90 aspect-square bg-muted rounded-full",
                "flex justify-center mt-6 md:mt-0",
              )}
            >
              <SilhouetteIcon className="text-primary h-full -translate-x-[20%] scale-120" />
            </div>
          </div>
        </div>

        {/* scroll */}
        <a
          href="#about"
          className={cn(
            "flex flex-col justify-center items-center",
            "animate-bounce duration-300",
          )}
        >
          <span className="text-foreground text-sm md:text-lg">Scroll</span>
          <ArrowDown className="text-secondary" size={24} />
        </a>
      </div>
    </section>
  );
};

export { HeroSection };
