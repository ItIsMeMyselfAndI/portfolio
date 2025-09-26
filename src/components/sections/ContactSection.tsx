import { cn } from "@/libs/utils";
import { useEffect, useState } from "react";
import { Mail, ThumbsUp } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
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
      id="contact"
      className={cn("h-screen min-h-screen")}
      style={{ paddingTop: `${navHeight}px` }}
    >
      <div
        className={cn(
          "h-full p-6 sm:p-8 md:p-10 lg:px-16",
          "flex flex-col gap-2 md:gap-4",
          "md:flex-row",
        )}
      >
        <div className="flex-2 md:flex-1 p-6 md:p-10 lg:p-20 flex flex-col justify-evenly">
          {/* header */}
          <div className="flex flex-col justify-between">
            <h1 className="text-lg md:text-xl lg:text-2xl text-foreground font-bold">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xs md:text-sm lg:text-lg text-foreground max-w-[70%]">
              Have a project in mind or want to collaborate? Feel free to reach
              out.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            {/* gmail */}
            <div className="flex flex-row items-center gap-4 md:gap-6 text-foreground">
              <Mail size={24} />
              <a
                href="mailto:egermirasol2023@gmail.com"
                className={cn(
                  "text-xs lg:text-sm truncate",
                  "hover:border-b-1 hover:text-secondary transition-all duration-300",
                )}
              >
                egermirasol2023@gmail.com
              </a>
            </div>
            {/* socials */}
            <div className="flex flex-row gap-4 md:gap-6 text-foreground">
              <ThumbsUp size={24} />
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
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
            </div>
          </div>
        </div>

        <form className="flex-3 md:flex-1 flex flex-col gap-4 md:gap-6 p-6 md:p-10 lg:p-20">
          {/* full name  */}
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="flex flex-col gap-2 md:gap-4">
              <Label
                className="font-medium text-xs md:text-sm text-foreground"
                htmlFor="first-name"
              >
                First Name
              </Label>
              <Input
                id="first-name"
                type="text"
                className="text-xs md:text-sm rounded-none"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <Label
                className="font-medium text-xs md:text-sm text-foreground"
                htmlFor="last-name"
              >
                Last Name
              </Label>
              <Input
                id="last-name"
                type="text"
                className="text-xs md:text-sm rounded-none"
              />
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col gap-2 md:gap-4">
            <Label
              className="font-medium text-xs md:text-sm text-foreground"
              htmlFor="email"
            >
              Last Name
            </Label>
            <Input
              id="email"
              type="email"
              className="text-xs md:text-sm rounded-none"
            />
          </div>

          {/* content */}
          <div className="flex-1 flex flex-col gap-2 md:gap-4">
            <Label
              className="font-medium text-xs md:text-sm text-foreground"
              htmlFor="content"
            >
              Message
            </Label>
            <Textarea
              id="content"
              placeholder="Type your message hear"
              className="flex-1 text-xs md:text-sm rounded-none"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export { ContactSection };
