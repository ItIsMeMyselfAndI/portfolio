import { cn } from "@/libs/utils";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Mail, ThumbsUp } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { Label } from "@radix-ui/react-label";

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
          "h-full p-6 sm:p-8 md:p-10",
          "flex flex-col gap-4",
          "md:flex-row",
        )}
      >
        <div className="p-4 md:p-6 flex-2 flex flex-col justify-between bg-amber-700">
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

        {/* send email */}
        <form className="flex-3 p-4 md:p-4 bg-amber-700"></form>

        {/*  */}
      </div>
    </section>
  );
};

export { ContactSection };
