import { cn } from "@/libs/utils";
import { ArrowDown } from "lucide-react";
import { Card, CardDescription } from "../ui/card";
import { FaPenNib } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdInterests } from "react-icons/md";

const AboutSection = () => {
  return (
    <section
      id="about"
      className={cn(
        "px-6 sm:px-10 md:px-20 lg:px-30",
        "min-h-screen space-y-4 md:space-y-6",
        "flex flex-col items-center justify-evenly",
      )}
    >
      {/* title */}
      <h1 className="text-2xl text-foreground font-bold">
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
            <CardDescription className="text-sm md:text-lg">
              Hello! I'm <span className="text-secondary">Eger</span>, a{" "}
              <span className="text-primary">dedicated student</span> currently
              pursuing a degree in{" "}
              <span className="text-secondary">Computer Engineering</span>. My
              passion lies in{" "}
              <span className="text-accent">developing applications</span> and{" "}
              <span className="text-emerald-500">building tools</span> that not
              only <span className="text-cyan-500">simplify workflows</span> but
              also{" "}
              <span className="text-pink-500">enhance overall efficiency</span>
              —always with a commitment to maintaining{" "}
              <span className="text-yellow-500">high quality</span>.
            </CardDescription>
          </Card>
          <Card
            className={cn(
              "flex-1 p-4 md:p-6",
              "hover:translate-[-0.3em] transition-all duration-300",
            )}
          >
            <CardDescription className="text-sm md:text-lg">
              <span>
                I thrive on{" "}
                <span className="text-primary">solving problems</span>,{" "}
                <span className="text-secondary">
                  experimenting with new technologies
                </span>
                , and <span className="text-accent">continuously learning</span>{" "}
                to improve my craft. Whether it's{" "}
                <span className="text-emerald-500">
                  automating repetitive tasks
                </span>
                ,{" "}
                <span className="text-cyan-500">
                  optimizing existing processes
                </span>
                , or{" "}
                <span className="text-pink-500">
                  designing innovative solutions
                </span>
                , I enjoy every step of the{" "}
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
            <CardDescription className="text-sm md:text-lg flex gap-4">
              <FaPenNib size={24} />
              <p>
                Programming Languages:{" "}
                <span className="text-green-500">Python</span>,{" "}
                <span className="text-yellow-400">JavaScript</span>,{" "}
                <span className="text-blue-500">Typescript</span>
              </p>
            </CardDescription>
          </Card>
          <Card
            className={cn(
              "flex-1 w-full p-4 md:p-6",
              "hover:translate-[-0.3em] transition-all duration-300",
            )}
          >
            <CardDescription className="text-sm md:text-lg flex gap-4">
              <FaTools size={24} />
              <p>
                Frameworks &amp; Tools:{" "}
                <span className="text-cyan-500">React</span>,{" "}
                <span className="text-gray-900 dark:text-gray-100">
                  Next.js
                </span>
                , <span className="text-red-500">Git</span>,{" "}
                <span className="text-green-600">Linux</span>
              </p>
            </CardDescription>
          </Card>
          <Card
            className={cn(
              "flex-1 w-full p-4 md:p-6",
              "hover:translate-[-0.3em] transition-all duration-300",
            )}
          >
            <CardDescription className="text-sm md:text-lg flex gap-4">
              <MdInterests size={24} />
              <p>
                Interests: <span className="text-pink-500">Automation</span>,{" "}
                <span className="text-amber-500">productivity tools</span>,{" "}
                <span className="text-purple-500">full-stack development</span>
              </p>
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
        <span className="text-foreground text-sm md:text-lg">Scroll</span>
        <ArrowDown className="text-secondary" size={24} />
      </a>
    </section>
  );
};

export { AboutSection };
