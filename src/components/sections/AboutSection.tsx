import { cn } from "@/libs/utils";
import { ArrowDown } from "lucide-react";
import { Card, CardDescription } from "../ui/card";
import { FaPenNib } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdInterests } from "react-icons/md";
import { ImDatabase } from "react-icons/im";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
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
      id="about"
      className={cn("h-screen min-h-screen")}
      style={{ paddingTop: `${navHeight}px` }}
    >
      <div
        className={cn(
          "h-full p-6 sm:p-8 md:p-10 lg:px-16",
          "flex flex-col items-center justify-between",
        )}
      >
        {/* title */}
        <h1 className="text-lg md:text-xl lg:text-2xl text-foreground font-bold">
          About <span className="text-primary">Me</span>
        </h1>

        <div className="h-full flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {/* information */}
          <div className="flex-1 min-w-60 flex flex-col items-center justify-center gap-4 md:gap-6">
            <Card
              className={cn(
                "flex-1 p-4 md:p-6",
                "hover:translate-[-0.3em] transition-all duration-300",
              )}
            >
              <CardDescription className="text-sm lg:text-lg">
                {"Hello! I'm "}
                <span className="text-secondary">Eger</span>
                {", a "}
                <span className="text-primary">dedicated student</span>
                {" currently pursuing a degree in "}
                <span className="text-secondary">Computer Engineering</span>
                {". My passion lies in "}
                <span className="text-accent">developing applications</span>
                {" and "}
                <span className="text-emerald-500">building tools</span>
                {" that not only "}
                <span className="text-cyan-500">simplify workflows</span>
                {" but also "}
                <span className="text-pink-500">
                  enhance overall efficiency
                </span>
                {"—always with a commitment to maintaining "}
                <span className="text-yellow-500">high quality</span>
                {"."}
              </CardDescription>
            </Card>
            <Card
              className={cn(
                "flex-1 p-4 md:p-6",
                "hover:translate-[-0.3em] transition-all duration-300",
              )}
            >
              <CardDescription className="text-sm lg:text-lg">
                <span>
                  {"I thrive on "}
                  <span className="text-primary">solving problems</span>
                  {", "}
                  <span className="text-secondary">
                    experimenting with new technologies
                  </span>
                  {", and "}
                  <span className="text-accent">continuously learning</span>
                  to
                  {"improve my craft. Whether it's "}
                  <span className="text-emerald-500">
                    automating repetitive tasks
                  </span>
                  {", "}
                  <span className="text-cyan-500">
                    optimizing existing processes
                  </span>
                  {", or "}
                  <span className="text-pink-500">
                    designing innovative solutions
                  </span>
                  {", I enjoy every step of the "}
                  <span className="text-yellow-500">development journey</span>.
                </span>
              </CardDescription>
            </Card>
          </div>

          {/* technologies */}
          <div className="flex-1 min-w-60 flex flex-col items-center justify-center gap-4 md:gap-6">
            <Card
              className={cn(
                "flex-1 w-full p-4 md:p-6",
                "hover:translate-[-0.3em] transition-all duration-300",
              )}
            >
              <CardDescription className="text-sm lg:text-lg flex gap-2">
                <FaPenNib size={24} />
                <div className="flex flex-wrap gap-2">
                  <span>Programming Languages:</span>
                  <Badge className="rounded-xl text-card font-semibold bg-green-500">
                    Python
                  </Badge>
                  <Badge className="rounded-xl text-card font-semibold bg-yellow-400">
                    JavaScript
                  </Badge>
                  <Badge className="rounded-xl text-card font-semibold bg-blue-500">
                    Typescript
                  </Badge>
                </div>
              </CardDescription>
            </Card>

            <Card
              className={cn(
                "flex-1 w-full p-4 md:p-6",
                "hover:translate-[-0.3em] transition-all duration-300",
              )}
            >
              <CardDescription className="text-sm lg:text-lg flex gap-4">
                <FaTools size={24} />
                <div className="flex flex-wrap gap-2">
                  <span>Frameworks & Tools:</span>
                  <Badge className="rounded-xl text-card font-semibold bg-cyan-500">
                    React
                  </Badge>
                  <Badge className="rounded-xl text-card font-semibold bg-gray-900 dark:bg-gray-500">
                    Next.js
                  </Badge>
                  <Badge className="rounded-xl text-card font-semibold bg-teal-500">
                    FastAPI
                  </Badge>
                  <Badge className="rounded-xl text-card font-semibold bg-orange-600">
                    Git
                  </Badge>
                  <Badge className="rounded-xl text-card font-semibold bg-yellow-500">
                    Linux
                  </Badge>
                </div>
              </CardDescription>
            </Card>

            <Card
              className={cn(
                "flex-1 w-full p-4 md:p-6",
                "hover:translate-[-0.3em] transition-all duration-300",
              )}
            >
              <CardDescription className="text-sm lg:text-lg flex gap-4">
                <ImDatabase size={24} />
                <div className="flex flex-wrap gap-2">
                  <span>Databases:</span>
                  <Badge className="rounded-xl text-card font-semibold bg-blue-700">
                    PostgreSQL
                  </Badge>
                  <Badge className="rounded-xl text-card font-semibold bg-cyan-600">
                    SQLite
                  </Badge>
                </div>
              </CardDescription>
            </Card>

            <Card
              className={cn(
                "flex-1 w-full p-4 md:p-6",
                "hover:translate-[-0.3em] transition-all duration-300",
              )}
            >
              <CardDescription className="text-sm lg:text-lg flex gap-4">
                <MdInterests size={24} />
                <div className="flex flex-wrap gap-2">
                  <span>Interests:</span>
                  <Badge className="rounded-xl text-card font-semibold bg-pink-500">
                    Automation
                  </Badge>
                  <Badge className="rounded-xl text-card font-semibold bg-amber-500">
                    Productivity Tools
                  </Badge>
                  <Badge className="rounded-xl text-card font-semibold bg-purple-500">
                    Full-Stack Development
                  </Badge>
                </div>
              </CardDescription>
            </Card>
          </div>
        </div>

        <a
          href="#projects"
          className={cn(
            "flex flex-col justify-center items-center",
            "animate-bounce duration-300",
          )}
        >
          <span className="text-foreground text-sm lg:text-lg">Scroll</span>

          <ArrowDown className="text-secondary" size={24} />
        </a>
      </div>
    </section>
  );
};

export { AboutSection };
