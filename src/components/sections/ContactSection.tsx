import { cn } from "@/libs/utils";
import { useEffect, useState, type FormEvent } from "react";
import { Mail, ThumbsUp } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [navHeight, setNavHeight] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const date = new Date();

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      title: "I'm interested in your Porfolio",
      time: date.toISOString(),
      fromName:
        firstName[0].toUpperCase() +
        firstName.slice(1) +
        " " +
        lastName[0].toUpperCase() +
        lastName.slice(1),
      fromEmail: email,
      message: message,
    };

    if (serviceID && templateID && publicKey) {
      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log("Email has been sent", response);
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          window.alert("Email has been sent!");
        })
        .catch((error) => {
          console.error("Error in sending email", error);
        });
    } else {
      console.error("Error: EmailJS env variables are missing!");
    }
  };

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
          "md:flex-row justify-center items-center",
        )}
      >
        <div className="flex-2 md:flex-1 p-6 md:p-10 lg:p-20 flex flex-col justify-evenly gap-6 md:gap-10">
          {/* header */}
          <div className="flex flex-col justify-between">
            <h1 className="text-lg md:text-xl lg:text-2xl text-foreground font-bold">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xs md:text-sm lg:text-lg text-foreground md:max-w-[70%]">
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

        <form
          className="flex-3 md:flex-1 flex flex-col gap-4 md:gap-6 p-6 md:p-10 lg:p-20"
          onSubmit={handleSubmit}
        >
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="text-foreground text-xs md:text-sm rounded-none"
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="text-foreground text-xs md:text-sm rounded-none"
              />
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col gap-2 md:gap-4">
            <Label
              className="font-medium text-xs md:text-sm text-foreground"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-foreground text-xs md:text-sm rounded-none"
            />
          </div>

          {/* content */}
          <div className="flex-1 flex flex-col gap-2 md:gap-4">
            <Label
              className="font-medium text-xs md:text-sm text-foreground"
              htmlFor="message"
            >
              Message
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message hear"
              className="text-foreground flex-1 text-xs md:text-sm rounded-none"
            />
          </div>

          {/* content */}
          <div className="flex justify-end">
            <Button
              variant="secondary"
              type="submit"
              className="text-xs md:text-sm text-muted"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export { ContactSection };
