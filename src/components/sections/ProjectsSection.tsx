import { cn } from "@/libs/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { ArrowDown, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import TaskTrackerCLIPNG from "/projects/task-tracker-cli.png";
import BLDSolverCLIPNG from "/projects/3x3-bld-solver.png";
import FinanceTrackerPNG from "/projects/finance-tracker.png";
import HelpDeskTicketingPNG from "/projects/help-desk-ticketing.png";
import PortfolioPNG from "/projects/porfolio.png";

const projects = [
  {
    id: 0,
    title: "Task Tracker CLI",
    description:
      "A CLI-based tool that to what you need to do, what you have done, and what you are currently working on.",
    image: TaskTrackerCLIPNG,
    tags: ["Python", "CLI"],
    demoUrl: "#",
    githubUrl: "https://github.com/ItIsMeMyselfAndI/task-tracker-cli.git",
  },
  {
    id: 2,
    title: "3x3 BLD Solution Generator CLI",
    description:
      "A CLI-based 3x3 rubicks cube solution generator script that utilizes M2 algorithm for edges and Old Pochman algorithm for conrners.",
    image: BLDSolverCLIPNG,
    tags: ["Python", "NumPy", "CLI"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/ItIsMeMyselfAndI/3x3-bld-solution-generator-cli.git",
  },
  {
    id: 3,
    title: "Finance Tracker",
    description:
      "An offline desktop-based application designed for students to monitor their daily spending habits, budget allocation, and overall financial health.",
    image: FinanceTrackerPNG,
    tags: ["Python", "Tkinter", "SQLite", "Pyinstaller"],
    demoUrl: "#",
    githubUrl: "https://github.com/ItIsMeMyselfAndI/finance-tracker.git",
  },
  {
    id: 4,
    title: "Help Desk Ticketing",
    description:
      "A web-based ticketing system that allows users to report issues and help support teams track, manage, and resolve them efficiently.",
    image: HelpDeskTicketingPNG,
    tags: [
      "React",
      "Tailwindcss",
      "CSS",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "FastAPI",
    ],
    demoUrl: "https://help-desk-ticketing-system-ashen.vercel.app",
    githubUrl:
      "https://github.com/ItIsMeMyselfAndI/help-desk-ticketing-system.git",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "An interactive website showcasing the projects I've built.",
    image: PortfolioPNG,
    tags: ["React", "Tailwindcss", "CSS"],
    demoUrl: "https://portfolio-itismemyselfandis-projects.vercel.app",
    githubUrl: "https://github.com/ItIsMeMyselfAndI/portfolio.git",
  },
];

const ProjectsSection = () => {
  const [navHeight, setNavHeight] = useState(0);
  const [activeProjectID, setActiveProjectID] = useState<number | undefined>(
    undefined,
  );

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
      id="projects"
      className={cn("h-screen min-h-screen")}
      style={{ paddingTop: `${navHeight}px` }}
    >
      <div
        className={cn(
          "h-full p-6 sm:p-8 md:p-10",
          "flex flex-col items-center justify-between",
        )}
      >
        {/* title */}
        <h1 className="text-2xl text-foreground font-bold">
          Featured <span className="text-primary">Projects</span>
        </h1>

        <Carousel className="max-w-[70%]">
          <CarouselContent className="items-center">
            {projects
              .slice()
              .reverse()
              .map((project) => (
                <CarouselItem
                  key={project.id}
                  className="sm:basis-1/2 md:basis-1/3"
                >
                  <Card
                    className="border-none pt-0 shadow-2xl"
                    onMouseEnter={() => setActiveProjectID(project.id)}
                    onMouseLeave={() => setActiveProjectID(undefined)}
                  >
                    {/* image */}
                    <div className="overflow-hidden rounded-t-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <CardContent className="space-y-0">
                      {/* title */}
                      <motion.div
                        animate={{
                          height:
                            activeProjectID === project.id ? "auto" : "1.5rem",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardTitle className="overflow-hidden whitespace-nowrap text-ellipsis text-foreground text-sm lg:text-md">
                          {project.title}
                        </CardTitle>
                      </motion.div>

                      {/* description */}
                      <motion.div
                        animate={{
                          height: activeProjectID === project.id ? "auto" : "0",
                          marginTop:
                            activeProjectID == project.id ? "0.5rem" : "0",
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {activeProjectID === project.id && (
                          <CardDescription>
                            {project.description}
                          </CardDescription>
                        )}
                      </motion.div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-4 items-start">
                      {/* tags */}
                      <motion.div
                        animate={{
                          height:
                            activeProjectID === project.id ? "auto" : "1.5rem",
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap gap-2 overflow-hidden"
                      >
                        {project.tags.map((tag) => (
                          <Badge variant="secondary" className="rounded-2xl">
                            {tag}
                          </Badge>
                        ))}
                      </motion.div>

                      {/* links */}
                      <div className="text-muted-foreground flex flex-wrap gap-2">
                        <a href={project.demoUrl}>
                          <ExternalLink size={20} />
                        </a>
                        <a href={project.githubUrl}>
                          <Github size={20} />
                        </a>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious
            variant="default"
            className="hover:cursor-pointer hover:scale-120 transition-all duration-300"
          />
          <CarouselNext
            variant="default"
            className="hover:cursor-pointer hover:scale-120 transition-all duration-300"
          />
        </Carousel>

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

export { ProjectsSection };
