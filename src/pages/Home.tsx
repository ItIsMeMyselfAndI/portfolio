import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";

const Home = () => {
  return (
    <div className="bg-background">
      <ThemeToggle />
      {/* navbar */}
      <Navbar />
      {/* hero */}
      {/* about me */}
      {/* projects */}
      {/* contact */}
      {/* footer */}
    </div>
  );
};

export { Home };
