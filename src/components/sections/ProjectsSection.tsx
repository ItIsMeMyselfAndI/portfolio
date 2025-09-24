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

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
};
import projectsData from "@/data/projects.json";
const projects: ProjectType[] = projectsData as ProjectType[];

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
